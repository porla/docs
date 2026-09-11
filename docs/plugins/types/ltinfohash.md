# `LtInfoHash`

Represents an info hash (either v1, v2 or hybrid). Info hashes are used in many
places to find torrents, etc.

## Constructors

### `LtInfoHash(hex: string)`

<Since>v1.0</Since>

Constructs an info hash from a hex string. Depending on the length, a v1 or v2
info hash is built.

### `LtInfoHash(hex_v1: string, hex_v2: string)`

<Since>v1.0</Since>

Constructs an info hash from both a v1 and v2 hex string. This results in a
a hybrid info hash.

## Examples

```lua
local hash = LtInfoHash("176de2e6724976a38d51d0a34d3c0503a2305e63")
```