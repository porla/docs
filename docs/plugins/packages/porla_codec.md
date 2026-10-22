# `porla_codec`

Functions for encoding and decoding data in various formats.

## Exports

### `base64.decode(data: string, variant?: number): string`

<Since>v0.44.0</Since>

`variant` can be specified with;

 - `base64.VARIANT_ORIGINAL` (default)
 - `base64.VARIANT_ORIGINAL_NO_PADDING`
 - `base64.VARIANT_URLSAFE`
 - `base64.VARIANT_URLSAFE_NO_PADDING`

Decodes the given base64 encoded data.

### `base64.encode(data: string, variant?: number): string`

<Since>v0.44.0</Since>

Encodes the given data to base64.

### `json.decode(data: string): value | nil , err`

<Since>v0.44.0</Since>

Decodes the given JSON value and returns a Lua object. A null value in JSON
will be returned as `json.null` which is the same value as the global
`porla.null`. It's a lightuserdata and _truthy_, so compare with
`== json.null`.

Use `json.array(tbl?)` to mark a Lua table as an array.

### `json.encode(obj: object): string`

<Since>v0.44.0</Since>

Encodes the given Lua object to a JSON string.

### `hex.decode(data: string): string`

<Since>v0.44.0</Since>

Decodes the given data as hex string and returns the binary representation.

### `hex.encode(data: string): string`

<Since>v0.44.0</Since>

Takes binary data and returns a hex representation.
