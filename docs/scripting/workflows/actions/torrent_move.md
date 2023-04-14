# `TorrentMove`

The `TorrentMove` action moves the torrent data to a user-specified path. It
pauses workflow execution until the storage has been moved, then continues.

## Inputs

 * `path` - a string (or function taking a `context` parameter) that returns
   the path to where the data should be moved.

## Usage

```lua
local TorrentMove = require "porla.actions.TorrentMove"
```

### Example

```lua
TorrentMove:new{
  path = function(ctx)
    return string.format("/dl/%s", ctx.torrent.category)
  end
}
```
