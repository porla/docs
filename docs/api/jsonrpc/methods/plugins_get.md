# `plugins.get`

Gets details about the plugin with the specified ID.

## Request

```json
{
  "id": 7
}
```

## Response

_Plugin configuration is only returned for user keys (JWT)_.

```json
{
  "plugin": {
    "id": 7,
    "path": "/tmp/plugins/skeleton",
    "name": "skeleton",
    "version": "0.1",
    "config": "return {}",
    "metadata": {},
    "is_loaded": true
  }
}
```

## Errors

| Code | Reason           |
| ---- | ---------------- |
| -1   | Plugin not found |
