# `torrents.list`

Lists torrents in Porla. This method uses pagination in order to support cases
where large amounts of torrents are in the session.

You can (optionally) pass various filters to reduce and filter the result.

:::info

Using the `session_id` filter is recommended. It will reduce the iteration of
torrents to only the specified session.

:::

## Request

### Filters

All filters are sent in the `filters` object.

#### `category`

The name of a category. Use [`torrents.count`](./torrents_count.md) to
list all available categories.

#### `query`

A [PQL](../../../concepts/pql.md) query.

#### `save_path`

Filter any torrents not in this save path.

#### `session_id`

The ID of a session.

#### `tags`

The name of a tag. Use [`torrents.count`](./torrents_count.md) to list
all available tags.

### Paging

The method supports paging to iterate through large results. The default page
size is _50_ - meaning if you do not supply paging information you will get the
first 50 torrents.

Use the `torrents_total` field in the response along with the `page_size` to
calculate the number of pages, then use the `page` index to iterate through
each page.

#### `page`

The page index.

#### `page_size`

The number of results to return for each page.

### Sorting

#### `order_by`

Which field to sort the torrents list by. The following is a list of valid
values.

 * `download_rate`
 * `eta`
 * `list_peers`
 * `list_seeds`
 * `name`
 * `num_peers`
 * `num_seeds`
 * `progress`
 * `queue_position`
 * `ratio`
 * `save_path`
 * `size`
 * `total`
 * `total_done`
 * `upload_rate`

#### `order_by_dir`

Set to either `asc` or `desc` to sort the torrents ascending or descending.

### Example

This request uses a `query` filter to return all torrents that have a ratio
of more than 1.0.

```json
{
  "filters": {
    "query": "ratio > 1.0",
  },

  "page": 0,
  "page_size": 100,

  "order_by": "ratio",
  "order_by_dir": "desc"
}
```

## Response

```json
{
  // The page of torrents returned.
  "page": 0,

  // The page size of the result. The number of torrents returned is equal to,
  // or less than, this.
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

  // The total amount of torrents in all session, regardless of filters
  "torrents_total_unfiltered": 45007
}
```
