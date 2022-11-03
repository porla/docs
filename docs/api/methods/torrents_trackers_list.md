# `torrents.trackers.list`

Lists trackers for a torrent in Porla.

## Request

```json
{ "info_hash": [ "abcdef0123456789abcd", null ] }
```

## Response

```json
{
  "trackers": [
    {
      // each local listen socket (endpoint) will announce to the tracker. This
      // list contains state per endpoint.
      "endpoints": [
        {
          // set to false to not announce from this endpoint
          "enabled": true,

          // torrents can be announced using multiple info hashes for different
          // protocol versions
          // info_hashes[0] is the v1 info hash (SHA1)
          // info_hashes[1] is the v2 info hash (truncated SHA-256)
          "info_hashes": [
            {
              // set to true when we send a event=completed.
              "complete_sent": true,

              // the number of times in a row we have failed to announce to
              // this tracker.
              "fails": 0,

              // if this tracker failed the last time it was contacted this
              // error code specifies what error occurred
              "last_error": null,

              // if this tracker has returned an error or warning message that
              // message is stored here
              "message": "",

              // no announces before this time
              "min_announce": 123,

              // the time of next tracker announce
              "next_announce": 12354,

              // if this tracker has returned scrape data, these fields are
              // filled in with valid numbers. Otherwise they are set to -1.
              // ``complete`` counts the number of current peers completed the download, or "seeds".
              // ``downloaded`` is the cumulative number of completed downloads.
              // ``incomplete`` counts the number of current downloaders.
              "scrape_complete": 23,
              "scrape_downloaded": 98,
              "scrape_incomplete": 74,

              // set to true when we get a valid response from an announce
              // with event=started. If it is set, we won't send start in the
              // subsequent announces.
              "start_sent": true,

              // true while we're waiting for a response from the tracker.
              "updating": false
            }
          ],

          // the local endpoint of the listen interface associated with this endpoint
          "local_endpoint": [ "127.0.0.1", 9878 ]
        }
      ],

      // the max number of failures to announce to this tracker in a row,
      // before this tracker is not used anymore. 0 means unlimited
      "fail_limit": 5,

      // a bitmask specifying which sources we got this tracker from.
      // ``source_torrent`` = 1, the tracker was part of the .torrent file
      // ``source_client`` = 2, the tracker was added programmatically via the add_tracker() function
      // ``source_magnet_link`` = 4, the tracker was part of a magnet link
      // ``source_tex`` = 8, the tracker was received from the swarm via tracker exchange
      "source": 1,

      // the tier this tracker belongs to
      "tier": 0,

      // the current ``&trackerid=`` argument passed to the tracker. this is
      // optional and is normally empty (in which case no trackerid is sent).
      "trackerid": "",

      // tracker URL as it appeared in the torrent file
      "url": "https://example.com/announce",

      // set to true the first time we receive a valid response from this tracker.
      "verified": false
    }
  ]
}
```
