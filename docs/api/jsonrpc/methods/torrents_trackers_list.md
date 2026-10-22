# `torrents.trackers.list`

Lists trackers for a torrent in Porla.

## Request

- `info_hash` - the info hash of the torrent to list trackers from.
- `session_id` _(optional)_ - the session ID where the torrent exists. If no
  session ID is specified, the default session will be used.

```json
{
  "info_hash": ["abcdef0123456789abcd", null],
  "session_id": 19
}
```

## Response

```json
{
  "trackers": [
    {
      "url": "https://torrent.ubuntu.com/announce",
      "tier": 0,
      "source": ["torrent"],
      "trackerid": "",
      "fail_limit": 0,
      "verified": false,
      "endpoints": [
        {
          "enabled": true,
          "local_endpoint": ["127.0.0.1", 16881],
          "info_hashes": [
            {
              "complete_sent": false,
              "fails": 0,
              "last_error": null,
              "message": "",
              "min_announce": 1792662433,
              "next_announce": 1792662433,
              "scrape_complete": -1,
              "scrape_downloaded": -1,
              "scrape_incomplete": -1,
              "start_sent": false,
              "updating": true
            },
            {
              "complete_sent": false,
              "fails": 0,
              "last_error": null,
              "message": "",
              "min_announce": -2147483648,
              "next_announce": -2147483648,
              "scrape_complete": -1,
              "scrape_downloaded": -1,
              "scrape_incomplete": -1,
              "start_sent": false,
              "updating": false
            }
          ]
        }
      ]
    },
    {
      "url": "udp://tracker.opentrackr.org:1337/announce",
      "tier": 1,
      "source": ["client"],
      "trackerid": "",
      "fail_limit": 0,
      "verified": false,
      "endpoints": []
    }
  ]
}
```

## Errors

| Code | Reason                        |
| ---- | ----------------------------- |
| -1   | Session not found.            |
| -2   | Torrent not found in session. |
| -3   | Torrent is not valid.         |
