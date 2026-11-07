# `PoTorrentsHandle`

Manages torrents for a specific session.

## Methods

### <code>add(params: [LtAddTorrentParams](./ltaddtorrentparams.md), opts?: table): [LtInfoHash](./ltinfohash.md) | nil, [PoError](./poerror.md) | nil</code>

<Since>v0.42.0</Since>

Adds a torrent to the session. `opts` takes a `preset` (name) or `preset_id`.
The returned info hash means the add was queued: `get`, `list` and `count` see
the torrent once `torrent.added` fires.

Returns `nil, err` with `torrent_already_added` when the torrent is in the
session already, also when only one half of a hybrid torrent's hash matches
(for example its v1 magnet link). Other codes: `session_not_found`,
`session_not_loaded`, `preset_not_found`, `torrent_add_failed`, and
`invalid_params` for a missing info hash or save path.

<Changed in="v0.55.0">One half of a hybrid torrent already in the session counts as already added.</Changed>

#### Example

This will add a torrent to the session by its info hash.

```lua
torrents:add({
    info_hash = LtInfoHash("aabb.."),
    save_path = "/tmp"
})
```

### <code>count(): number</code>

<Since>v0.42.0</Since>

Returns the total number of torrents in this handle.

### <code>get(info_hash: [LtInfoHash](./ltinfohash.md)): [LtTorrentHandle](./lttorrenthandle.md), [LtTorrentStatus](./lttorrentstatus.md) | nil</code>

<Since>v0.42.0</Since>

Gets a single torrent based on the given info hash. Returns a tuple of a
torrent handle and the latest cached torrent status. If you do not need the
absolute latest status, use the cached value (it is free).

A hybrid torrent is also found by its v1 or v2 hash alone.

<Changed in="v0.55.0">A hybrid torrent was only found by both hashes.</Changed>

#### Example

```lua
local hash = LtInfoHash("176de2e6724976a38d51d0a34d3c0503a2305e63")
local handle, status = torrents:get(hash)

if handle ~= nil then
    print("Found torrent", status.name)
end
```

### <code>list(): [PoTorrentsIterator](./potorrentsiterator.md)</code>

<Since>v0.42.0</Since>

Returns an iterator to let you loop through all the torrents.

#### Example

```lua
for handle, status in torrents:list() do
    print("Torrent", status.name)

    if status.name == "hazardous materials" then
        handle:pause()
    end
end
```

### <code>list(query: [PoQuery](./poquery.md)): [PoTorrentsIterator](./potorrentsiterator.md)</code>

<Since>v0.42.0</Since>

Returns an iterator that filters each torrent on the provided query - i.e only
torrents that matches the iterator will be returned.

#### Example

```lua
local only_large = PoQuery.parse("total:>1gb")

for handle, status in torrents:list(only_large) do
    print("Torrent", status.name, "is large")
end
```

### <code>remove(info_hash: [LtInfoHash](./ltinfohash.md)): void</code>

<Since>v0.42.0</Since>

Removes a torrent by its info hash. A hybrid torrent is also found by its v1 or
v2 hash alone.

<Changed in="v0.55.0">A hybrid torrent was only found by both hashes.</Changed>

### <code>remove(handle: [LtTorrentHandle](./lttorrenthandle.md)): void</code>

<Since>v0.42.0</Since>

Removes a torrent given its handle.
