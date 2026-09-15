# `torrents.pause`

Pauses a torrent. Pausing a torrent will also remove the auto managed flag in
libtorrent since it does not make sense to pause an auto managed torrent.

## Request

```json
{
  "info_hash": [ "abcdef0123456789abcd", null ],

  // Optional session ID
  "session_id": 3
}
```

## Response

```json
null
```
