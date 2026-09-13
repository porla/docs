# `PoHttpServerResponse`

The HTTP server response.

## Methods

### `finish(): void`

Finishes the HTTP response.

### `finish(data: string): void`

Finishes the HTTP response with the given data as body.

### `write(data: string): void`

Writes `data` to the HTTP response body.

### `writeStatus(status: string): void`

Writes `status` as the HTTP status for the response.

#### Example

```lua
res:writeStatus("200 OK")
```
