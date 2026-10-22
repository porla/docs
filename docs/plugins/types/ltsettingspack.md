# `LtSettingsPack`

A settings pack which you can use to update session settings.

There are hundreds of settings to tinker with, and the `LtSettingsPack` has
getters and setters for all.

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

<Since>v0.42.0</Since>

Returns an empty settings pack.

## Factories

### `LtSettingsPack.default_settings()`

<Since>v0.42.0</Since>

### `LtSettingsPack.high_performance_seed()`

<Since>v0.42.0</Since>

#### Example

```lua
local settings = LtSettingsPack.high_performance_seed()
```

### `LtSettingsPack.min_memory_usage()`

<Since>v0.42.0</Since>
