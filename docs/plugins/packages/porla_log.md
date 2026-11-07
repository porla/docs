# `porla_log`

<Since>v0.55.0</Since>

Logs at a given level. Arguments work like `print`: converted with `tostring`
and separated by tabs. Entries are tagged with the plugin's id (`plugin_id`)
and show up in the console log and in
[`logs.list`](../../api/jsonrpc/methods/logs_list.md). `print` logs at `info`.

Entries below Porla's [log level](../../configuration.md#porla_log_level) are
dropped.

## Exports

### `debug(...): void`

### `info(...): void`

### `warning(...): void`

### `error(...): void`

#### Example

```lua
local log = require("porla_log")

log.info("Checking", 3, "feeds")
log.warning("Feed unreachable:", url)
```
