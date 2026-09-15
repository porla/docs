# `torrents.remove`

Removes a torrent from either the specified session, or the default session.

## Request

```json
{
  // The info hash of the torrent to remove.
  "info_hash": [ "abcdef0123456789abcd", null ],

  // (Optional) The session ID that the info hash belongs to.
  "session_id": 3,

  // (Optional) Set to true to remove the data as well.
  "remove_data": false
}
```

## Response

```json
null
```
