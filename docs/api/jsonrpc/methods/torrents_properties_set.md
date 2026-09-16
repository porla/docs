# `torrents.properties.set`

Sets properties on a torrent, such as flags, tags and transfer limits.

_All properties except `info_hash` are optional_.

## Request

```json
{
    "info_hash": "aabbcc...",
    "session_id": 18,

    "category": "new category",

    // sets the download/upload limit
    "download_limit": 47,
    "upload_limit": 7,

    // To set a flag, add it to both arrays.
    // To unset a flag, add it to flags_mask and not flags (send empty array).
    "flags": ["disable_dht"],
    "flags_mask": ["disable_dht"],

    "max_connections": 80,
    "max_uploads": 7,

    // Replaces all tags with these.
    "tags": ["new", "tags"]
}
```
