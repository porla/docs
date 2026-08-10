# `torrents.files.progress`

Lists the progress for all files in a torrent.

## Request

```json
{
  "info_hash": [ "abcdef0123456789abcd", null ],

  // Optional session ID. If not specified, will look in the session
  // named 'default'.
  "session_id": 7
}
```

## Response

```json
{
  // An array with the number of bytes downloaded for each file (by index).
  "progress": [
    288,
    19298
  ]
}
```

## Errors

| Code | Reason |
| ---- | ------ |
| -1 | Session not found. If a `session_id` is specified, the session must exist. |
| -2 | Torrent not found in session. |
