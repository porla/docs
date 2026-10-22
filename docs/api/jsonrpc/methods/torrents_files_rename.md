# `torrents.files.rename`

Rename a file in a torrent (on disk).

## Request

```json
{
  "info_hash": ["abcdef0123456789abcd", null],

  // Optional session ID. If not specified, will look in the session
  // named 'default'.
  "session_id": 7,

  "file_index": 1,
  "file_path": "ubuntu-24.04.1/SHA256SUMS.txt"
}
```

## Response

```json
null
```
