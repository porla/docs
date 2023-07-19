---
title: workflows
position: 1000
---

## Description

Adds support for running asynchronous workflows in an easy way.

## Exports

### Function `add`

Adds a workflow to Porla. The function takes a Lua table with the following keys.

 * `trigger` - the trigger for the workflow. See the `workflows.triggers` packages.
 * `filter` - (optional) either a PQL query string or a function that takes a context and
   returns a boolean.
 * `actions` - an array of actions for to run for this workflow. See the
   `workflows.actions` packages.

## Example usage

```lua
local workflows = require("workflows")
local log       = require("workflows.actions.log")
local added     = require("workflows.triggers.torrent").added

function porla.init()
    workflows.add({
        trigger = added(),
        actions = {
            log("A torrent was added")
        }
    })
end
```
