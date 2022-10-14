---
sidebar_position: 3
---

# Events

Porla supports sending events using the HTTP Server-sent events standard. See
[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
for more details about the standard and how it works.

## Endpoint

The event endpoint in Porla is point a client to `http://localhost:1337/api/events`.
Adjust the port for your specific configuration.

## Monitoring using `curl`

You can use `curl` in unbuffered mode (`-N`) to listen on all events in Porla.

```sh
curl -N localhost:1337/api/events
```

## Types

The event endpoint emits JSON structured data. The events are kept small and you
are encouraged to use other API methods to resolve data via the info hash.

### `state_update`

Sent each tick (as configured by `timers.torrent_updates`) if any torrents has
updated state information. _If no torrents has new state, no event will be sent_.

```
event: state_update
data: [ {"info_hash": ["v1", "v2"]} ]
```

### `torrent_added`

Sent when a torrent has been added to the session.

```
event: torrent_added
data: {"info_hash": [ "v1", "v2" ]}
```

### `torrent_paused`

Sent when a torrent is paused.

```
event: torrent_paused
data: {"info_hash": ["v1", "v2"]}
```

### `torrent_removed`

Sent when a torrent is removed from the session. After this event has been
sent, lookups using this info hash will fail until the torrent is added to the
session again.

```
event: torrent_removed
data: {"info_hash": ["v1", "v2"]}
```

### `torrent_resumed`

Sent when a torrent is resumed.

```
event: torrent_resumed
data: {"info_hash": ["v1", "v2"]}
```
