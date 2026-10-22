# `torrents.files.priorities`

Gets a list of all file priorities for a torrent.

## Request

```json
{
  "info_hash": ["abcdef0123456789abcd", null],

  // Optional session ID. If not specified, will look in the session
  // named 'default'.
  "session_id": 7
}
```

## Response

```json
{
  "priorities": [4, 4]
}
```
