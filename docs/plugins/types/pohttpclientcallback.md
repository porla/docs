# `PoHttpClientCallback`

A callback for the HTTP client request. Check `err` before reading the
response. `err` is an `http_error` (with `category = "curl"`) when the request
failed, also for a body over 8 MiB. HTTP status codes are not errors.

### <code>(err: [PoError](./poerror.md) | nil, response: [PoHttpClientResponse](./pohttpclientresponse.md) | nil): void</code>
