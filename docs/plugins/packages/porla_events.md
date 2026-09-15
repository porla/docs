# `porla_events`

Emits events for various things in Porla.

## Exports

### `on(event: string, callback: function): void`

<Since>v1.0</Since>

Registers an event handler for the given event. Check each event type below for
the type of callback.

#### Example

```lua
local events = require("porla_events")

events.on("torrent.added" function(torrent)
    local status = torrent:status()
    print("torrent {} added", status.name)
end)
```

## Events

### <code>torrent.added: ([LtTorrentHandle](../types/lttorrenthandle.md))</code>

<Since>v1.0</Since>

Emitted when a torrent is added to a session.

### <code>torrent.file_error: ([LtTorrentHandle](../types/lttorrenthandle.md), string)</code>

Emitted when a file error occurs. The name of the file is passed as the second arg.

<Since>v1.0</Since>

### <code>torrent.finished: ([LtTorrentHandle](../types/lttorrenthandle.md))</code>

<Since>v1.0</Since>

Emitted when a torrent finishes. Porla tries to emit this only once per
torrent, meaning that if a torrent has emitted the event and then some data is
removed and 

### <code>torrent.paused: ([LtTorrentHandle](../types/lttorrenthandle.md))</code>

<Since>v1.0</Since>

Emitted when a torrent is paused.

### <code>torrent.finished: ([LtInfoHash](../types/ltinfohash.md))</code>

<Since>v1.0</Since>

Emitted when a torrent is removed. Only the info hash is given.

### <code>torrent.resumed: ([LtTorrentHandle](../types/lttorrenthandle.md))</code>

<Since>v1.0</Since>

Emitted when a torrent is resumed.

### <code>torrent.finished: ([LtTorrentHandle](../types/lttorrenthandle.md))</code>

<Since>v1.0</Since>

Emitted when a torrent has had its storage moved as a result of calling
[`move_storage`](../types/lttorrenthandle.md#move_storagepath-string-void).
