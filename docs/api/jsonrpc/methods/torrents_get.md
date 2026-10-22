# `torrents.get`

Gets the information of a single torrent.

## Request

### Example

```json
{
  "info_hash": ["abcdef0123456789abcd", null],

  // Optional session ID. If not specified, will look in the session
  // named 'default'.
  "session_id": 7
}
```

## Response

```json
{
  "torrent": {
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
}
```
