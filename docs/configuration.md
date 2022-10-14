---
sidebar_position: 3
---

# Configuration

Porla uses [TOML](https://toml.io/en/) as the format of choice for configuration.

By default, Porla checks the following places for its config (in the order
specified),

 * The `--config /some/path/porla.toml` command line argument.
 * The `PORLA_CONFIG` environment variable. This variable should contain the TOML
   config as its value. Can be used to specify inline config in a `docker-compose`
   file, for example.
 * The `PORLA_CONFIG_FILE` environment variable. Should point to a config file.
 * If a `porla.toml` config file exists in the current working directory, that file
   is read.

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
      PORLA_CONFIG: |
        listen_interfaces = [
          ["0.0.0.0", 6881]
        ]
```

## Reference

### `libtorrent`

:::caution

While having access to all libtorrent settings is a powerful feature, it is
also easy to break stuff.

:::

Use the `libtorrent` section to directly set libtorrent settings. You can use
the `base` key to set a base setting layer.

Refer to the [libtorrent documentation](http://libtorrent.org/reference-Settings.html#settings_pack)
for detailed information for each setting.

```toml
[libtorrent]
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

### `sqlite`

The `sqlite` section lets you configure SQLite. For now, there is only one option
(`file`), but more may be added in the future.

If `file` is set to `:memory:`, Porla will run with a SQLite in-memory database
which can be useful for debugging. However, while torrent data is saved to disk,
no other state is saved.

```toml
[sqlite]
file = "/var/lib/porla/porla.sqlite"
```

### `timers`

The `timers` section specifies the interval for various timers in Porla. The
interval is in milliseconds, and a value of 0 (or less) will disable the timer.

While disabling timers is supported, it will have an effect on how Porla operates.

For example, disabling the `torrent_updates` timer (by setting it to 0) will
also disable the `state_update` event in the events API.

```toml
[timers]
dht_stats = 3000
session_stats = 3000
torrent_updates = 1000
```
