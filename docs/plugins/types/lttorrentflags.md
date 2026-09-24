# `LtTorrentFlags`

Manages flags for a torrent. Internally it wraps `libtorrent::torrent_flags_t`
which is a bitfield, and this wrapper makes it easier to work with.

See [the libtorrent docs](https://libtorrent.org/reference-Core.html#torrent_flags_t) on flags.

#### Flags

* `seed_mode`
* `upload_mode`
* `share_mode`
* `apply_ip_filter`
* `paused`
* `auto_managed`
* `duplicate_is_error`
* `update_subscribe`
* `super_seeding`
* `sequential_download`
* `stop_when_ready`
* `need_save_resume`
* `disable_dht`
* `disable_lsd`
* `disable_pex`
* `no_verify_files`
* `default_dont_download`
* `i2p_torrent`
* `disable_v1_hashes`

#### Example

```lua
local flags = LtTorrentFlags()

if flags:has("default_dont_download") then
    flags:unset("default_dont_download")
end
```

## Methods

### `has(flag: string): boolean`

<Since>v1.0</Since>

Returns true if the flag is set.

### `set(flag: string): void`

<Since>v1.0</Since>

Sets the flag.

### `unset(flag: string): void`

<Since>v1.0</Since>

Clears a flag by its name.
