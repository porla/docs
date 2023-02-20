# `TorrentRemove`

The `TorrentRemove` action removes a torrent and optionally removes the data as
well.

## Inputs

 * `remove_files` - a boolean that, if set to true, tells Porla to remove the
   data along with the torrent. _Defaults to false_.

## Example usage

```lua
local Workflow      = require "porla.Workflow"
local TorrentRemove = require "porla.actions.TorrentRemove"

return Workflow:new{
  on      = "TorrentFinished",
  actions = {
    TorrentRemove:new{
      remove_files = true
    }
  }
}
```
