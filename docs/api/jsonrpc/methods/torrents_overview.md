# `torrents.overview`

Get an overview of all torrents in all sessions. This method does not return
any torrent-specific data, only various counts.

## Request

### Filters

#### `session_id`

Only return data for the session with the given ID. If you have a large amount
of sessions and/or torrents, this will speed things up since only a single
session will be iterated.

### Example

```json
{
  "filters": {
    "session_id": 8
  }
}
```

## Response

```json
{
  "sessions": [
    {
      "session_id": 7,
      "session_name": "default",

      "torrents_errors": 0,
      "torrents_per_category": {
        "racing": 18,
        "lts": 67
      },
      "torrents_per_flags": [
        [ 16, 87 ]
      ],
      "torrents_per_state": {
        "checking_files": 2,
        "downloading_metadata": 19,
        "downloading": 5,
        "finished": 1007,
        "seeding": 419,
        "checking_resume_data": 3
      },
      "torrents_per_tag": {
        "tag-1": 0,
        "tag-4": 77
      },
      "torrents_per_tracker": {
        "http://tracker-url/announce": 43
      },
      "torrents_total": 1649
    }
  ]
}
```
