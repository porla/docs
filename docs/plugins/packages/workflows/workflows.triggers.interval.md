---
title: workflows.triggers.interval
position: 1055
---

## Description

Trigger a workflow based on an interval.

## Exports

A function to run as the `trigger` of a workflow. This function takes a number
which is the number of milliseconds between each trigger of the workflow.

## Example usage

```lua
local workflows = require("workflows")
local log       = require("workflows.actions.log")
local interval  = require("workflows.triggers.interval")

function porla.init()
    workflows.add({
        trigger = interval(1500),
        actions = {
            log("i'm a cron")
        }
    })
end
```
