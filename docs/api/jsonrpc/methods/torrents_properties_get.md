# `torrents.properties.get`

Gets properties for a torrent.

## Request

```json
{
    "info_hash": "aabb...",
    "session_id": 8
}
```

## Response

```json
{
    // The download/upload bandwidth limit for this specific torrent.
    // -1 is unlimited (but session may have limits).
    "download_limit": -1,
    "upload_limit": -1,

    // An array of all flags that are _set_.
    "flags": ["auto_managed"],

    "max_connections": 200,
    "max_uploads": 8
}
