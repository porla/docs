# `LtAnnounceEndpoint`

## Properties

### `enabled: boolean`

<Since>v0.42.0</Since>

### <code>info_hashes: [LtAnnounceInfohash](./ltannounceinfohash.md)[]</code>

<Since>v0.42.0</Since>

### `local_endpoint: [string, number]`

<Since>v0.42.0</Since>

<Changed in="v0.51.1">

Returns a table, `[1]` is the IP address and `[2]` the
port. Before, it returned only the IP address as a string.

</Changed>

Returns a table representing the local endpoint. Index 1 is the IP address,
index 2 is the port.

#### Example

```lua
local ip, port = ep.local_endpoint[1], ep.local_endpoint[2]
```
