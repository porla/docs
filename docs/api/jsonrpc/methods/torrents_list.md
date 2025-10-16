# `torrents.list`

Lists torrents in Porla. This method uses pagination in order to support cases
where large amounts of torrents are in the session.

You can (optionally) pass various filters to reduce and filter the result.

## Request

```json
{
  // (Optional) filters to apply to the listing
  "filters": {
    // Only return torrents in this specific category
    "category": "some-category",

    // Only return torrents that match this PQL query
    "query": "ratio > 1.0",

    // Only return torrents in this save path
    "save_path": "/dl",

    // Only return torrents that has this tag
    "tags": "foo"
  },

  // A zero based index of the page to fetch. Defaults to 0.
  "page": 0,

  // Sets how many torrents per page to return. Defaults to 50.
  "page_size": 100,

  // Which field to order torrents by. Supports the following fields,
  // - "name"
  // - "queue_position"
  // - "size"
  // Defaults to "queue_position".
  "order_by": "name",

  // Sets the order_by direction - either "asc" for ascending order, or "desc"
  // for descending order. Defaults to "asc".
  "order_by_dir": "asc"
}
```

## Response

```json
{
  // The page of torrents returned.
  "page": 0,

  // The page size of the result. The number of torrents returned is equal to,
  // or less, than this.
  "page_size": 50,

  // The torrents in this page.
  "torrents": [
    {
      // the number of seconds this torrent has spent in the session and not
      // been paused
      "active_duration": 18,

      // the total rates for all peers for this torrent. These will usually
      // have better precision than summing the rates from all peers. The rates
      // are given as the number of bytes per second.
      "download_rate": 788,
      "upload_rate": 123,

      // the number of seconds this torrent had all _selected_ files and pieces
      // downloaded and available to other peers.
      "finished_duration": 0,

      // reflects several of the torrent's flags
      "flags": 129,

      // the torrents info hash
      "info_hash": [ "", null ],

      // the number of seeds in our peer list and the total number of peers
      // (including seeds). We are not necessarily connected to all the peers
      // in our peer list. This is the number of peers we know of in total,
      // including banned peers and peers that we have failed to connect to.
      "list_peers": 87,
      "list_seeds": 89,

      // the name of the torrent. Typically this is derived from the
      // .torrent file. In case the torrent was started without metadata,
      // and hasn't completely received it yet, it returns the name given
      // to it when added to the session.
      "name": "ubuntu",

      // the number of peers this torrent currently is connected to. Peer
      // connections that are in the half-open state (is attempting to connect)
      // or are queued for later connection attempt do not count. Although they
      // are visible in the peer list
      "num_peers": 898,

      // the number of peers that are seeding that this client is
      // currently connected to.
      "num_seeds": 76,

      // a value in the range [0, 1], that represents the progress of the
      // torrent's current task. It may be checking files or downloading.
      "progress": 0.54487,

      // the position this torrent has in the download queue. If the torrent is
      // a seed or finished, this is -1.
      "queue_position": 9,

      // the current ratio of the torrent. this is calculated by doing
      // all_time_upload / all_time_download
      "ratio": 0.543,

      // the path to the directory where this torrent's files are stored.
      "save_path": "/dl/my-stuff",

      // the number of seconds this torrent had _all_ files and pieces downloaded
      // and available to other peers.
      "seeding_duration": 67,

      // the total number of bytes the torrent-file represents. Note that this
      // is the number of pieces times the piece size (modulo the last piece
      // possibly being smaller). With pad files, the total size will be larger
      // than the sum of all (regular) file sizes.
      "size": 87677,

      // the total number of bytes to download for this torrent. This may be
      // less than the size of the torrent in case there are pad files. This
      // number only counts bytes that will actually be requested from peers.
      "total": 887,

      // the total number of bytes of the file(s) that we have. All this does
      // not necessarily has to be downloaded during this session (that's
      // ``total_payload_download``).
      "total_done": 766,
    }
  ],

  // Total amount of torrents filtered
  "torrents_total": 1800,

  // The total amount of torrents in the session, regardless of filters
  "torrents_total_unfiltered": 45007
}
```
