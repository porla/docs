# `Sleep`

The `Sleep` action delays execution for the specified amount of time.

:::info
The delay is only for the current workflow. Only actions specified after the
Sleep action will be delayed.
:::

## Inputs

 * `timeout` - an integer representing the time in milliceconds to delay
   execution.

## Usage

```lua
local Sleep = require "porla.actions.Sleep"
```

### Example

```lua
Sleep:new{
  timeout = 1500
}
```
