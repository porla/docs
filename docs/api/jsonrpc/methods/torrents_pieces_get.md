# `torrents.pieces.get`

Gets both pieces and verified pieces for a torrent.

## Request

```json
{
  // The info hash of the torrent.
  "info_hash": ["abcdef0123456789abcd", null],

  // Optional session ID.
  "session_id": 8
}
```

## Response

```json
{
  "pieces": [25, "AhkAAA=="],
  "verified_pieces": [0, ""]
}
```
