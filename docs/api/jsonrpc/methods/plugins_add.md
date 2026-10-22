# `plugins.add`

Adds a local plugin, either a directory with `plugin.lua` or a zip, and loads
it.

:::info

A plugin that fails to load is still added.

:::

## Request

```json
{
  "path": "/tmp/plugin.lua",
  "config": "<a Lua chunk that is passed to the init function of the plugin>"
}
```

## Response

```json
{
  "id": 7
}
```

## Errors

| Code | Reason                                |
| ---- | ------------------------------------- |
| -2   | Plugin path must be absolute          |
| -3   | Plugin path does not exist            |
| -4   | Plugin path is used by another plugin |
