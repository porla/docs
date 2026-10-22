# `torrents.queue.set`

Sets a specific queue position for the torrent in the (libtorrent) download queue.

## Request

```json
{
  "info_hash": ["abcdef0123456789abcd", null],

  // Optional session ID
  "session_id": 3,

  "queue_position": 8
}
```

## Response

```json
null
```
