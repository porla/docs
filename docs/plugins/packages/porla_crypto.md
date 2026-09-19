# `porla_crypto`

Wraps [libsodium](https://libsodium.gitbook.io/doc) and provides various
cryptographic operations.

## Exports

### `auth(input: string, key: string): string`

### `auth_keygen(): string`

Generates a key that is suitable for `auth` and `auth_verify`.

### `auth_verify(mac: string, input: string, key: string): boolean`

### `hash(input: string): string`

Hashes `input` and returns the hash as a binary string.

### `hash(input: string, key: string): string`

Returns a keyed hash of `input`.

### `hash_init(key: string): PoHashState`

### `memcmp(a: string, b: string) boolean`

Compares two string in constant time. Use this to avoid leaking information
when comparing secrets such as hashes, etc.

### `pwhash(input: string, callback: function): void`

Derives a password hash from `input`. The result is passedt to the callback.

#### Example

```lua
local crypto = require("porla_crypto")

crypto.pwhash("hunter2", function(err, hash)
    print("hash: {}", hash)
end)
```

### `pwhash_verify(hash: string, input: string, callback: function): void`

Verifies `input` against a hash produced by [`pwhash`](#pwhashinput-string-callback-function-void).

### `randombytes(n: number): string`

Returns `n` number of random bytes in a binary string.

### `randombytes_uniform(n: number): number`

Returns a uniformly distributed random integer in the range _[0, n)_.

### `secretbox(message: string, key: string): string`

Encrypts and authenticates `message` with the given key and returns the result
as a binary string.

### `secretbox_keygen(): string`

Generates a random secret key suitable for use with [`secretbox`](#secretboxmessage-string-key-string-string)
and [`secretbox_open`](#secretbox_openbox-string-key-string-string--nil).

### `secretbox_open(box: string, key: string): string | nil`

Verifies and decrypts `box` with the given `key`. Returns the original message,
or `nil` if the key is wrong or the box has been tampered with.
