# `TorrentFlags`

The `TorrentFlags` action can set or unset various libtorrent flags. It's an
advanced action and should be used with care, but is useful for toggling the
_auto managed_ state on torrents for example.

## Inputs

 * `set` - an array of strings with names of the flags to set.
 * `unset` - an array of strings with names of the flags to unset.

Either one or both of the `set` or `unset` arrays must be present in order for
the action to be valid.

Supported flags are,

 * `apply_ip_filter`
 * `auto_managed`
 * `disable_dht`
 * `disable_lsd`
 * `disable_pex`
 * `sequential_download`

## Example usage

The following will make set all added torrents to _sequential download_.

```lua
local Workflow     = require "porla.Workflow"
local TorrentFlags = require "porla.actions.TorrentFlags"

return Workflow:new{
  on      = "TorrentAdded",
  actions = {
    TorrentFlags:new{
      set = {
        "sequential_download"
      }
    }
  }
}
```
