# `PoTorrentData`

Porla-specific data for a torrent, such as category, tags and session.

## Properties

### `category: string`

<Since>v1.0</Since>

Gets or sets the category.

### <code>session: [PoSessionHandle](./posessionhandle.md)</code>

<Since>v1.0</Since>

Gets the PoSessionHandle for the torrent that this torrent data is associated
with.

## Methods

### `add_tag(tag: string): void`

<Since>v1.0</Since>

Adds a tag.

### `has_tag(tag: string): boolean`

<Since>v1.0</Since>

Returns true if the given tag exists.

### `remove_tag(tag: string)`

<Since>v1.0</Since>

Removes the given tag.

### `tags(): string[]`

<Since>v1.0</Since>

Returns a string array of all the tags.
