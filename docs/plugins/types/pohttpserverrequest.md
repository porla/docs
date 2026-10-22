# `PoHttpServerRequest`

An incoming HTTP server request.

## Properties

### `body: string | nil`

<Since>v0.42.0</Since>

Set only for non-form content types.

### `form: {kind = "urlencoded" | "multipart", ok, fields, files, body?}`

### `headers: table[string]string`

<Since>v0.42.0</Since>

A table of key-value pairs representing the incoming HTTP headers.

### `method: string`

<Since>v0.42.0</Since>

Lower-case HTTP method.

### `path: string`

<Since>v0.42.0</Since>

Path without the query.

### `query: string`

<Since>v0.42.0</Since>

The raw query string without `?`.

### `url: string`

<Since>v0.42.0</Since>

Same as `path`.
