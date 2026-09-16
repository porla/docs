# `presets.update`

Updates a preset.

## Request

```json
{
  "id": 4,
  "name": "my-preset",
  "is_default": true,
  "metadata": {},
  "category": null,
  "download_limit": null,

  // Which flags that should be applied with this preset. To set a flag, put it
  // in both flags and flags_mask. To unset, put it in just flags_mask.
  "flags": ["default_dont_download"],
  "flags_mask": ["default_dont_download"],

  "max_connections": null,
  "max_uploads": null,
  "save_path": "/tmp",
  "session_id": 3,
  "storage_mode": "sparse",
  "tags": ["foo", "bar"],
  "upload_limit": 1024
}
```

## Response

```json
{}
```
