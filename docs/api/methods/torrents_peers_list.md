# `torrents.peers.list`

Lists peers of a torrent.

## Request

```json
{ "info_hash": [ "abcdef0123456789abcd", null ] }
```

## Response

```json
{
  "peers": [
    {
      // The number of busy requests in the download queue. A busy request is a
      // request for a block we've also requested from a different peer.
      "busy_requests": 0,

      // A human readable string describing the software at the other end of
      // the connection. In some cases this information is not available, then
      // it will contain a string that may give away something about which
      // software is running in the other end. In the case of a web seed, the
      // server type and version will be a part of this string. This is UTF-8
      // encoded.
      "client": "Transmission 2.94",

      // The kind of connection this peer uses.
      "connection_type": 1,

      // The current upload and download speed we have to and from this peer
      // (including any protocol messages). Updated about once per second.
      "down_speed": 41856,
      "up_speed": 3093,

      // This is the number of requests we have sent to this peer that we
      // haven't got a response for yet.
      "download_queue_length": 25,

      // The time in seconds until all blocks in the request queue will be
      // downloaded.
      "download_queue_time": 0,

      // Tells you in which state the peer is in. It is set to any combination
      // of the peer_flags_t flags.
      "flags": 668689,

      // The IP endpoint to this peer.
      "ip": [ "1.2.3.4", 51415 ],

      // The time in seconds since we last sent a request to this peer and since
      // any transfer occurred with this peer
      "last_active": 0,
      "last_request": 3,

      // The IP and port pair the socket is bound to locally. i.e. the IP address
      // of the interface it's going out over. This may be useful for multi-homed
      // clients with multiple interfaces to the internet.
      "local_endpoint": [ "192.168.1.16", 6881 ],

      // The progress of the peer in the range [0, 1]
      "progress": 1.0,

      // Tn estimated round trip time to this peer, in milliseconds. It is
      // estimated by timing the TCP ``connect()``. It may be 0 for incoming
      // connections.
      "rtt": 336,

      // A combination of flags describing from which sources this peer was
      // received.
      "source": 6,

      // The total number of bytes downloaded from and uploaded to this peer.
      // These numbers do not include the protocol chatter, but only the
      // payload data.
      "total_download": 395821,
      "total_upload": 0
    }
  ]
}
```
