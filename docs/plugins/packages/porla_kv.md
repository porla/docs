# `porla_kv`

Exposes the key-value store to plugins. Values are stored as JSON, but are
converted to and from Lua using the same JSON codec from `porla_codec`.

Use the key-value store to store smaller amounts of data and state.

:::warning

The key-value store is global and shared by Porla, plugins and the JSONRPC API.

Do not store secrets here.

:::

## Exports

### `get(key: string): object`

<Since>v0.46.0</Since>

Gets the value associated with `key`. If they key does not exist, nil will be
returned as well.

### `set(key: string, value: object): void`

<Since>v0.46.0</Since>

Stores `value` in the key-value store under the key named `key`.
