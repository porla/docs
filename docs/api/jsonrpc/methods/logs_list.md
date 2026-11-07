# `logs.list`

<Since>v0.55.0</Since>

Lists recent log entries from Porla's in-memory log. Porla keeps the newest
4 MiB of entries at or above [`--log-level`](../../../configuration.md#porla_log_level);
messages and string properties longer than 8 KiB are cut. Only signed-in users
may call it.

Without `after` you get the newest `limit` entries, oldest first. To poll for new
entries, pass the `cursor` from the previous response as `after`. A different
`run_id` than last time means Porla restarted: drop what you have and call
again without `after`.

## Request

```json
{
  // Optional. Return entries after this cursor
  "after": 1042,

  // Optional. 1 to 1000, defaults to 500
  "limit": 500,

  // Optional
  "filters": {
    // This level or worse: trace, debug, info, warning, error, fatal
    "min_level": "warning",

    // Exact component name, e.g. "session", "db", "rpc" or "plugin"
    "component": "plugin",

    // Only entries from this plugin; the core plugin is 0
    "plugin_id": 3
  }
}
```

## Response

```json
{
  "entries": [
    {
      "seq": 1043,

      // Unix time in milliseconds
      "ts": 1893456000123,
      "level": "warning",
      "component": "plugin",

      // Whatever the entry was logged with, such as plugin_id, session_id or
      // torrent; null when the logged value was empty
      "properties": {
        "plugin_id": 3
      },
      "message": "Tracker unreachable"
    }
  ],

  // Pass as `after` on the next call
  "cursor": 1043,
  "run_id": "9f2c41d07ab35e18"
}
```

## Errors

| Code   | Reason                                                                              |
| ------ | ----------------------------------------------------------------------------------- |
| -32602 | `limit` outside 1–1000, or `filters.min_level` isn't a known level, with data.field |
