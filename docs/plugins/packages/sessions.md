---
title: sessions
position: 900
---

## Description

`sessions` is the main package used for accessing sessions and torrents through
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

### `TorrentClientData`

A Porla specific object that contains category, tags, etc.

#### Property `category`

The category this torrent belongs to. You can get and set this category and it
will be persisted across restarts.

```lua
local userdata = torrent:userdata()
userdata.category = "movies"
print(userdata.category)
```

#### Property `tags`

A list of tags. You can get and set the list of tags and they will be persisted
across restarts.

```lua
local userdata = torrent:userdata()

-- replacing all tags
userdata.tags = {"foo", "bar"}

-- add a single tag
userdata.tags:add("baz")

-- remove a single tag
userdata.tags:erase("baz")

-- print tags
for _, tag in pairs(userdata.tags) do
    print(tag)
end

if userdata.tags.foo then
    print("torrent is tagged with 'foo'")
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

#### Function `userdata()`

Returns a `TorrentClientData` object with Porla specific information like category
and tags.

```lua
local userdata = torrent:userdata()
print(userdata.category)
```

### `TorrentStatus`

Represents the `libtorrent::torrent_status` type.

#### Property `active_duration`

#### Property `all_time_download`

#### Property `all_time_upload`

#### Property `announcing_to_dht`

#### Property `announcing_to_lsd`

#### Property `announcing_to_trackers`

#### Property `block_size`

#### Property `connect_candidates`

#### Property `connections_limit`

#### Property `current_tracker`

#### Property `distributed_copies`

#### Property `down_bandwidth_queue`

#### Property `download_payload_rate`

#### Property `download_rate`

#### Property `finished_duration`

#### Property `flags`

#### Property `info_hash`

#### Property `is_finished`

#### Property `is_seeding`

#### Property `handle`

#### Property `has_incoming`

True if there has ever been an incoming connection attempt to this torrent.

#### Property `has_metadata`

#### Property `list_peers`

#### Property `list_seeds`

#### Property `moving_storage`

#### Property `name`

#### Property `need_save_resume`

#### Property `num_complete`

#### Property `num_connections`

#### Property `num_incomplete`

#### Property `num_peers`

#### Property `num_pieces`

#### Property `num_seeds`

#### Property `num_uploads`

#### Property `progress`

The current progress of the torrent.

#### Property `queue_position`

#### Property `save_path`

#### Property `seed_rank`

#### Property `seeding_duration`

#### Property `torrent_file`

#### Property `total`

#### Property `total_done`

#### Property `total_download`

#### Property `total_failed_bytes`

#### Property `total_payload_download`

#### Property `total_payload_upload`

#### Property `total_redundant_bytes`

#### Property `total_upload`

#### Property `up_bandwidth_queue`

#### Property `upload_payload_rate`

#### Property `upload_rate`

#### Property `uploads_limit`
