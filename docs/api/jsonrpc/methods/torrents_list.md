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

The a list of tags. Use [`torrents.count`](./torrents_count.md) to list
all available tags. All specified tags must match.

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

- `download_rate`
- `eta`
- `list_peers`
- `list_seeds`
- `name`
- `num_peers`
- `num_seeds`
- `progress`
- `queue_position`
- `ratio`
- `save_path`
- `total`
- `total_done`
- `upload_rate`

#### `order_by_dir`

Set to either `asc` or `desc` to sort the torrents ascending or descending.

### Example

This request uses a `query` filter to return all torrents that have a ratio
of more than 1.0.

```json
{
  "filters": { "category": "linux" },
  "page": 0,
  "page_size": 20,
  "order_by": "name",
  "order_by_dir": "asc"
}
```

## Response

```json
{
  // The page of torrents returned.
  "page": 0,

  // The page size of the result. The number of torrents returned is equal to,
  // or less than, this.
  "page_size": 20,

  // The torrents in this page.
  "torrents": [
    {
      "$userdata": {
        "category": "linux",
        "completed_at": 1792661187,
        "metadata": {
          "source": "rss"
        },
        "tags": ["iso", "ubuntu"]
      },
      "active_duration": 864000,
      "added_time": 1792661186,
      "all_time_download": 6203355136,
      "all_time_upload": 18610065408,
      "announcing_to_dht": true,
      "announcing_to_lsd": true,
      "announcing_to_trackers": true,
      "block_size": 16384,
      "completed_time": 1792661187,
      "connect_candidates": 12,
      "connections_limit": -1,
      "current_tracker": "https://torrent.ubuntu.com/announce",
      "distributed_copies": -1.0,
      "down_bandwidth_queue": 0,
      "download_payload_rate": 0,
      "download_rate": 412,
      "errc": null,
      "finished_duration": 863400,
      "flags": ["apply_ip_filter", "auto_managed"],
      "has_incoming": true,
      "has_metadata": true,
      "info_hash": ["e96c5e5dd636ff9ea8e504ab31ad6bf0df7e7af5", null],
      "is_finished": true,
      "is_seeding": true,
      "last_download": -1,
      "last_seen_complete": 1793525100,
      "last_upload": 4,
      "list_peers": 48,
      "list_seeds": 31,
      "moving_storage": false,
      "name": "ubuntu-24.04.1-desktop-amd64.iso",
      "need_save_resume_data": ["if_counters_changed"],
      "next_announce": 1712,
      "num_complete": 1874,
      "num_connections": 6,
      "num_incomplete": 52,
      "num_peers": 6,
      "num_pieces": 1479,
      "num_seeds": 0,
      "num_uploads": 4,
      "progress": 1.0,
      "queue_position": -1,
      "ratio": 3.0,
      "ratio_real": 3.0,
      "save_path": "/downloads/linux",
      "seed_rank": 805306371,
      "seeding_duration": 863400,
      "state": "seeding",
      "storage_mode": "sparse",
      "total": 6203355136,
      "total_done": 6203355136,
      "total_download": 98304,
      "total_failed_bytes": 0,
      "total_payload_download": 0,
      "total_payload_upload": 1048576000,
      "total_redundant_bytes": 0,
      "total_upload": 1052770304,
      "total_wanted": 6203355136,
      "total_wanted_done": 6203355136,
      "up_bandwidth_queue": 0,
      "upload_payload_rate": 524288,
      "upload_rate": 530112,
      "uploads_limit": -1
    }
  ],

  // Total amount of torrents filtered
  "torrents_total": 1,

  // The total amount of torrents in all session, regardless of filters
  "torrents_total_unfiltered": 2
}
```
