# `porla_crypto`

Wraps [libsodium](https://libsodium.gitbook.io/doc) and provides various
cryptographic operations.

## Exports

### `auth(input: string, key: string): string`

### `auth_keygen(): string`

### `auth_verify(mac: string, input: string, key: string): boolean`

### `hash(input: string): string`

### `hash(input: string, key: string): string`

### `hash_init(key: string): PoHashState`

### `memcmp(a: string, b: string) boolean`

### `pwhash(input: string, callback: function): void`

### `pwhash_verify(hash: string, input: string, callback: function): void`

### `randombytes(n: number): string`

### `randombytes_uniform(n: number): number`

### `secretbox(message: string, key: string): string`

### `secretbox_keygen(): string`

### `secretbox_open(box: string, key: string): string | nil`
