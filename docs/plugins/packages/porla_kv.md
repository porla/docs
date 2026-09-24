# `porla_kv`

Exposes the key-value store to plugins. Values are stored as JSON, but are
converted to and from Lua using the same JSON codec from `porla_codec`.

Use the key-value store to store smaller amounts of data and state.

## Exports

### `get(key: string): object`

<Since>v1.0</Since>

Gets the value associated with `key`, or nil.

### `set(key: string, value: object): void`

<Since>v1.0</Since>

Stores `value` in the key-value store under the key named `key`.
