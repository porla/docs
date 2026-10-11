# `porla_events`

Emits events for various things in Porla - torrents, sessions, presets, plugins
and the key/value store.

## Exports

### <code>on(event: string, callback: function): [PoCancellable](../types/pocancellable.md)</code>

<Since>v0.51.0</Since>

Registers `callback` for the given event and returns a cancellable that you can
use to remove the handler.

The callback is called with a single argument - an event table. All event
tables include a `name` field with the name of the event.

Raises an error if `event` is not a valid event name.

#### Example

```lua
local events = require("porla_events")

local cancellable = events.on("torrent.added", function(event)
    local status = event.torrent:status()
    print("added torrent", status.name, "to session", event.session.name)
end)

-- some time later, to stop listening
cancellable:cancel()
```

## Events

### Key/value store

#### `kv.updated`

<Since>v0.51.0</Since>

| Field  | Type       | Description                 |
| ------ | ---------- | --------------------------- |
| `keys` | `string[]` | The keys that were written. |

Emitted when one or more keys in the [key/value store](../../concepts/keyvalue.md)
are written. Updating a key to the same value will emit this event. Read-only keys
are never written and are not published.

### Plugins

#### `plugin.added`

<Since>v0.51.0</Since>

| Field       | Type     | Description                 |
| ----------- | -------- | --------------------------- |
| `plugin_id` | `number` | The ID of the added plugin. |

Emitted when a plugin is added. A `plugin.loaded` event will follow it it then
loads.

#### `plugin.loaded`

<Since>v0.51.0</Since>

| Field       | Type     | Description                  |
| ----------- | -------- | ---------------------------- |
| `plugin_id` | `number` | The ID of the loaded plugin. |

Emitted when a plugin has been loaded.

#### `plugin.unloaded`

<Since>v0.51.0</Since>

| Field       | Type     | Description                    |
| ----------- | -------- | ------------------------------ |
| `plugin_id` | `number` | The ID of the unloaded plugin. |

Emitted when a plugin has been unloaded, for example on reload or removal.

#### `plugin.updated`

<Since>v0.51.0</Since>

| Field       | Type     | Description                   |
| ----------- | -------- | ----------------------------- |
| `plugin_id` | `number` | The ID of the updated plugin. |

Emitted when a plugin's settings are updated. The plugin is then reloaded so
`plugin.unloaded` and `plugin.loaded` will follow this event.

#### `plugin.removed`

<Since>v0.51.0</Since>

| Field         | Type     | Description                                |
| ------------- | -------- | ------------------------------------------ |
| `plugin_id`   | `number` | The ID of the removed plugin.              |
| `plugin_path` | `string` | The path where the plugin was loaded from. |

Emitted when a plugin has been removed.

### Presets

#### `preset.added`

<Since>v0.51.0</Since>

| Field       | Type     | Description                 |
| ----------- | -------- | --------------------------- |
| `preset_id` | `number` | The ID of the added preset. |

Emitted when a preset is added.

#### `preset.updated`

<Since>v0.51.0</Since>

| Field       | Type     | Description                   |
| ----------- | -------- | ----------------------------- |
| `preset_id` | `number` | The ID of the updated preset. |

Emitted when a preset is updated. Making a preset the default also emits this
event for the previous default preset. Removing a session emits this event for
each preset that used it.

#### `preset.removed`

<Since>v0.51.0</Since>

| Field         | Type     | Description                     |
| ------------- | -------- | ------------------------------- |
| `preset_id`   | `number` | The ID of the removed preset.   |
| `preset_name` | `string` | The name of the removed preset. |

Emitted when a preset is removed.

### Sessions

#### `session.added`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description                  |
| ------------ | ------------------------------------------------ | ---------------------------- |
| `session_id` | `number`                                         | The ID of the added session. |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session that was added.  |

Emitted when a session is added.

#### `session.loaded`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description                                          |
| ------------ | ------------------------------------------------ | ---------------------------------------------------- |
| `session_id` | `number`                                         | The ID of the loaded session.                        |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session that was loaded.                         |
| `torrents`   | `number`                                         | The number of torrents loaded.                       |
| `failed`     | `boolean`                                        | `true` if loading stopped early because of an error. |

Emitted when a session has loaded its torrents, both at startup and when a
session is added.

