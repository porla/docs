# `PoQuery`

Manages a PQL query. See [PQL](../../concepts/pql.md) for more information on
how to write queries.

## Factories

### `parse(pql: string): PoQuery`

<Since>v1.0</Since>

Parses the given PQL and returns a PoQuery

#### Example

```lua
local only_ubuntu = PoQuery.parse("ubuntu")

if only_ubuntu:includes(ts) then
    print("The torrent contains 'ubuntu' in its name")
end
```

## Methods

### <code>includes(torrent: [LtTorrentStatus](../types/lttorrentstatus.md)): boolean</code>

<Since>v1.0</Since>

Returns true if the given torrent status is matched by the filter.
