# `TorrentMove`

The `TorrentMove` action moves the torrent data to a user-specified path. It
pauses workflow execution until the storage has been moved, then continues.

## Inputs

 * `path` - a string (or function taking a `context` parameter) that returns
   the path to where the data should be moved.

## Example usage

```lua
local Workflow    = require "porla.Workflow"
local TorrentMove = require "porla.actions.TorrentMove"

return Workflow:new{
  on      = "TorrentFinished",
  actions = {
    TorrentMove:new{
      path = function(ctx)
        return string.format("/dl/%s", ctx.torrent.category)
      end
    }
  }
}
```
