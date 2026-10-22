# `porla_timers`

Create various types of timers, such as one-shot, intervals and cron schedules.

## Exports

### <code>cron(expr: string, callback: function): [PoCancellable](../types/pocancellable.md)</code>

<Since>v0.42.0</Since>

Sets up a cron schedule and returns a cancellable that can be used to cancel
the cron schedule.

`expr` takes six fields; `sec min hour dom month dow` (croncpp syntax). An
invalid expression raises.

Runs in the server's local time.

#### Example

```lua
local timers = require("porla_timers")

timers.cron("*/5 * * * * ?", function()
    print("I print every 5 seconds")
end)
```

### `epoch(): number`

The current Unix time in milliseconds.

### <code>interval(ms: number, callback: function): [PoCancellable](../types/pocancellable.md)</code>

<Since>v0.42.0</Since>

Sets up a recurring interval that fires every N milliseconds.

#### Example

```lua
local timers = require("porla_timers")

timers.interval(3000, function()
    print("I print every 3 seconds")
end)
```

### <code>timeout(ms: number, callback: function): [PoCancellable](../types/pocancellable.md)</code>

<Since>v0.42.0</Since>

Sets up a one-shot timeout that fires once after N milliseconds.

#### Example

```lua
local timers = require("porla_timers")

timers.timeout(300, function()
    print("I fire once after 300 milliseconds")
end)
```