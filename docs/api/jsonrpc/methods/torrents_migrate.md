# `torrents.migrate`

Migrate a single torrent from one session to another.

:::warning
This _might_ leave your torrent lost if the target session disappears and the
source session also disappears or does not accept the torrent back.

There is also a timeout of 30s waiting for the removed alert from libtorrent. If
this timeout is reached, the torrent is also lost.
:::

### Sequence of events

After validating that the torrent is eligible to be added to the target session
it is removed from the source session.

When the event `torrent.removed` is received from the source session for the
given torrent, it is added to the target session.

If adding to the target session fails, Porla tries to add it back to the source
session.

If that fails, the torrent is lost.

If no `torrent.removed` event is received for the torrent within 30 seconds, the
operation is canceled, and the torrent is likely lost as well.

## Request

```json
{
  "info_hash": ["abcdef0123456789abcd", null],

  // optional session ID where the torrent is currently
  "session_id": 7,

  // the target session ID
  "target_session_id": 19
}
```

## Response

```json
{
  "info_hash": ["abcdef0123456789abcd", null],
  "session_id": 19
}
```

## Errors

| Code   | Reason                                                              |
| ------ | ------------------------------------------------------------------- |
| -1     | Session not found                                                   |
| -2     | Session not loaded                                                  |
| -3     | Torrent not found in session                                        |
| -4     | Torrent not valid                                                   |
| -5     | Torrent already exists in target session                            |
| -6     | Migration failed, but torrent could be added back to source session |
| -7     | Migration failed, _torrent is lost_                                 |
| -32602 | `target_session_id` must differ from `session_id`                   |
| -32603 | Operation timed out, _torrent is most likely lost_                  |
