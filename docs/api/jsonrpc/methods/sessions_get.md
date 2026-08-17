# `sessions.get`

Get a session by ID. This does not include the settings. For settings, use
`sessions.settings.get`.

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
    "is_default": true,
    "metadata": {},
    "state": {
      "is_listening": true,
      "is_paused": false,
      "torrents_total": 18
    }
  }
}
```
