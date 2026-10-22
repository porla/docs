# `porla_crypto`

Wraps [libsodium](https://libsodium.gitbook.io/doc) and provides various
cryptographic operations.

## Exports

### `auth(input: string, key: string): string`

<Since>v0.44.0</Since>

Returns a 32-byte HMAC-SHA512-256.

#### Raises

 - `invalid key size` if the key is not exactly 32 bytes.

### `auth_keygen(): string`

<Since>v0.44.0</Since>

Generates a key that is suitable for `auth` and `auth_verify`.

### `auth_verify(mac: string, input: string, key: string): boolean`

<Since>v0.44.0</Since>

#### Raises

 - `invalid key size`
 - `invalid mac size`

### `hash(input: string): string`

<Since>v0.44.0</Since>

Hashes `input` and returns a 32-byte BLAKE2b hash.

### `hash(input: string, key: string): string`

<Since>v0.44.0</Since>

Hashes `input` and returns a 32-byte BLAKE2b hash, or `nil` if the key is
longer than 64 bytes.

### `hash_init(key: string): SoHashState | nil`

<Since>v0.44.0</Since>

### `memcmp(a: string, b: string): boolean`

<Since>v0.44.0</Since>

Compares two string in constant time. Use this to avoid leaking information
when comparing secrets such as hashes, etc.

Returns false when lengths differ.

### `pwhash(input: string, callback: function): void`

<Since>v0.44.0</Since>

Derives a password hash from `input`. The result is passed to the callback.

#### Example

```lua
local crypto = require("porla_crypto")

crypto.pwhash("hunter2", function(err, hash)
    if err then
        -- failed to hash password
        return
    end
    print("hash", hash)
end)
```

### `pwhash_verify(hash: string, input: string, callback: function): void`

<Since>v0.44.0</Since>

Verifies `input` against a hash produced by [`pwhash`](#pwhashinput-string-callback-function-void).

#### Example

```lua
crypto.pwhash_verify("stored hash", "user input", function(err, ok)
    if not ok then
        return
    return

    -- password hash verified
end)
```

### `randombytes(n: number): string`

<Since>v0.44.0</Since>

Returns `n` number of random bytes in a binary string.

Accepts `n` 0-4096.

#### Raises

 - `size must be non-negative`
 - `size exceeds maximum of 4096 bytes`

### `randombytes_uniform(n: number): number`

<Since>v0.44.0</Since>

Returns a uniformly distributed random integer in the range _[0, n)_.

#### Raises

 - `upper_bound must be positive`
 - `upper_bound too large`

### `secretbox(message: string, key: string): string`

<Since>v0.44.0</Since>

Encrypts and authenticates `message` with the given key and returns the result
as a binary string.

Key must be exactly 32 bytes.

### `secretbox_keygen(): string`

<Since>v0.44.0</Since>

Generates a random secret key suitable for use with [`secretbox`](#secretboxmessage-string-key-string-string)
and [`secretbox_open`](#secretbox_openbox-string-key-string-string--nil).

### `secretbox_open(box: string, key: string): string | nil`

<Since>v0.44.0</Since>

Verifies and decrypts `box` with the given `key`. Returns the original message,
or `nil` if the input is too short, has the wrong version or key, or has been
tampered with.
