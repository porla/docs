# `torrents.peers.add`

Adds one or more peers to a torrent.

## Request

```json
{
  // The info hash of the torrent.
  "info_hash": [ "abcdef0123456789abcd", null ],

  // An array if IP/port pairs to add as peers.
  "peers": [
    [ "192.168.0.5", 6881 ],
    [ "192.168.0.8", 6881 ]
  ]
}
```

## Response

```json
true
```
