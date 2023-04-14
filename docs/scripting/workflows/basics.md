---
sidebar_position: 10
---

# Basics

Workflows are a sequence of actions that are executed by _triggers_, configured
by the user and run asynchronously. Each action can have inputs and outputs.

There are various triggers in Porla to let you run actions when torrents are
added, finishes downloading, or you can run workflows on a cron schedule.

A simple workflow that logs a message every time a torrent is added can be
configured like this:

```lua title="workflows/simple-workflow.lua"
local Workflow     = require "porla.Workflow"
local Log          = require "porla.actions.Log"
local TorrentAdded = require "porla.triggers.TorrentAdded"

return Workflow:new{
  on      = TorrentAdded:new{},
  actions = {
    Log:new{
      message = function(ctx)
        return string.format("Hello %s", ctx.torrent.name)
      end
    }
  }
}
```

There are many different actions and triggers in Porla.

## Filters

A workflow can use a filter to determine if it should run for a specific
torrent. The filter can be specified either as a PQL query or as a regular Lua
function that takes a _context_ and returns true or false.


### PQL filters

Using our simple workflow example, we can adjust it to run on when a torrent
finishes, if that torrent is above 1Gb in size.

```lua title="workflows/pql-filter.lua"
local Workflow        = require "porla.Workflow"
local Log             = require "porla.actions.Log"
local TorrentFinished = require "porla.triggers.TorrentFinished"

return Workflow:new{
  on      = TorrentFinished:new{}
  filter  = "size >= 1gb",
  actions = {
    Log:new{
      message = "a huge torrent finished"
    }
  }
}
```

### Lua function filters

If PQL is not a good fit, or if you need more advanced filtering, you can use a
Lua function instead. The function takes a _context_ where you can access the
current torrent, and should return a truthy value if the workflow should run.

```lua title="workflows/function-filter.lua"
local Workflow        = require "porla.Workflow"
local Log             = require "porla.actions.Log"
local TorrentFinished = require "porla.triggers.TorrentFinished"

return Workflow:new{
  on      = TorrentFinished:new{}
  filter  = function(ctx)
    return ctx.torrent.size % 2 == 0
  end,
  actions = {
    Log:new{
      message = "a torrent with an even size finished"
    }
  }
}
```

## Triggers

Triggers are what executes the workflow. A trigger wraps some event, adds a
context and launches the workflow. Some triggers run directly when a torrent
reaches some state, others (such as the cron trigger) will run on its own.

 * [_Cron_](triggers/cron.md) - runs a workflow based on the schedule specified
   by the cron expression.
 * [_Interval_](triggers/interval.md) - runs a workflow based on an interval in
   milliseconds.
 * [_TorrentAdded_](triggers/torrent_added.md) - the workflow will run for each
   torrent that is added to the session.
 * [_TorrentFinished_](triggers/torrent_finished.md) - the workflow will run
   for each torrent that finishes downloading.
 * [_TorrentMoved_](triggers/torrent_moved.md.md) - the workflow will run for
   each torrent that is moved.

## Actions

Actions are what actually does things in a workflow. Porla has a bunch of
different actions for various scenarios, such as making HTTP requests, starting
processes, etc.

Each workflow specifies a series of actions that are run for each torrent that
matches the filter for that workflow.

### Inputs

Action inputs are Lua tables that the user provides. For the _Log_ action the
input is a table with a single `message` key.

```lua
Log:new{
  message = "Some log message"
}
```

Inputs can be more advanced as well, and many inputs that take a value can also
take a function that returns a value in order for the action to be configured
by the _context_.

:::info
Refer to a specific action's documentation to learn more about which inputs and
outputs it has.
:::

### Outputs

Some actions produce output. These outputs can be accessed in the `actions`
context property. This property is an array of Lua objects, one for each action
that has ran.

For example, combining the `Exec` and `Log` action to log the output of the
process.

```lua
Exec:new{
  file = "/usr/bin/curl",
  args = {"http://ip-api.com/json/"}
},
Log:new{
  message = function(ctx)
    return string.format("IP-API output: %s", ctx.actions[1].std_out)
  end
}
```

:::info
Remember that Lua arrays generally start at index 1, which is also true for
the `actions` output array.
:::


## Context

A workflow is associated with a context that provides state for the currently
executing workflow instance. The context is a Lua table with some pre-defined
properties.

The `actions` property, for example, is an array of all previous action outputs
and can be accessed by subsequent actions.

Further, each event may set specific context properties - such as the various
torrent events. These set the `torrent` context, which allows you to query for
torrent information.

For example, accessing the `torrent` context requires you to use a function
when rendering a log message. This function gets passed the context and should
return a string with the message to be rendered.

```lua
Log:new{
  message = function(ctx)
    return string.format("%s", ctx.torrent.name)
  end
}
```
