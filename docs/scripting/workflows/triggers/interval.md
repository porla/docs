# `Interval`

The `Interval` trigger schedules a workflow based on an interval.

## Configuration

 * `interval` - a number that specifies the interval in _milliseconds_.

## Usage

```lua
local Interval = require "porla.triggers.Interval"
```

### Example

```lua
Interval:new{
  interval = 5000
}
```
