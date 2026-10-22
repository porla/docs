# `torrents.peers.list`

Lists peers of a torrent.

## Request

```json
{
  "info_hash": ["abcdef0123456789abcd", null],

  // Optional session ID.
  "session_id": 9
}
```

## Response

```json
{
  "peers": [
    {
      "busy_requests": 0,
      "client": "porla/0.0.0 libtorrent/2.1.2.0",
      "connection_type": "standard_bittorrent",
      "down_speed": 262745,
      "download_queue_length": 192,
      "download_queue_time": 0,
      "flags": [
        "plaintext_encrypted",
        "utp_socket",
        "upload_only",
        "seed",
        "outgoing_connection",
        "supports_extensions",
        "choked",
        "interesting"
      ],
      "last_active": 0,
      "last_request": 0,
      "local_endpoint": ["127.0.0.1", 16881],
      "remote_endpoint": ["127.0.0.1", 16882],
      "progress": 1.0,
      "rtt": 14,
      "source": [],
      "total_download": 1605002,
      "total_upload": 0,
      "up_speed": 7898
    }
  ]
}
```
