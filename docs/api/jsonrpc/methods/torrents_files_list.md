# `torrents.files.list`

Lists all the files in a torrent.

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
  "files": [
    {
      "absolute_path": false,
      "flags": [],
      "index": 0,
      "offset": 0,
      "path": "ubuntu-24.04.1/ubuntu-24.04.1-desktop-amd64.iso",
      "size": 6295777,
      "symlink": ""
    },
    {
      "absolute_path": false,
      "flags": [],
      "index": 1,
      "offset": 6295777,
      "path": "ubuntu-24.04.1/SHA256SUMS",
      "size": 51,
      "symlink": ""
    }
  ]
}
```

## Errors

| Code | Reason                                                                     |
| ---- | -------------------------------------------------------------------------- |
| -1   | Session not found. If a `session_id` is specified, the session must exist. |
| -2   | Torrent not found in session.                                              |
| -4   | Torrent has no metadata                                                    |
