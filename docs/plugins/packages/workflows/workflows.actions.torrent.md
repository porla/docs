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

### Function `remove`

Removes the torrent. This function takes a Lua table with the following keys.

 * `remove_files` - (optional) a boolean that, if set to true, tells Porla to 
 remove the data along with the torrent. _Defaults to false_.

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
            })
        }
    })
end
```
