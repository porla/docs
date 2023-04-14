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
local Workflow     = require "porla.Workflow"
local Discord      = require "porla.actions.PushDiscord"
local TorrentAdded = require "porla.triggers.TorrentAdded"

return Workflow:new{
  on      = TorrentAdded:new{},
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
early in the swarm. By using the torrent reannounce action, you can force
reannounce an added torrent until it succeeds.

This workflow only runs for torrents in the _racing_ category.

```lua title="workflows/racing.lua"
local Workflow          = require "porla.Workflow"
local TorrentReannounce = require "porla.actions.TorrentReannounce"
local TorrentAdded      = require "porla.triggers.TorrentAdded"

return Workflow:new{
  on      = TorrentAdded:new{},
  filter  = function(ctx)
    return ctx.torrent.category == "racing"
  end,
  actions = {
    TorrentReannounce:new{}
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
local Workflow        = require "porla.Workflow"
local HttpRequest     = require "porla.actions.HttpRequest"
local Log             = require "porla.actions.Log"
local TorrentMove     = require "porla.actions.TorrentMove"
local TorrentFinished = require "porla.triggers.TorrentFinished"

return Workflow:new{
  on      = TorrentFinished:new{},
  actions = {
    TorrentMove:new{
      path = "/plex/movies"
    },
    HttpRequest:new{
      url = "http://<host>:32400/library/sections/all/refresh?X-Plex-Token=<token>"
    },
    Log:new{
      message = "Plex libraries refreshed"
    }
  }
}
```

Alternatively, you can use the `TorrentMoved` trigger and check the save path.

```lua title="workflows/plex-alt.lua"
local Workflow     = require "porla.Workflow"
local HttpRequest  = require "porla.actions.HttpRequest"
local Log          = require "porla.actions.Log"
local TorrentMoved = require "porla.triggers.TorrentMoved"

return Workflow:new{
  on      = TorrentMoved:new{},
  filter  = function(ctx)
    return ctx.torrent.save_path == "/plex/movies"
  end,
  actions = {
    HttpRequest:new{
      url = "http://<host>:32400/library/sections/all/refresh?X-Plex-Token=<token>"
    },
    Log:new{
      message = "Plex libraries refreshed"
    }
  }
}
```
