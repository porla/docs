# `torrents.move`

Moves a torrent to a new save path.

## Request

```json
{
  "info_hash": [ "abcdef0123456789abcd", null ],

  // How to manage replacing files. default is 
  // - always_replace_files (default)
  // - dont_replace
  // - fail_if_exists
  "flags": "dont_replace",

  // The target path.
  "path": "/dl/other/path",

  // Optional session ID. If not specified, Porla will look for the info hash
  // in the default session.
  "session_id": 6
}
```

## Response

```json
null
```

## Errors

| Code | Reason |
| ---- | ------ |
| -1 | Session not found. If a `session_id` is specified, the session must exist. |
| -2 | Torrent not found in session. |
| -3 | Torrent is not valid. If Porla is shutting down, some torrents may be invalid due to being removed from the libtorrent session. |
