# `kv.set`

Set values in the key-value store. If a key does not exist, it will be inserted
and if it does exist, its value will be updated.

_Some keys are used internally by Porla. These are prefixed with `porla.` and
should be updated with caution._

## Request

```json
{
  "webui.torrents.list.cols": [
    { "id": "info-hash", "order": 1 },
    { "id": "name",      "order": 2 },
  ]
}
```

## Response

```json
{
}
```
