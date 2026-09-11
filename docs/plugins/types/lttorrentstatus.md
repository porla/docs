# `LtTorrentStatus`

Information about a [torrent](./lttorrenthandle.md).

## Properties

### `active_duration: number`

The number of seconds this torrent has been in the session in an active state (i.e not paused).

### `added_time: number`

The posix time when this torrent was added.

### `all_time_download: number`

The accumulated downloaded _payload_ bytes. Persisted.

### `all_time_upload: number`

The accumulated uploaded _payload_ bytes. Persisted.

### `announcing_to_dht: boolean`

### `announcing_to_lsd: boolean`

### `announcing_to_trackers: boolean`

### `block_size: number`

The size of a block in bytes. Typically 16kB.

### `completed_time: number`

The posix time when this torrent was finished. Returns 0 if the torrent is not
yet finished.

### `connect_candidates: number`

The number of peers in the peer list that this is a candidate to be connected
to.

### `connections_limit: number`

The set limit of number of connections for this torrent.

### `current_tracker: string`

The URL of the last working tracker. If no tracker request has been successful
yet, it is set to an empty string.

### `distributed_copies: number`

The number of distributed copies of the torrent. This is a floating point
representation where the integer part tells how many copies there are of the
rarest piece(s) and the fractional part is the fraction of pieces that have
more copies than the rarest piece(s).

### `down_bandwidth_queue: number`

The number of peers in this torrent that are waiting for more download
bandwidth quota from the torrent rate limiter.

### `download_limit: number`

### `download_payload_rate: number`

### `download_rate: number`

### `finished_duration: number`

### <code>handle: [LtTorrentHandle](./lttorrenthandle.md)</code>

### `has_incoming: boolean`

### `has_metadata: boolean`

### <code>info_hash: [LtInfoHash](./ltinfohash.md)</code>

### `is_finished: boolean`

### `is_seeding: boolean`

### `last_download: number`

### `last_upload: number`

### `list_peers: number`

### `list_seeds: number`

### `moving_storage: boolean`

### `name: string`

### `next_announce: number`

### `num_complete: number`

### `num_connections: number`

### `num_incomplete: number`

### `num_peers: number`

### `num_pieces: number`

### `num_seeds: number`

### `num_uploads: number`

### `progress: number`

### `queue_position: number`

### `save_path: string`

### `seed_rank: number`

### `seeding_duration: number`

### `torrent_file: LtTorrentInfo`

### `total: number`

### `total_done: number`

### `total_download: number`

### `total_failed_bytes: number`

### `total_payload_download: number`

### `total_payload_upload: number`

### `total_redundant_bytes: number`

### `total_wanted: number`

### `total_wanted_done: number`

### `total_upload: number`

### `up_bandwidth_queue: number`

### `upload_payload_rate: number`

### `upload_limit: number`

### `uploads_limit: number`
