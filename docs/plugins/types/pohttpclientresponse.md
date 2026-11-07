# `PoHttpClientResponse`

## Properties

### `status: number`

The HTTP status code

### `body: string`

The response body.

### `headers: table<string, string>`

<Since>v0.54.0</Since>

The final response's headers, with lowercase names. A repeated header's values
are joined with `", "`.

### `redirects: number`

<Since>v0.54.0</Since>

The number of redirects followed.

### `time: number`

<Since>v0.54.0</Since>

Total time in seconds.

### `url: string`

<Since>v0.54.0</Since>

The effective URL, after redirects.
