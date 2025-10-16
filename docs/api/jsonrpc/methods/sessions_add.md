# `sessions.add`

Adds a session (see [Sessions](../../../concepts/sessions.md)).

It is possible to specify a settings base (`default`, `high_performance_seed`
or `min_memory_usage`) as well as any overrides to this base.

## Request

```json
{
  "name": "long-term-seed",
  "settings_base": "high_performance_seed",
  "settings": {
    "active_limit": 100
  }
}
```

## Response

```json
{
  "id": 8
}
```
