# `LtAddTorrentParams`

The `LtAddTorrentParams` is a pure Lua table - i.e it does not wrap a type.

The main reason for this is that wrapping it makes it quite hard to work with
the different tables associated with the params, such as trackers, file
priorities, etc.

This has the consequence that no actual type checking is done until the table
is handed over to the C++ side and it is converted to a real object.

## Factories

### <code>from_path(path: string): LtAddTorrentParams | nil, [PoError](./poerror.md) | nil</code>

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

### `added_time: number`

### `comment: string`

### `completed_time: number`

### `created_by: string`

### `creation_date: number`

### `download_limit: number`

### `file_priorities: number[]`

### `finished_time: number`

### <code>flags: [LtTorrentFlags](./lttorrentflags.md)</code>

### <code>info_hash: [LtInfoHash](./ltinfohash.md)</code>

### `last_download: number`

### `last_seen_complete: number`

### `last_upload: number`

### `max_connections: number`

### `max_uploads: number`

### `name: string`

### `num_complete: number`

### `num_downloaded: number`

### `num_incomplete: number`

### `part_file_dir: string`

### `root_certificate: string`

### `save_path: string`

### `seeding_time: number`

### `storage_mode: string`

### <code>ti: [LtTorrentInfo](./lttorrentinfo.md)</code>

### `trackerid: string`

### `tracker_tiers: number[]`

### `trackers: string[]`

### `total_downloaded: number`

### `total_uploaded: number`

### `upload_limit: number`

### `url_seeds: string[]`
