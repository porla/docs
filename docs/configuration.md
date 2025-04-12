---
sidebar_position: 5
---

# Configuration

Porla can be configured in various ways - either via environment variables,
command line arguments, or a configuration file.

Using a configuration file is recommended since it has support for all the
options available.

## Examples

Use the following examples as a base for your own configuration. If you do not specify
a config, Porla will use default values.

### With `docker compose`

```yaml
version: "3"

services:
  porla:
    image: ghcr.io/porla/porla
    environment:
      - PORLA_CONFIG_FILE=/var/lib/porla/config.toml # path to a TOML config file with additional configuration.
      - PORLA_DB=/var/lib/porla/porla.sqlite # path a file (which does not need to exist) that porla will use to store its state.
      - PORLA_HTTP_AUTH_DISABLED_YES_REALLY=false # set to true to disable HTTP JWT authentication (not recommended).
      - PORLA_HTTP_BASE_PATH=/ # set to a path where the HTTP parts of Porla will be served. Defaults to /.
      - PORLA_HTTP_HOST=0.0.0.0 # set to an IP address which to bind the HTTP server. Defaults to 127.0.0.1.
      - PORLA_HTTP_METRICS_ENABLED=true # set to true/false to enable or disable the metrics endpoint. Defaults to true.
      - PORLA_HTTP_PORT=1337 # set to the port to use for the HTTP server. Defaults to 1337.
      - PORLA_LOG_LEVEL=debug # the minimum log level to use. Valid values are trace, debug, info, warning, error, fatal. Defaults to info.
      - PORLA_SESSION_SETTINGS_BASE="default" # the libtorrent settings base to use for session settings. Valid values are default, min_memory_usage, high_performance_seed. Defaults to default.
      - PORLA_STATE_DIR=/var/lib/porla # a path to a directory where Porla will store its state.
      - PORLA_TIMER_DHT_STATS=5000 # the interval in milliseconds to push DHT stats. Defaults to 5000.
      - PORLA_TIMER_SESSION_STATS=5000 # the interval in milliseconds to push session stats. Defaults to 5000.
      - PORLA_TIMER_TORRENT_UPDATES=1000 # the interval in milliseconds to push torrent state updates. Defaults to 1000.
      - PORLA_WORKFLOW_DIR=/var/lib/porla/workflows # the path to where Porla will load user workflows from.

```

## TOML reference

### `db`

The `db` key specifies a file (which will be created if it does not exist)
where Porla will store all of its state.

If `db` is set to `:memory:`, Porla will run with a SQLite in-memory database
which can be useful for debugging. However, while torrent data is saved to disk,
no other state is saved.

```toml
db = "/var/lib/porla/porla.sqlite"
```

### `secret_key`

_Setting a `secret_key` is highly encouraged_.

Porla uses the secret key to sign various pieces of data. For example, all JWTs
are signed with this secret key. If no secret key is defined, Porla will generate
a new one every startup. This means old JWTs becomes invalid.

Use `porla key:generate` to generate a cryptographically secure secret key.
Use `sudo docker exec -it <CONTAINER_NAME> porla key:generate` for docker installations.

```toml
secret_key = "<generated secret key>"
```

### `session_settings`

:::caution

While having access to all libtorrent settings is a powerful feature, it is
also easy to break stuff.

:::

Use the `session_settings` section to directly set libtorrent settings. You can use
the `base` key to set a base setting layer.

Refer to the [libtorrent documentation](http://libtorrent.org/reference-Settings.html#settings_pack)
for detailed information for each setting.

```toml
[session_settings]
base = "default" # (or "high_performance_seed", or "min_memory_usage")
close_redundant_connections = false
```

### `listen_interfaces`

The `listen_interfaces` key sets the interfaces to use when listening for
connections. You can bind to either an IP address or a network interface name.

It is an array of arrays, where each sub-array has two elements. The first is
a string which is either an IP address or a network interface name, the second
is a number that represents the port to listen on for that specific interface.

```toml
listen_interfaces = [
  ["0.0.0.0", 6881],
  ["eth1",    6882]
]
```

### `presets`

Presets is a powerful way of applying settings to a torrent. Any preset you add
to the configuration can be references in the `preset` key when calling the
`torrents.add` RPC method.

The special `default` preset is applied to all added torrents. Other presets
will inherit the keys specified in the default preset. _All preset keys are optional_.

```toml
[presets.default] # example of all the 
download_limit = 20000 # in bytes per second per torrent in this preset
max_connections = 100
max_uploads = 200
save_path = "/dl/default"
storage_mode = "allocate" # (or "sparse")
upload_limit = -1 # -1 means unlimited
category = "default"
tags = ["tag1", "tag2"] # Array of tag strings



[presets.other-1] # override the save path from the default preset
save_path = "/dl/other"
```

### `proxy`

Set a proxy to use when connecting to BitTorrent peers.

```toml
[proxy]
host = "10.64.0.1"
port = 1080
type = "socks5"
hostnames = true
peer_connections = true
tracker_connections = true
```

### `timer`

The `timer` section specifies the interval for various timers in Porla. The
interval is in milliseconds, and a value of 0 (or less) will disable the timer.

While disabling timers is supported, it will have an effect on how Porla operates.

For example, disabling the `torrent_updates` timer (by setting it to 0) will
also disable the `state_update` event in the events API.

```toml
[timer]
dht_stats = 3000
session_stats = 3000
torrent_updates = 1000
```

### `workflow_dir`

The `workflow_dir` key specifies the directory from where Porla will load Lua
based workflows.

```toml
workflow_dir = "/usr/lib/porla/workflows"
```

### `Multiple session support`

Porla supports running multiple sessions at once without running a seperate instance of porla.
To do so you have to declare the sessions in the `config.toml` file and then you can use different
settings for each session.

```toml
[sessions.secondary]
[sessions.seeding]

[sessions.secondary.settings]
base = "default"
listen_interfaces = "wg0:1234"
outgoing_interfaces = "wg0"
active_downloads = 3
active_seeds = 1

[sessions.seeding.settings]
base = "high_performance_seed"
listen_interfaces = "wg0:5678"
outgoing_interfaces = "wg0"
active_downloads = 2
active_seeds = -1
```

Presets can then be assigned to add torrents to specific sessions. By default they are added to the
default session as defined by `session_settings`.

```toml
[presets.new]
category = "others"
session = "secondary"
tags = ["others"]

[presets.ratio]
category = "seed"
session = "seeding"
upload_limit = -1
tags = ["ratiofarm","seeding"]
"$hidden" = true
```
