# `torrents.query`

The `torrents.query` method allows you to query torrents in Porla. It takes an
SQL query and returns the results. The query is run against the the actual
torrent list in-memory and uses SQLite virtual tables to achieve this.

## Request

```json
{
  // An SQL query against the virtual 'torrents' table. See below for all
  // available columns.
  "query": "select name,progress from torrents order by progress desc"
}
```

### Available columns

 * `info_hash_v1`
 * `info_hash_v2`
 * `errc_value`
 * `save_path`
 * `name`
 * `next_announce`
 * `current_tracker`
 * `total_download`
 * `total_upload`
 * `total_payload_download`
 * `total_payload_upload`
 * `total_failed_bytes`
 * `total_redundant_bytes`
 * `total_done`
 * `total`
 * `total_wanted_done`
 * `total_wanted`
 * `all_time_upload`
 * `all_time_download`
 * `added_time`
 * `completed_time`
 * `last_seen_complete`
 * `progress`
 * `queue_position`
 * `download_rate`
 * `upload_rate`
 * `download_payload_rate`
 * `upload_payload_rate`
 * `num_seeds`
 * `num_peers`
 * `num_complete`
 * `list_seeds`
 * `list_peers`
 * `connect_candidates`
 * `num_pieces`
 * `block_size`
 * `num_uploads`
 * `num_connections`
 * `uploads_limit`
 * `connections_limit`
 * `up_bandwidth_queue`
 * `down_bandwidth_queue`
 * `seed_rank`
 * `need_save_resume`
 * `is_seeding`
 * `is_finished`
 * `has_metadata`
 * `has_incoming`
 * `moving_storage`
 * `announcing_to_trackers`
 * `announcing_to_lsd`
 * `announcing_to_dht`
 * `last_upload`
 * `last_download`
 * `active_duration`
 * `finished_duration`
 * `seeding_duration`

## Response

```json
{
  // The results are dynamic and depends on what columns you select in the
  // query. It will, however, always be an array.
  "results": [
    {
      "name": "some-name",
      "progress": 0.8789
    }
  ]
}
```
