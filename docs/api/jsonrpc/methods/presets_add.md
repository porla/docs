# `presets.add`

Adds a preset (see [Presets](../../../concepts/presets.md)).

Since all fields (except the name) are optional, only the name can be specified
when adding. Use [`presets.update`](./presets_update.md) to update the added
preset.

## Request

```json
{
  "name": "my-preset"
}
```

## Response

```json
{
  "id": 4
}
```
