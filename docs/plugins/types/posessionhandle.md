# `PoSessionHandle`

A handle to a [session](../../concepts/sessions.md).

## Properties

### <code>name: string</code>

<Since>v1.0</Since>

Returns the name of this session.

## Methods

### `add_dht_node(host: string, port: number): void`

<Since>v1.0</Since>

Adds a node to the DHT routing table.

### <code>apply_settings(settings: [LtSettingsPack](./ltsettingspack.md)): void</code>

<Since>v1.0</Since>

Applies settings to this session. Some settings cannot be set, like user agent
or peer fingerprint.

### <code>get_settings(): [LtSettingsPack](./ltsettingspack.md)</code>

<Since>v1.0</Since>

Gets all the settings for this session.

### `is_paused(): boolean`

<Since>v1.0</Since>

Returns a value indicating whether this session is paused.

### `pause(): void`

<Since>v1.0</Since>

Pauses the session.

### `resume(): void`

<Since>v1.0</Since>

Resumes the session.

### <code>torrents(): [PoTorrentsHandle](./potorrentshandle.md)</code>

<Since>v1.0</Since>

Returns an object to find and iterate all torrents in this session.
