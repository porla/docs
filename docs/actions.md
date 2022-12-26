---
sidebar_position: 20
---

# Actions

With actions in Porla, users can build workflows that triggers on various events.

For example, you can use actions to move finished torrents to a long-term seeding
storage, or to announce a torrent after a specific delay in order to be early in
a racing swarm.

Actions are bound to presets, which means that only torrents that are bound to a
specific preset will be affected by the actions.

:::info

The actions in the _default_ preset will run for all torrents not in a specific
preset.

:::

## Available actions

### `log`

The log action can be used to print a message to the Porla log.

```toml
["log", "Hello, world!"]
```

### `sleep`

The sleep is exactly what is says, it asynchronously waits the specified amount
of milliseconds before continuing.

_The time to sleep is specified in milliseconds_.

```toml
["sleep", 3000]
```

### `torrents.move`

Move torrents to a new save path. Will delay further execution until the files
are actually in place at the new save path. If moving to a network attached
storage or similar this could take a few minutes.

```toml
["torrents.move", "/new/save/path"]
```

### `torrents.reannounce`

Forces a reannounce of the torrent - i.e it will ask the tracker for peers and
also announce ourself as one. Takes no argument.

```toml
["torrents.reannounce"]
```

## Examples

Use these examples as a base to build your own workflows, or just as inspiration.

### Move torrents

Move torrents in the `4k-remux` preset to `/some/other/path` when they finish
downloading.

```toml
[presets.4k-remux]
on_torrent_finished = [
  ["torrents.move", "/some/other/path"]
]
```

### Reannounce after a delay

If you're using Porla with autobrr for racing, you can use a combination of the
`sleep` and `torrents.reannounce` action to reannounce after a small delay. This
_may_ help in situations where the torrent fails to announce directly.

```toml
[presets.racing]
on_torrent_added [
  ["sleep", 7000],
  ["torrents.reannounce"]
]
```
