# `TorrentRemove`

The `TorrentRemove` action removes a torrent and optionally removes the data as
well.

## Inputs

 * `remove_files` - a boolean that, if set to true, tells Porla to remove the
   data along with the torrent. _Defaults to false_.

## Usage

```lua
local TorrentRemove = require "porla.actions.TorrentRemove"
```

### Example

```lua
TorrentRemove:new{
  remove_files = true
}
```
