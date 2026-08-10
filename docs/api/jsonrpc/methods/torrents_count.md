# `torrents.count`

Get an overview of all torrents in all sessions. This method does not return
any torrent-specific data, only various counts.

These counts are used in the web UI to display the counts per various state.

## Request

### `session_id`

The session ID to return counts for.

### Example

```json
{
  "session_id": 8
}
```

## Response

```json
{
  // The number of torrents per category.
  "categories": {
    "some-category": 7
  },

  // The number of torrents that are downloading.
  "downloading": 7,

  // The number of torrents that are queued for downloading.
  "downloading_queued": 2,

  // The number of torrents with an error.
  "error": 0,

  // The number of torrents that have completed downloading (and not seeding)
  "finished": 4,

  // The number of paused torrents.
  "paused": 1,

  "seeding": 91,
  "seeding_queued": 7,
  "total": 991,
  "tags": {
    "lts": 2,
    "racing": 2
  },
  "trackers": {
    "http://some-tracker": 8
  }
}
```
