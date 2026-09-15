# `PoHttpServerResponse`

The HTTP server response.

## Methods

### `finish(): void`

<Since>v1.0</Since>

Finishes the HTTP response.

### `finish(data: string): void`

<Since>v1.0</Since>

Finishes the HTTP response with the given data as body.

### `write(data: string): void`

<Since>v1.0</Since>

Writes `data` to the HTTP response body.

### `writeStatus(status: string): void`

<Since>v1.0</Since>

Writes `status` as the HTTP status for the response.

#### Example

```lua
res:writeStatus("200 OK")
```
