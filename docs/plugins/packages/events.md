---
title: events
position: 20
---

## Description

Listen for various events in Porla, such as torrents being added, moved,
finished, etc.

## Events

These are the events supported. The name is the string you pass as the first
argument to `on`, and the argument is what you get back in your callback
parameters.

| Name | Arguments |
|------|-----------|
| `torrent_added` | `TorrentHandle` |
| `torrent_finished` | `TorrentHandle` |
| `torrent_moved` | `TorrentHandle` |
| `torrent_paused` | `TorrentHandle` |
| `torrent_removed` | `InfoHash` |
| `torrent_resumed` | `TorrentHandle` |


## Exports

### Function `on(string, callback)`

Registers an event handler for an event. When the event triggers, the `callback`
is invoked with the event args.

The function returns a `SignalConnection` that can be used to disconnect the
event handler at any time. Once disconnected, you need to register the event
again to trigger your callback.

```lua
local events = require("events")

local sc = events.on("torrent_added", function(torrent)
    -- torrent is a TorrentHandle
    local status = torrent:status()
    print(status.name)
end)

-- sc is a SignalConnection
-- disconnect the event handler immediately - the callback
-- will never be invoked.
sc:disconnect()
```

## Types

### `SignalConnection`

The `SignalConnection` represents a connection to a specific event handler.

#### Function `disconnect()`

Disconnects the event handler. The callback will not be invoked again.
