---
title: workflows.actions.torrent
position: 1030
---

## Description

Various torrent related actions.

## Exports

### Function `move`

Moves the torrent to a new save path. This function takes a Lua table with the
following keys.

 * `path` - the new path for the torrent.

### Function `pause`

Pauses the torrent.

### Function `reannounce`

Reannounces the torrent. This function takes a Lua table with the following
keys.

 * `interval` - (optional) the interval in seconds to wait between each
   announce. Defaults to 2 seconds.
 * `max_tries` - (optional) the maximum number of attempts to try for a
   successful announce. Defaults to 5.
 * `tracker_index` - (optional) the index of the tracker to announce to. Defaults
   to 0, which is the first tracker in the torrent.

:::info
The reannounce action will always respect the minimum announce interval from the
tracker.
:::

### Function `remove`

Removes the torrent.

### Function `resume`

Resumes the torrent.

## Example usage

```lua
local workflows = require("workflows")
local torrent   = require("workflows.actions.torrent")
local added     = require("workflows.triggers.torrent").added

function porla.init()
    workflows.add({
        trigger = added(),
        actions = {
            torrent.move({
                path = "/tmp"
            }),
            torrent.reannounce()
        }
    })
end
```
