---
sidebar_position: 3
---

# Configuration

Porla can be configured in various ways - either via environment variables,
command line arguments, or a configuration file.

Using a configuration file is recommended since it has support for the most
options.

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
      PORLA_DB: ":memory:"
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
base = "default" # (or "high_performance", or "min_memory_usage")
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
