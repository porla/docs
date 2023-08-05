---
title: workflows.actions.log
position: 1015
---

## Description

Simple logging from workflows.

## Exports

A function to run inside the `actions` of a workflow. This function takes a string
or a function taking a context that returns a string.

## Example usage

```lua
local workflows = require("workflows")
local log       = require("workflows.actions.log")
local added     = require("workflows.triggers.torrent").added

function porla.init()
    workflows.add({
        trigger = added(),
        actions = {
            log("Hello, world!"),
            log(
                function(ctx)
                    return string.format("Torrent: %s Added", ctx.torrent.name)
                end
            )
        }
    })
end
```
