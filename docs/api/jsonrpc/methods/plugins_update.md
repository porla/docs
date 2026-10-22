# `plugins.update`

Updates a plugin path or config and reloads it.

:::info

Sending `null` as config will clear it.

:::

## Request

```json
{
  "id": 8,
  "path": "/tmp/skeleton.lua",
  "config": "return {}"
}
```

## Response

```json
null
```
