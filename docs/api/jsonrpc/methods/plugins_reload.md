# `plugins.reload`

Reloads the plugin with the specified ID.

Reloading a plugin will unload it, then load it. To update the configuration
(which also triggers a reload), use [`plugins.update`](./plugins_update.md).

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
