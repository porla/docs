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
  "id": 4,
  "name": "my-preset",
  "category": null,
  "download_limit": null,
  "max_connections": null,
  "max_uploads": null,
  "metadata": {},
  "session": "default",
  "save_path": "/tmp",
  "storage_mode": "sparse",
  "tags": ["foo", "bar"],
  "upload_limit": 1024
}
```
