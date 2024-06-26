# `torrents.remove`

Removes a torrent.

## Request

```json
{
  // An array of torrent info hashes.
  "info_hashes": [
    [ "abcdef0123456789abcd", null ]
  ],
  // Set to true to remove the data as well.
  "remove_data": false
}
```

## Response

```json
null
```
