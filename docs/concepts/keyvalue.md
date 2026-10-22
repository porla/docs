---
sidebar_position: 20
---

# Key-value store

Porla has a simple key-value store that is backed by SQLite and available to
get/set values from via the JSONRPC methods [`kv.get`](../api/jsonrpc/methods/kv_get.md)
and [`kv.set`](../api/jsonrpc/methods/kv_set.md).

API keys cannot set any keys (currently). Plugins use the [`porla_kv`](../plugins/packages/porla_kv.md)
package.

All values are stored as JSON and for plugins, are converted to/from Lua automatically.

Porla uses the key-value store internally with the `porla.` key prefix.
