# `LtTorrentStatus`

Information about a [torrent](./lttorrenthandle.md).

## Properties

### `active_duration: number`

<Since>v1.0</Since>

The number of seconds this torrent has been in the session in an active state (i.e not paused).

### `added_time: number`

<Since>v1.0</Since>

The posix time when this torrent was added.

### `all_time_download: number`

<Since>v1.0</Since>

The accumulated downloaded _payload_ bytes. Persisted.

### `all_time_upload: number`

<Since>v1.0</Since>

The accumulated uploaded _payload_ bytes. Persisted.

### `announcing_to_dht: boolean`

<Since>v1.0</Since>

### `announcing_to_lsd: boolean`

<Since>v1.0</Since>

### `announcing_to_trackers: boolean`

<Since>v1.0</Since>

### `block_size: number`

<Since>v1.0</Since>

The size of a block in bytes. Typically 16kB.

### `completed_time: number`

<Since>v1.0</Since>

The posix time when this torrent was finished. Returns 0 if the torrent is not
yet finished.

### `connect_candidates: number`

<Since>v1.0</Since>

The number of peers in the peer list that this is a candidate to be connected
to.

### `connections_limit: number`

<Since>v1.0</Since>

The set limit of number of connections for this torrent.

### `current_tracker: string`

<Since>v1.0</Since>

The URL of the last working tracker. If no tracker request has been successful
yet, it is set to an empty string.

### `distributed_copies: number`

<Since>v1.0</Since>

The number of distributed copies of the torrent. This is a floating point
representation where the integer part tells how many copies there are of the
rarest piece(s) and the fractional part is the fraction of pieces that have
more copies than the rarest piece(s).

### `down_bandwidth_queue: number`

<Since>v1.0</Since>

The number of peers in this torrent that are waiting for more download
bandwidth quota from the torrent rate limiter.

### `download_limit: number`

<Since>v1.0</Since>

### `download_payload_rate: number`

<Since>v1.0</Since>

### `download_rate: number`

<Since>v1.0</Since>

### `finished_duration: number`

<Since>v1.0</Since>

### <code>handle: [LtTorrentHandle](./lttorrenthandle.md)</code>

<Since>v1.0</Since>

### `has_incoming: boolean`

<Since>v1.0</Since>

### `has_metadata: boolean`

<Since>v1.0</Since>

### <code>info_hash: [LtInfoHash](./ltinfohash.md)</code>

<Since>v1.0</Since>

### `is_finished: boolean`

<Since>v1.0</Since>

### `is_seeding: boolean`

<Since>v1.0</Since>

### `last_download: number`

<Since>v1.0</Since>

### `last_upload: number`

<Since>v1.0</Since>

### `list_peers: number`

<Since>v1.0</Since>

### `list_seeds: number`

<Since>v1.0</Since>

### `moving_storage: boolean`

<Since>v1.0</Since>

### `name: string`

<Since>v1.0</Since>

### `next_announce: number`

<Since>v1.0</Since>

### `num_complete: number`

<Since>v1.0</Since>

### `num_connections: number`

<Since>v1.0</Since>

### `num_incomplete: number`

<Since>v1.0</Since>

### `num_peers: number`

<Since>v1.0</Since>

### `num_pieces: number`

<Since>v1.0</Since>

### `num_seeds: number`

<Since>v1.0</Since>

### `num_uploads: number`

<Since>v1.0</Since>

### `progress: number`

<Since>v1.0</Since>

### `queue_position: number`

<Since>v1.0</Since>

### `save_path: string`

<Since>v1.0</Since>

### `seed_rank: number`

<Since>v1.0</Since>

### `seeding_duration: number`

<Since>v1.0</Since>

### `torrent_file: LtTorrentInfo`

<Since>v1.0</Since>

### `total: number`

<Since>v1.0</Since>

### `total_done: number`

<Since>v1.0</Since>

### `total_download: number`

<Since>v1.0</Since>

### `total_failed_bytes: number`

<Since>v1.0</Since>

### `total_payload_download: number`

<Since>v1.0</Since>

### `total_payload_upload: number`

<Since>v1.0</Since>

### `total_redundant_bytes: number`

<Since>v1.0</Since>

### `total_wanted: number`

<Since>v1.0</Since>

### `total_wanted_done: number`

<Since>v1.0</Since>

### `total_upload: number`

<Since>v1.0</Since>

### `up_bandwidth_queue: number`

<Since>v1.0</Since>

### `upload_payload_rate: number`

<Since>v1.0</Since>

### `upload_limit: number`

<Since>v1.0</Since>

### `uploads_limit: number`

<Since>v1.0</Since>
