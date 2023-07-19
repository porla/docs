---
title: cron
position: 10
---

## Description

Adds support for scheduling callbacks based on a cron schedule.

## Exports

### Function `schedule`

Creates a cron schedule that invokes the specified callback. The function takes
a Lua table with two properties, `expression` and `callback`.

## Example usage

```lua
local cron = require("cron")

local schedule = cron.schedule({
    expression = "*/5 * * * * *",
    callback   = function()
        print("I'm a callback")
    end
})
```
