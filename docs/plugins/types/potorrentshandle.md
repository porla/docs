# `PoTorrentsHandle`

Manages torrents for a specific session.

## Methods

### <code>add(params: [LtAddTorrentParams](./ltaddtorrentparams.md)): void</code>

<Since>v1.0</Since>

Adds a torrent to the session.

### <code>count(): number</code>

<Since>v1.0</Since>

Returns the total number of torrents in this handle.

### <code>get(info_hash: [LtInfoHash](./ltinfohash.md)): [LtTorrentHandle](./lttorrenthandle.md), [LtTorrentStatus](./lttorrentstatus.md) | nil</code>

<Since>v1.0</Since>

Gets a single torrent based on the given info hash. Returns a tuple of a
torrent handle and the latest cached torrent status. If you do not need the
absolute latest status, use the cached value (it is free).

#### Example

```lua
local hash = LtInfoHash("176de2e6724976a38d51d0a34d3c0503a2305e63")
local handle, status = torrents:get(hash)

if handle ~= nil then
    print("Found torrent {}", status.name)
end
```

### <code>list(): [PoTorrentsIterator](./potorrentsiterator.md)</code>

<Since>v1.0</Since>

Returns an iterator to let you loop through all the torrents.

#### Example

```lua
for handle, status in torrents:list() do
    print("Torrent {}", status.name)

    if status.name == "hazardous materials" then
        handle:pause()
    end
end
```

### <code>remove(info_hash: [LtInfoHash](./ltinfohash.md)): void</code>

<Since>v1.0</Since>

Removes a torrent by its info hash.

### <code>remove(handle: [LtTorrentHandle](./lttorrenthandle.md)): void</code>

<Since>v1.0</Since>

Removes a torrent given its handle.
