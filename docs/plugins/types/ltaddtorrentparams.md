# `LtAddTorrentParams`

The `LtAddTorrentParams` is a pure Lua table - i.e it does not wrap a type.

The main reason for this is that wrapping it makes it quite hard to work with
the different tables associated with the params, such as trackers, file
priorities, etc.

This has the consequence that no actual type checking is done until the table
is handed over to the C++ side and it is converted to a real object.

## Factories

### <code>from_buffer(buffer: string): LtAddTorrentParams | nil, [PoError](./poerror.md) | nil</code>

Creates a params object from a torrent file buffer.

### <code>from_magnet(uri: string): LtAddTorrentParams | nil, [PoError](./poerror.md) | nil</code>

Creates a params object from a magnet URI.

### <code>from_path(path: string): LtAddTorrentParams | nil, [PoError](./poerror.md) | nil</code>

<Since>v0.42.0</Since>

Creates a params object from a file path.

#### Example

```lua
local params, err = LtAddTorrentParams.from_path("/tmp/debian.torrent")

if err then
    print("Failed to load torrent file", err)
    return
end

print("Loaded torrent", params.name)
```

## Properties

### `active_time: number`

<Since>v0.42.0</Since>

### `added_time: number`

<Since>v0.42.0</Since>

### `comment: string`

<Since>v0.42.0</Since>

### `completed_time: number`

<Since>v0.42.0</Since>

### `created_by: string`

<Since>v0.42.0</Since>

### `creation_date: number`

<Since>v0.42.0</Since>

### `download_limit: number`

<Since>v0.42.0</Since>

### `file_priorities: number[]`

<Since>v0.42.0</Since>

### `finished_time: number`

<Since>v0.42.0</Since>

### <code>flags: [LtTorrentFlags](./lttorrentflags.md)</code>

<Since>v0.42.0</Since>

### <code>info_hash: [LtInfoHash](./ltinfohash.md)</code>

<Since>v0.42.0</Since>

### `last_download: number`

<Since>v0.42.0</Since>

### `last_seen_complete: number`

<Since>v0.42.0</Since>

### `last_upload: number`

<Since>v0.42.0</Since>

### `max_connections: number`

<Since>v0.42.0</Since>

### `max_uploads: number`

<Since>v0.42.0</Since>

### `name: string`

<Since>v0.42.0</Since>

### `num_complete: number`

<Since>v0.42.0</Since>

### `num_downloaded: number`

<Since>v0.42.0</Since>

### `num_incomplete: number`

<Since>v0.42.0</Since>

### `part_file_dir: string`

<Since>v0.42.0</Since>

### `root_certificate: string`

<Since>v0.42.0</Since>

### `save_path: string`

<Since>v0.42.0</Since>

### `seeding_time: number`

<Since>v0.42.0</Since>

### `storage_mode: string`

<Since>v0.42.0</Since>

### <code>ti: [LtTorrentInfo](./lttorrentinfo.md)</code>

<Since>v0.42.0</Since>

### `trackerid: string`

<Since>v0.42.0</Since>

### `tracker_tiers: number[]`

<Since>v0.42.0</Since>

<Changed in="v0.51.1">

Now honored when adding.

</Changed>

Sets the tiers for the trackers. Must be an integer array, each value must be
0 or more. Cannot have more entries than the `trackers` array.

### `trackers: string[]`

<Since>v0.42.0</Since>

### `total_downloaded: number`

<Since>v0.42.0</Since>

### `total_uploaded: number`

<Since>v0.42.0</Since>

### `upload_limit: number`

<Since>v0.42.0</Since>

### `url_seeds: string[]`

<Since>v0.42.0</Since>

### `userdata: {category?, tags?, metadata?}`

