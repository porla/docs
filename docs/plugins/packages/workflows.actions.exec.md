---
title: workflows.actions.exec
position: 1005
---

## Description

Execute scripts and applications from a workflow.

## Exports

A function to run inside the `actions` of a workflow. This function takes a Lua
table with the following keys.

 * `args` - an array of arguments to pass to the executable. These can be either
   strings or functions taking a context that returns a string.
 * `file` - the path to the executable.

### Workflow outputs

This action will put a Lua table in the steps context. The table has the
following keys.

 * `exit_code` - the exit code of the executable.
 * `std_out` - standard output.
 * `std_err` - standard error.

## Example usage

```lua
local workflows = require("workflows")
local exec      = require("workflows.actions.exec")
local added     = require("workflows.triggers.torrent").added

function porla.init()
    workflows.add({
        trigger = added(),
        actions = {
            exec({
                file = "/usr/bin/curl",
                args = { "https://www.google.com" }
            })
        }
    })
end
```
