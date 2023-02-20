# `TorrentReannounce`

The `TorrentReannounce` action reannounces the torrent to the tracker. It is
mostly used in combination with tools like [autobrr](https://autobrr.com) to
help with racing scenarios.

:::caution
Using the reannounce action might be seen as hammering the tracker announce
endpoint.
:::

## Inputs

 * `max_retries` - an integer with the maximum number of announce attempts. An
   attempt is considered successful when the tracker replies with OK.
 * `timeout` - an integer with the number of seconds to wait between announce
   attempts. The first attempt will always run immediately and subsequent
   attempts will be delayed.

## Example usage

```lua
local Workflow          = require "porla.Workflow"
local TorrentReannounce = require "porla.actions.TorrentReannounce"

return Workflow:new{
  on        = "TorrentAdded",
  condition = function(ctx)
    return ctx.torrent.category == "racing"
  end,
  actions   = {
    TorrentReannounce:new{
      max_retries = 50,
      timeout     = 5
    }
  }
}
```