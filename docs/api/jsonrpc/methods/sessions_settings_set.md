# `sessions.settings.set`

Updates the settings for a given session.

Refer to the [libtorrent documentation](http://libtorrent.org/reference-Settings.html#settings_pack)
for detailed information for each setting.

_Some settings like user agent, peer ID, etc cannot be updated_.

## Request

```json
{
  "id": 7,
  "settings": {
    "active_limit": 99
  }
}
```
