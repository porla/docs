# `PoHttpClientRequestOptions`

## Properties

### `method: string`

Defaults to `GET`. Uppercased; must be an HTTP token.

### `body: string`

### `headers: table<string, string>`

Names must be HTTP tokens and values can't contain CR, LF or NUL. An empty
value removes a header cURL would send by default (such as `Accept`).

### `timeout: number`

Defaults to 30 (seconds); 0 means none.

### `connect_timeout: number`

Defaults to 10 (seconds); 0 means none.

### `follow_redirects: boolean`

Defaults to true.

### `max_redirects: number`

Defaults to 10; -1 means unlimited.
