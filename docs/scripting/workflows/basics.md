---
sidebar_position: 10
---

# Basics

Workflows are a sequence of actions that are triggered by events, configured by
the user and executed asynchronously. Each action can have inputs and outputs.

The simplest workflow has no actions and does nothing.

```lua title="workflows/simple-workflow.lua"
local Workflow = require "porla.Workflow"

return Workflow:new{
  on      = "TorrentAdded"
  actions = {}
}
```

## Events

There are a few events you can use that will trigger a workflow.

 * `TorrentAdded` - the workflow will run for each torrent that is added to the
   session.
 * `TorrentFinished` - the workflow will run for each torrent that finishes
   downloading.
 * `TorrentMoved` - the workflow will run for each torrent after it is moved.

## Inputs

Action inputs Lua tables that the user provides. For the _Log_ action the input
is a table with a single `message` key.

```lua
Log:new{
  message = "Some log message"
}
```

Inputs can be more advanced as well, and many inputs that take a value can also
take a function that returns a value in order for the action to be configured
by the _context_.

## Context

A workflow is associated with a context that provides state for the currently
executing workflow instance. The context is a Lua table with some pre-defined
properties.

The `actions` property, for example, is an array of all previous action outputs
and can be accessed by subsequent actions.

Further, each event may set specific context properties - such as the various
torrent events. These set the `torrent` context, which allows you to query for
torrent information. The available properties are `name`, `category`, `tags`, 
`save_path` and `size`.

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

## Outputs

Some actions produce output. These outputs can be accessed in the `actions`
context property. This property is an array of Lua objects. Refer to each
actions own documentation to see the output they produce.

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
