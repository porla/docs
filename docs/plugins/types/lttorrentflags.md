# `LtTorrentFlags`

Manages flags for a torrent. Internally it wraps `libtorrent::torrent_flags_t`
which is a bitfield, and this wrapper makes it easier to work with.

See [the libtorrent docs](https://libtorrent.org/reference-Core.html#torrent_flags_t) on flags.

#### Example

```lua
local flags = LtTorrentFlags()

if flags:has("default_dont_download") then
    flags:clear("default_dont_download")
end
```

## Methods

### `clear(flag: string): void`

<Since>v1.0</Since>

Clears a flag by its name.

### `has(flag: string): boolean`

<Since>v1.0</Since>

Returns true if the flag is set.

### `set(flag: string): void`

<Since>v1.0</Since>

Sets the flag.
