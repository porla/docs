# `plugins.get`

Gets details about the plugin with the specified ID.

`name` and `version` come from the plugin's optional `plugin.json`, read while
the plugin is loaded. Without one, `name` is the plugin's file or directory
name and `version` is `null`.

## Request

```json
{
  "id": 7
}
```

## Response

_Plugin configuration is only returned for logged-in users, not API keys_.

```json
{
  "plugin": {
    "id": 7,
    "path": "/home/user/plugins/my-plugin",
    "name": "My plugin",
    "version": "1.2.0",
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
