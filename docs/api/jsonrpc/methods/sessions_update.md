# `sessions.update`

Updates a session by its ID.

_To update settings, use `sessions.settings.set`_.

## Request

```json
{
  "id": 3,
  "name": "new name",
  "is_default": true,
  "metadata": {},
  "timer_dht_stats": number | null,
  "timer_save_state": number | null,
  "timer_session_stats": number | null,
  "timer_torrent_updates": number | null,
}
```

## Response

```json
null
```

## Errors

| Code   | Reason                                      |
| ------ | ------------------------------------------- |
| -1     | Session not found                           |
| -32602 | Too narrow timer interval                   |
| -32603 | Missing `name`, `is_default`, or `metadata` |
