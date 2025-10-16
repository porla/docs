# `kv.get`

Get values from the key-value store. Use the `keys` array to return values for
a subset of keys. If no value exists for a given key, it will return _null_ for
that specific key.

Key-values are stored as a string->JSON pair and any JSON value can be stored
for any string key.

_Some keys are used internally by Porla. These are prefixed with `porla.` and
should be used with caution._

## Request

```json
{
  "keys": [
    "webui.torrents.list.cols"
  ]
}
```

## Response

```json
{
  "values": {
    "webui.torrents.list.cols": [
      { "id": "info-hash", "order": 1 },
      { "id": "name",      "order": 2 },
    ]
  }
}
```