#### `session.updated`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description                    |
| ------------ | ------------------------------------------------ | ------------------------------ |
| `session_id` | `number`                                         | The ID of the updated session. |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session that was updated.  |

Emitted when a session is updated (renamed, set as default, etc).

#### `session.unloaded`

<Since>v0.51.0</Since>

| Field          | Type     | Description                     |
| -------------- | -------- | ------------------------------- |
| `session_id`   | `number` | The ID of the unloaded session. |
| `session_name` | `string` | The name of the session.        |

Emitted when a session is unloaded.

#### `session.removed`

<Since>v0.51.0</Since>

| Field          | Type     | Description                    |
| -------------- | -------- | ------------------------------ |
| `session_id`   | `number` | The ID of the removed session. |
| `session_name` | `string` | The name of the session.       |

Emitted when a session is removed.

#### `session.stats`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description                                                                               |
| ------------ | ------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `session_id` | `number`                                         | The ID of the session.                                                                    |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session.                                                                              |
| `stats`      | `table`                                          | Session counters, keyed by libtorrent metric name (for example `net.sent_payload_bytes`). |

Emitted periodically with session statistics.

### Torrents

#### `torrent.added`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description            |
| ------------ | ------------------------------------------------ | ---------------------- |
| `session_id` | `number`                                         | The ID of the session. |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session.           |
| `info_hash`  | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash. |
| `torrent`    | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.    |

#### `torrent.checked`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description            |
| ------------ | ------------------------------------------------ | ---------------------- |
| `session_id` | `number`                                         | The ID of the session. |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session.           |
| `info_hash`  | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash. |
| `torrent`    | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.    |

#### `torrent.error`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description                |
| ------------ | ------------------------------------------------ | -------------------------- |
| `session_id` | `number`                                         | The ID of the session.     |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session.               |
| `info_hash`  | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash.     |
| `torrent`    | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.        |
| `error`      | `error`                                          | The error.                 |
| `filename`   | `string`                                         | The file involved, if any. |

#### `torrent.file_error`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description                                         |
| ------------ | ------------------------------------------------ | --------------------------------------------------- |
| `session_id` | `number`                                         | The ID of the session.                              |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session.                                        |
| `info_hash`  | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash.                              |
| `torrent`    | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.                                 |
| `error`      | `error`                                          | The error.                                          |
| `filename`   | `string`                                         | The file that failed.                               |
| `op`         | `string`                                         | The operation that failed, for example `file_open`. |

#### `torrent.finished`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description                                                                                                 |
| ------------ | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `session_id` | `number`                                         | The ID of the session.                                                                                      |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session.                                                                                                |
| `info_hash`  | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash.                                                                                      |
| `torrent`    | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.                                                                                         |
| `first`      | `boolean`                                        | `true` the first time this torrent finished, in this session downloaded any payload data for it to trigger. |

Emitted each time a torrent finishes - this can happen both due to downloading
all pieces, rechecking, etc.

The `first` field can be checked to make sure it finished due to downloading
payload data, and is only true once per downloaded torrent.

```lua
events.on("torrent.finished", function(event)
    if not event.first then return end
    -- runs once per downloaded torrent
end)
```

#### `torrent.metadata_received`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description            |
| ------------ | ------------------------------------------------ | ---------------------- |
| `session_id` | `number`                                         | The ID of the session. |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session.           |
| `info_hash`  | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash. |
| `torrent`    | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.    |

#### `torrent.paused`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description            |
| ------------ | ------------------------------------------------ | ---------------------- |
| `session_id` | `number`                                         | The ID of the session. |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session.           |
| `info_hash`  | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash. |
| `torrent`    | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.    |

#### `torrent.removed`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description            |
| ------------ | ------------------------------------------------ | ---------------------- |
| `session_id` | `number`                                         | The ID of the session. |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session.           |
| `info_hash`  | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash. |

#### `torrent.resumed`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description            |
| ------------ | ------------------------------------------------ | ---------------------- |
| `session_id` | `number`                                         | The ID of the session. |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session.           |
| `info_hash`  | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash. |
| `torrent`    | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.    |

#### `torrent.state_changed`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description            |
| ------------ | ------------------------------------------------ | ---------------------- |
| `session_id` | `number`                                         | The ID of the session. |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session.           |
| `info_hash`  | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash. |
| `torrent`    | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.    |
| `state`      | `string`                                         | The new state.         |
| `prev_state` | `string`                                         | The previous state.    |

