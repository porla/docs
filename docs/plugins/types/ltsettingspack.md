# `LtSettingsPack`

A settings pack which you can use to update session settings.

There are hundreds of settings to tinker with, and the `LtSettingsPack` has
getters and setters for all (except a few like user agent, peer fingerprint,
and some more).

See [the libtorrent documentation](https://libtorrent.org/reference-Settings.html#settings_pack).

#### Example

Set the download rate limit on a settings pack to 1024 bytes per second.

```lua
local settings = LtSettingsPack()
settings.download_rate_limit = 1024

some_session:apply_settings(settings)
```

## Constructors

### `LtSettingsPack()`

<Since>v1.0</Since>

Returns an empty settings pack.

## Factories

### `default_settings()`

<Since>v1.0</Since>

### `high_performance_seed()`

<Since>v1.0</Since>

#### Example

```lua
local settings = LtSettingsPack.high_performance_seed()
```

### `min_memory_usage()`

<Since>v1.0</Since>
