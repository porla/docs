# `LtAddTorrentParams`

The `LtAddTorrentParams` is a pure Lua table - i.e it does not wrap a type.

The main reason for this is that wrapping it makes it quite hard to work with
the different tables associated with the params, such as trackers, file
priorities, etc.

This has the consequence that no actual type checking is done until the table
is handed over to the C++ side and it is converted to a real object.

## Factories

### <code>from_path(path: string): LtAddTorrentParams | nil, [PoError](./poerror.md) | nil</code>

<Since>v1.0</Since>

Loads a torrent file from a path and parses it into an LtAddTorrentParams.

#### Example

```lua
local params, err = LtAddTorrentParams.from_path("/tmp/debian.torrent")

if err then
    print("Failed to load torrent file: {}", err)
    return
end

print("Loaded torrent {}", params.name)
```

## Properties

### `active_time: number`

<Since>v1.0</Since>

### `added_time: number`

<Since>v1.0</Since>

### `comment: string`

<Since>v1.0</Since>

### `completed_time: number`

<Since>v1.0</Since>

### `created_by: string`

<Since>v1.0</Since>

### `creation_date: number`

<Since>v1.0</Since>

### `download_limit: number`

<Since>v1.0</Since>

### `file_priorities: number[]`

<Since>v1.0</Since>

### `finished_time: number`

<Since>v1.0</Since>

### <code>flags: [LtTorrentFlags](./lttorrentflags.md)</code>

<Since>v1.0</Since>

### <code>info_hash: [LtInfoHash](./ltinfohash.md)</code>

<Since>v1.0</Since>

### `last_download: number`

<Since>v1.0</Since>

### `last_seen_complete: number`

<Since>v1.0</Since>

### `last_upload: number`

<Since>v1.0</Since>

### `max_connections: number`

<Since>v1.0</Since>

### `max_uploads: number`

<Since>v1.0</Since>

### `name: string`

<Since>v1.0</Since>

### `num_complete: number`

<Since>v1.0</Since>

### `num_downloaded: number`

<Since>v1.0</Since>

### `num_incomplete: number`

<Since>v1.0</Since>

### `part_file_dir: string`

<Since>v1.0</Since>

### `root_certificate: string`

<Since>v1.0</Since>

### `save_path: string`

<Since>v1.0</Since>

### `seeding_time: number`

<Since>v1.0</Since>

### `storage_mode: string`

<Since>v1.0</Since>

### <code>ti: [LtTorrentInfo](./lttorrentinfo.md)</code>

<Since>v1.0</Since>

### `trackerid: string`

<Since>v1.0</Since>

### `tracker_tiers: number[]`

<Since>v1.0</Since>

### `trackers: string[]`

<Since>v1.0</Since>

### `total_downloaded: number`

<Since>v1.0</Since>

### `total_uploaded: number`

<Since>v1.0</Since>

### `upload_limit: number`

<Since>v1.0</Since>

### `url_seeds: string[]`

<Since>v1.0</Since>
