---
sidebar_position: 1
---

# Sessions

Porla has the ability to run multiple parallell libtorrent sessions. Each
session is isolated and can have its own set of settings.

Running multiple sessions give you the possibility to set up one for racing,
another for long term seeding, etc.

:::warning[Duplicate torrents]

Since sessions are isolated, you can (for good or bad) add the same torrent to
multiple sessions. While Porla handles this without issue, this is most likely
frowned upon by various trackers.

:::

## Listen interfaces

:::info[TLDR]

Refer to the log output to see which listen interfaces are actually used.

:::

When creating new sessions, the default listen interface is
`0.0.0.0:6881,[::]:6881` which means all IPv4 and IPv6 adapters on port 6881.

If you already have a session that listens on this port, libtorrent will use
the setting `max_retry_port_bind` to increment the port by 1 and retry. This
means that the actual port that your session listens on might be different than
the one in `listen_interfaces`.

If `listen_system_port_fallback` is enabled (which it is, by default),
libtorrent will bind to port 0 if the configured port could not be bound,
effectively asking the operating system for a random port to use.

## Settings

Each session has its own settings, both libtorrent settings as well as some
Porla specific settings.
