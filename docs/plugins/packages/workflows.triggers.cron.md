---
title: workflows.triggers.cron
position: 1050
---

## Description

Trigger a workflow based on a cron schedule.

## Exports

A function to run as the `trigger` of a workflow. This function takes a string
as a cron expression and returns the trigger for the workflow.

## Example usage

```lua
local workflows = require("workflows")
local log       = require("workflows.actions.log")
local cron      = require("workflows.triggers.cron")

function porla.init()
    workflows.add({
        trigger = cron("*/5 * * * * *"),
        actions = {
            log("i'm a cron")
        }
    })
end
```
