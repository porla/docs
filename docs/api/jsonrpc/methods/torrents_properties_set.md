# `torrents.properties.set`

Sets properties on a torrent, such as flags, tags and transfer limits.

_All properties except `info_hash` are optional_.

## Request

```json
{
  "info_hash": "...",
  "upload_limit": 1048576,
  "max_connections": 100,
  "tags": ["iso", "ubuntu", "lts"]
}
```
