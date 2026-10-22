# `torrents.queue.top`

Moves the torrent to the top of the (libtorrent) download queue.

## Request

```json
{
  "info_hash": ["abcdef0123456789abcd", null],

  // Optional session ID
  "session_id": 3
}
```

## Response

```json
null
```
