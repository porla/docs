# `sessions.settings.get`

Get the settings for a session.

Refer to the [libtorrent documentation](http://libtorrent.org/reference-Settings.html#settings_pack)
for detailed information for each setting.

:::info

If the session is not loaded, the settings from the database is returned.
Loaded sessions return their live settings.

:::

## Request

```json
{
  "id": 7
}
```

## Response

```json
{
  "settings": {
    "active_limit": 5,
    ...
  }
}
```

## Errors

| Code | Reason            |
| ---- | ----------------- |
| -1   | Session not found |
