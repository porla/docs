# `session.settings.list`

Lists all the session settings and their values. If you're only interested in
one or few of the settings, pass them as `keys` and the returned list will be
filtered. Omitting the `keys` array will return _all_ settings.

Refer to the [libtorrent documentation](http://libtorrent.org/reference-Settings.html#settings_pack)
for detailed information for each setting.

## Request

```json
{
  // Optional - will only return the settings that matches these keys.
  "keys": [
    "anonymous_mode",
    "proxy_port"
  ]
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
