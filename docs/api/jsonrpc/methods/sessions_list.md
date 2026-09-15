# `sessions.list`

Lists all sessions. Also includes their metadata and torrents count.

## Request

```json
{}
```

## Response

```json
{
  "sessions": [
    {
      "id": 8,
      "name": "long-term-seed",
      "is_default": false,
      "metadata": {
        "$color": "#ff00ff"
      },
      "state": {
        "is_listening": true,
        "is_paused": false,
        "torrents_total": 544
      }
    }
  ]
}
```
