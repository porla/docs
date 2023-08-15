---
title: sessions
position: 900
---

## Description

`sessions` is the main package used for accessing sessinos and torrents through
the Lua API. It exports two functions, `get` and `list` that gets a session by
name or lists all sessions, respectively.

### Function `get(string)`

Gets a session by name. If no session is found, it will return `nil`.

```lua
local sessions = require("sessions")
local default  = sessions.get("default")
```

### Function `list()`

Returns an iterator to be able to iterate all sessions.

```lua
local sessions = require("sessions")

for session in sessions.list() do
    print(session.name)
end
```

## Types

### `Session`

The `Session` type represents one session in Porla. Its APIs is similar to the
libtorrent::session APIs which it wraps.

#### Function `apply_settings(SettingsPack)`

Applies a `SettingsPack` to the session.

```lua
local settings = session:settings()
settings.active_limit = 99
session:apply_settings(settings)
```

#### Function `find_torrent(InfoHash)`

Gets a `TorrentHandle` from a session, or `nil` of not found.

#### Function `settings()`

Returns a `SettingsPack` object that wraps a `libtorrent::settings_pack`.

```lua
local settings = session:settings()
-- print a setting
print(settings.active_limit)
```

#### Function `torrents()`

Returns an iterator that can be used to iterate all torrents in a session. Each
torrent is a `TorrentHandle`.

```lua
for torrent in session:torrents() do
    print("info hash", torrent:info_hash().v1)
end
```

### `TorrentHandle`

A `TorrentHandle` represents a single torrent in a session. It closely wraps
the `libtorrent::torrent_handle` type.

#### Function `status()`

Returns a `TorrentStatus` object with all the status information for this torrent.

```lua
local status = torrent:status()
```

### `TorrentStatus`

Represents the `libtorrent::torrent_status` type.

#### Property `progress`

The current progress of the torrent.
