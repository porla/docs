# `PoHttpServerResponse`

The HTTP server response. Every method is a no-op once the response is
finished or the client has disconnected.

## Methods

### `finish(): void`

<Since>v0.42.0</Since>

Finishes the HTTP response.

### `finish(data: string): void`

<Since>v0.42.0</Since>

Finishes the HTTP response with the given data as body. Without a prior
`write`, `data` is sent with a `Content-Length`.

### `write(data: string): void`

<Since>v0.42.0</Since>

Writes `data` to the HTTP response body (chunked transfer encoding). Call
`finish` when done.

### `write_header(key: string, value: string): void`

<Since>v0.42.0</Since>

<Changed in="v0.54.0">Renamed from `writeHeader`.</Changed>

<Changed in="v0.55.0">Raises for an invalid name or a value with a line break.</Changed>

Writes a response header. Sends `200 OK` first unless `write_status` was
called. Raises `invalid_params` when `key` isn't a valid HTTP token or `value`
contains CR, LF or NUL, so a value taken from the request can't add headers of
its own.

### `write_status(status: string): void`

<Since>v0.42.0</Since>

<Changed in="v0.54.0">Renamed from `writeStatus`.</Changed>

<Changed in="v0.55.0">Raises for an invalid status.</Changed>

Writes `status` as the HTTP status for the response. Must come before
`write_header` and `write`; only the first call counts. Raises `invalid_params`
unless `status` is a code from 100 to 599, optionally followed by a space and a
reason without CR, LF or NUL.

#### Example

```lua
res:write_status("404 Not Found")
```
