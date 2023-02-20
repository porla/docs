---
sidebar_position: 15
---

# Examples

The following is a collection of example workflows that you can use as-is, or
for inspiration on how to build your own.

## Send a Discord message

Sends a Discord message when a torrent is added to Porla. Using the Discord
action requires you to set up a webhook url.

```lua title="workflows/discord-notifications.lua"
local Workflow = require "porla.Workflow"
local Discord  = require "porla.actions.PushDiscord"

return Workflow:new{
  on      = "TorrentAdded",
  actions = {
    Discord:new{
      url     = "", -- set your Discord webhook url here
      message = function(ctx)
        return string.format("Torrent %s added", ctx.torrent.name)
      end
    }
  }
}
```

## Reannounce torrents from _autobrr_

If you use [autobrr](https://autobrr.com) for racing, you may find youself
early in the swarm. By using the reannounce action, you can force reannounce an
added torrent until it succeeds.

This workflow only runs for torrents in the _racing_ category.

```lua title="workflows/racing.lua"
local Workflow   = require "porla.Workflow"
local Reannounce = require "porla.actions.TorrentReannounce"

return Workflow:new{
  on        = "TorrentAdded",
  condition = function(ctx)
    return ctx.torrent.category == "racing"
  end,
  actions = {
    Reannounce:new{}
  }
}
```

## Moving torrents and updating Plex

You can use Porla to automatically scan your Plex library whenever a torrent
finishes. Since the torrent move action does not continue until the files
actually have been moved, you can be sure that they are available to Plex when
refreshing the library.

Remember to replace `<host>` and `<token>` with values that makes sense for
your setup.

```lua title="workflows/plex.lua"
local Workflow    = require "porla.Workflow"
local Exec        = require "porla.actions.Exec"
local Log         = require "porla.actions.Log"
local TorrentMove = require "porla.actions.TorrentMove"

return Workflow:new{
  on      = "TorrentFinished",
  actions = {
    TorrentMove:new{
      path = "/plex/movies"
    },
    Exec:new{
      file = "/usr/bin/curl",
      args = {
        "http://<host>:32400/library/sections/all/refresh?X-Plex-Token=<token>"
      }
    },
    Log:new{
      message = "Plex libraries refreshed"
    }
  }
}
```

Alternatively, you can use the `TorrentMoved` event and check the save path.

```lua title="workflows/plex-alt.lua"
local Workflow    = require "porla.Workflow"
local Exec        = require "porla.actions.Exec"
local Log         = require "porla.actions.Log"

return Workflow:new{
  on        = "TorrentMoved",
  condition = function(ctx)
    return ctx.torrent.save_path == "/plex/movies"
  end,
  actions   = {
    Exec:new{
      file = "/usr/bin/curl",
      args = {
        "http://<host>:32400/library/sections/all/refresh?X-Plex-Token=<token>"
      }
    },
    Log:new{
      message = "Plex libraries refreshed"
    }
  }
}
```
