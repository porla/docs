# `LtTorrentHandle`

A handle to a torrent.

## Methods

### `add_url_seed(url: string): void`

Adds a URL to the list of URL seeds for this torrent.

### `clear_error(): void`

If the torrent is in an error state (i.e the status of the torrent has `errc`
set), calling this will clear the error and start the torrent.

### `clear_peers(): void`

This will disconnect all peers and clear the peer list for this torrent.

### `clear_piece_deadlines(): void`

Removes deadlines on all pieces in the torrent.

### `download_limit(): number`

The current download limit.

### `file_status(): LtOpenFileState[]`

Returns a list with status about files that are open for this torrent.

### `flush_cache(): void`

Flush the disk cache and close all file handles. This is done async and you can
listen for the `torrent.cache_flushed` event to be notified when it is done.

### `force_dht_announce(): void`

Announce the torrent to the DHT.

### `force_lsd_announce(): void`

Announce the torrent on LSD.

### `force_recheck(): void`

Puts the torrent in a state where it assumes to have no resume data. All peers
will be disconnected, announcing will stop, and its pieces will be checked.

### `get_file_priorities(): number[]`

Returns a table of all the file priorities.

#### Example

:::info
Lua arrays are 1-based.
:::

```lua
local file_priorities = torrent:get_file_priorities()

for i, v in pairs(file_priorities) do
    print("file {}: {}", i, v)
end
```

### <code>get_peer_info(): [LtPeerInfo](./ltpeerinfo.md)[]</code>

Gets a list of information about the peers for this torrent.

### `have_piece(index: number): boolean`

Returns true if the piece with the given index has been completely downloaded
and written to disk.

### `in_session(): boolean`

Returns true if the torrent is in the session.

### <code>info_hash(): [LtInfoHash](./ltinfohash.md)</code>

Returns the info hash for this torrent.

### `is_valid(): boolean`

Returns true if the handle refers to a valid torrent that is both in the
session and not removed.

### `max_connections(): number`

Returns the maximum number of connections this torrent will open.

### `max_uploads(): number`

Returns the maximum number of peers that can be unchoked at the same time for
this torrent.

### `move_storage(path: string): void`

Moves the file(s) that this torrent is currently seeding/downloading. This is
done async and the `torrent.storage_moved` or `torrent.storage_moved_failed`
will be emitted when done (or failed).

### `pause(): void`

Pauses the torrent and disconnect all peers. If the torrent is auto managed it
may be automatically resumed again.

### `post_download_queue(): void`

Triggers a `torrent.download_queue` event to be emitted.

### `post_file_priorities(): void`

Triggers a `torrent.file_priorities` event to be emitted.

### `post_file_progress(): void`

Triggers a `torrent.file_progress` event to be emitted.

### `post_file_status(): void`

Triggers a `torrent.file_status` event to be emitted.

### `post_peer_info(): void`

Triggers a `torrent.peer_info` event to be emitted.

### `post_piece_availability(): void`

Triggers a `torrent.piece_availability` event to be emitted.

### `post_status(): void`

Triggers a `torrent.state_update` event to be emitted`.

### `post_trackers(): void`

Triggers a `torrent.tracker_list` event to be emitted.

### `prioritize_files(priorities: number[]): void`

Prioritizes files in the torrent. File priorities are from 0 to 7 (inclusive).

| Priority | Meaning          |
|----------|------------------|
| 0        | dont_download    |
| 1        | low_priority     |
| 4        | default_priority |
| 7        | top_priority     |

#### Example

:::info
File indices are based on array position. Porla does the translation from
1-based Lua arrays to the 0-based arrays in C++.
:::

```lua
-- set the priority of the first file (index 0) to 0 (dont_download).
torrent:prioritize_files({ 0 })
```

### `queue_position(): number`

Returns the queue position for this torrent. Torrents that are being seeded
has a queue position of -1.

### `queue_position_bottom(): void`

Moves the torrent to the bottom of the queue.

### `queue_position_down(): void`

Moves the torrent one step down in the queue.

### `queue_position_set(position: number): void`

Updates the queue position for this torrent.

### `queue_position_top(): void`

Moves the torrent to the top of the queue.

### `queue_position_up(): void`

Moves the torrent one step up in the queue.

### `read_piece(index: number): void`

Starts an async read of the piece specified by the index. Triggers the event
`torrent.read_piece` to be emitted.

### `remove_url_seed(url: string): void`

Removes the given URL from the list of URL seeds, if it exists.

### `rename_file(index: number, name: string): void`

Begins an async rename of the file specified by the index. Triggers the event
`torrent.file_renamed` or `torrent.file_rename_failed` to be emitted.

### `resume(): void`

Resumes peer connections for this torrent.

### `set_download_limit(val: number): void`

Set the download bandwidth limit for this torrent.

### `set_max_connections(val: number): void`

Sets the max number of connections this torrent will open.

### `set_max_uploads(val: number): void`

Sets the max number of peers that can be unchoked at the same time for this
torrent.

### `set_ssl_certificate(certificate: string, private_key: string, dh_params: string, passphrase: string)`

### `set_ssl_certificate_buffer(buffer: string, private_key: string, dh_params: string, passphrase_stirng)`

### `set_upload_limit(val: number): void`

Sets the upload bandwidth limit for this torrent.

### <code>status(): [LtTorrentStatus](./lttorrentstatus.md)</code>

### <code>torrent_file(): [LtTorrentFile](./lttorrentinfo.md) | nil</code>

### <code>trackers(): [LtAnnounceEntry](./ltannounceentry.md)[]</code>

Returns the list of trackers for this torrent.

### `upload_limit(): number`

Returns the upload bandwidth limit for this torrent.

### `url_seeds(): string[]`

Returns a list of the URL seeds for this torrent.
