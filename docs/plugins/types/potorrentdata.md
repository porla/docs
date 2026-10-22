# `PoTorrentData`

Porla-specific data for a torrent, such as category, tags and session.

## Properties

### `category: string?`

<Since>v0.42.0</Since>

Gets the category.

### <code>session: [PoSessionHandle](./posessionhandle.md)</code>

<Since>v0.42.0</Since>

Gets the PoSessionHandle for the torrent that this torrent data is associated
with.

## Methods

### `has_tag(tag: string): boolean`

<Since>v0.42.0</Since>

Returns true if the given tag exists.

### `metadata(key: string): object`

### `tags(): string[]`

<Since>v0.42.0</Since>

Returns a string array of all the tags.

### `update(values: table): void`

<Since>v0.51.0</Since>

Updates category, metadata and tags.

### Example

```lua
data:update({
    category = "new category",
    metadata = {
        foo = porla.null, -- will remove the key `foo`
        bar = 1337 -- adds/sets bar
    },
    tags = { "tv", "not-tv" } -- replaces the tag list
})
```
