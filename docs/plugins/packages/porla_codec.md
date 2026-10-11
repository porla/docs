# `porla_codec`

Functions for encoding and decoding data in various formats.

## Exports

### `base64.decode(data: string): string`

<Since>v0.44.0</Since>

Decodes the given base64 encoded data.

### `base64.encode(data: string): string`

<Since>v0.44.0</Since>

Encodes the given data to base64.

### `json.decode(data: string): value, err`

<Since>v0.44.0</Since>

Decodes the given JSON value and returns a Lua object.

### `json.encode(obj: object): string`

<Since>v0.44.0</Since>

Encodes the given Lua object to a JSON string.

### `hex.decode(data: string): string`

<Since>v0.44.0</Since>

Decodes the given data as hex string and returns the binary representation.

### `hex.encode(data: string): string`

<Since>v0.44.0</Since>

Takes binary data and returns a hex representation.
