# `lt.info_hash_t`

## Constructors

### `lt.info_hash_t(hex: string)`

Creates an info hash from a hex-encoded string. Accepts a 40-character hex
string for v1 (SHA-1) or a 64-character hex string for v2 (SHA-256).

```lua
local info_hash = lt.info_hash_t("aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d")
```

## Properties

### `v1: string?`

The v1 (SHA-1) info hash as a hex string, or `nil` if not present.

```lua
print(info_hash.v1)
```

### `v2: string?`

The v2 (SHA-256) info hash as a hex string, or `nil` if not present.

```lua
print(info_hash.v2)
```
