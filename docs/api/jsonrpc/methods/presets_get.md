# `presets.get`

Gets a preset by its ID.

## Request

```json
{
  "id": 4
}
```

## Response

```json
{
  "preset": {
    "id": 4,
    "name": "my-preset",
    "is_default": true,
    "metadata": {},
    "category": null,
    "download_limit": null,
    "flags": ["auto_managed", "paused"],
    "flags_mask": ["auto_managed", "paused"],
    "max_connections": null,
    "max_uploads": null,
    "save_path": "/tmp",
    "session_id": 2,
    "storage_mode": "sparse",
    "tags": ["foo", "bar"],
    "upload_limit": 1024
  }
}
```
