# `sessions.add`

Adds a session (see [Sessions](../../../concepts/sessions.md)).

It is possible to specify a settings base (`default`, `high_performance_seed`
or `min_memory_usage`) as well as any overrides to this base.

## Request

_Only `name` is required_.

```json
{
  "name": "long-term-seed",
  "metadata": {},
  "settings_base": "high_performance_seed",
  "settings": {
    "active_limit": 100
  },
  "timer_dht_stats": number | null,
  "timer_save_state": number | null,
  "timer_session_stats": number | null,
  "timer_torrent_updates": number | null,
}
```

## Response

```json
{
  "id": 8
}
```

## Errors

| Code   | Reason                                                                                                        |
| ------ | ------------------------------------------------------------------------------------------------------------- |
| -32602 | Invalid setting value. `data.field` names the setting (e.g.`settings.file_pool_size`) and nothing is applied. |
