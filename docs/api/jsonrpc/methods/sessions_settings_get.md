# `sessions.settings.get`

Get the settings for a session.

Refer to the [libtorrent documentation](http://libtorrent.org/reference-Settings.html#settings_pack)
for detailed information for each setting.

## Request

```json
{
  "id": 7,
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
