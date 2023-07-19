---
title: workflows.actions.sleep
position: 1025
---

## Description

A simple delay.

## Exports

A function to run inside the `actions` of a workflow. This function takes a number
that represents the milliseconds to sleep.

## Example usage

```lua
local workflows = require("workflows")
local sleep     = require("workflows.actions.sleep")
local added     = require("workflows.triggers.torrent").added

function porla.init()
    workflows.add({
        trigger = added(),
        actions = {
            sleep(1000)
        }
    })
end
```
