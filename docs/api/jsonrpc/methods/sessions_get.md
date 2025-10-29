# `sessions.get`

Get a session by ID.

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
  "session": {
    "id": 7,
    "name": "default",
    "settings": {
      "anonymous_mode": false,
      "proxy_port": 1080
    }
  }
}
```
