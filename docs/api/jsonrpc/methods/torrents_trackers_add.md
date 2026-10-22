# `torrents.trackers.add`

Adds a tracker to the torrent.

## Request

```json
{
  // The info hash of the torrent.
  "info_hash": ["abcdef0123456789abcd", null],

  // Optional session ID.
  "session_id": 8,

  "url": "udp://tracker.opentrackr.org:1337/announce",
  "tier": 1
}
```

## Response

```json
null
```
