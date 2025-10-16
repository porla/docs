# `plugins.remove`

Removes the plugin with the specified ID. The plugin will be unloaded and
removed.

## Request

```json
{
  "id": 8
}
```

## Response

```json
{
}
```

## Errors

| Code | Reason |
| ---- | ------ |
| -1 | A plugin with the specified ID was not found. |