States are `checking_files`, `downloading_metadata`, `downloading`,
`finished`, `seeding` and `checking_resume_data`.

#### `torrent.storage_moved`

<Since>v0.51.0</Since>

| Field          | Type                                             | Description             |
| -------------- | ------------------------------------------------ | ----------------------- |
| `session_id`   | `number`                                         | The ID of the session.  |
| `session`      | [`PoSessionHandle`](../types/posessionhandle.md) | The session.            |
| `info_hash`    | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash.  |
| `torrent`      | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.     |
| `storage_path` | `string`                                         | The new save path.      |
| `old_path`     | `string`                                         | The previous save path. |

Emitted as a response to calling `move_storage` on a [`LtTorrentHandle`](../types/lttorrenthandle.md).

#### `torrent.storage_moved_failed`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description                |
| ------------ | ------------------------------------------------ | -------------------------- |
| `session_id` | `number`                                         | The ID of the session.     |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session.               |
| `info_hash`  | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash.     |
| `torrent`    | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.        |
| `error`      | `error`                                          | The error.                 |
| `file_path`  | `string`                                         | The file involved, if any. |
| `op`         | `string`                                         | The operation that failed. |

Emitted when moving a torrent's storage fails.

#### `torrent.tracker_error`

<Since>v0.51.0</Since>

| Field            | Type                                             | Description                                      |
| ---------------- | ------------------------------------------------ | ------------------------------------------------ |
| `session_id`     | `number`                                         | The ID of the session.                           |
| `session`        | [`PoSessionHandle`](../types/posessionhandle.md) | The session.                                     |
| `info_hash`      | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash.                           |
| `torrent`        | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.                              |
| `tracker_url`    | `string`                                         | The tracker.                                     |
| `local_endpoint` | `{ string, number }`                             | Local address and port used for the announce.    |
| `times_in_row`   | `number`                                         | Number of failures in a row.                     |
| `error`          | `error`                                          | The error.                                       |
| `op`             | `string`                                         | The operation that failed.                       |
| `failure_reason` | `string`                                         | The failure reason given by the tracker, if any. |

#### `torrent.tracker_reply`

<Since>v0.51.0</Since>

| Field            | Type                                             | Description                                   |
| ---------------- | ------------------------------------------------ | --------------------------------------------- |
| `session_id`     | `number`                                         | The ID of the session.                        |
| `session`        | [`PoSessionHandle`](../types/posessionhandle.md) | The session.                                  |
| `info_hash`      | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash.                        |
| `torrent`        | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.                           |
| `tracker_url`    | `string`                                         | The tracker.                                  |
| `local_endpoint` | `{ string, number }`                             | Local address and port used for the announce. |
| `num_peers`      | `number`                                         | Number of peers returned.                     |

#### `torrent.tracker_warning`

<Since>v0.51.0</Since>

| Field             | Type                                             | Description                                   |
| ----------------- | ------------------------------------------------ | --------------------------------------------- |
| `session_id`      | `number`                                         | The ID of the session.                        |
| `session`         | [`PoSessionHandle`](../types/posessionhandle.md) | The session.                                  |
| `info_hash`       | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash.                        |
| `torrent`         | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.                           |
| `tracker_url`     | `string`                                         | The tracker.                                  |
| `local_endpoint`  | `{ string, number }`                             | Local address and port used for the announce. |
| `warning_message` | `string`                                         | The warning.                                  |

#### `torrent.userdata_updated`

<Since>v0.51.0</Since>

| Field        | Type                                             | Description                                                 |
| ------------ | ------------------------------------------------ | ----------------------------------------------------------- |
| `session_id` | `number`                                         | The ID of the session.                                      |
| `session`    | [`PoSessionHandle`](../types/posessionhandle.md) | The session.                                                |
| `info_hash`  | [`LtInfoHash`](../types/ltinfohash.md)           | The torrent info hash.                                      |
| `torrent`    | [`LtTorrentHandle`](../types/lttorrenthandle.md) | The torrent handle.                                         |
| `fields`     | `string[]`                                       | Which fields changed: `category`, `metadata` and/or `tags`. |
