# `sessions.settings.list`

Lists all the session settings and their values for the session with the given
ID.

Refer to the [libtorrent documentation](http://libtorrent.org/reference-Settings.html#settings_pack)
for detailed information for each setting.

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
    "anonymous_mode": false,
    "proxy_port": 1080
  }
}
```
