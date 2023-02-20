# `Sleep`

The `Sleep` action delays execution for the specified amount of time.

:::info
The delay is only for the current workflow. Only actions specified after the
Sleep action will be delayed.
:::

## Inputs

 * `timeout` - an integer representing the time in milliceconds to delay
   execution.

## Example usage

```lua
local Workflow = require "porla.Workflow"
local Sleep    = require "porla.actions.Sleep"

return Workflow:new{
  on      = "TorrentAdded",
  actions = {
    Sleep:new{
      timeout = 1500
    }
  }
}
```
