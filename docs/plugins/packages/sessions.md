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

#### Property `session`

Gets the name of the session that this torrent belongs to.

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

#### Function `clear_error()`

If the torrent is in an error state (i.e. `torrent_status::error` is non-empty),
this will clear the error and start the torrent again.

#### Function `clear_peers()`

This will disconnect all peers and clear the peer list for this torrent. New
peers will have to be acquired before resuming, from trackers, DHT or local
service discovery, for example.

#### Function `download_limit()`

Returns the current download bandwidth limit.

#### Function `flags()`

Returns the flags of this torrent as a table. The key is the name of the flag
and the value is a boolean which is true or false depending on if the flag is
set or not.

#### Function `flush_cache()`

#### Function `force_reannounce()`

#### Function `force_recheck()`

#### Function `info_hash()`

#### Function `is_valid()`

#### Function `max_connections()`

#### Function `max_uploads()`

#### Function `move_storage(string path)`

#### Function `pause()`

#### Function `peer_info()`

#### Function `pause()`

#### Function `post_download_queue()`

#### Function `post_file_progress()`

#### Function `post_peer_info()`

#### Function `post_piece_availability()`

#### Function `post_status()`

#### Function `post_trackers()`

#### Function `queue_position()`

#### Function `queue_position_bottom()`

#### Function `queue_position_down()`

#### Function `queue_position_top()`

#### Function `queue_position_up()`

#### Function `resume()`

#### Function `set_download_limit(int limit)`

#### Function `set_flags(table flags)`

#### Function `set_max_connections(int limit)`

#### Function `set_max_uploads(int limit)`

#### Function `set_upload_limit(int limit)`

#### Function `status()`

Returns a `TorrentStatus` object with all the status information for this torrent.

```lua
local status = torrent:status()
```

#### Function `trackers()`

#### Function `torrent_file()`

#### Function `upload_limit()`

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
