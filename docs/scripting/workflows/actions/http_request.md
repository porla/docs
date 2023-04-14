# `HttpRequest`

The `HttpRequest` action makes a HTTP(S) request to a user-specified URL. A user
can set headers, method and body.

## Inputs

 * `url` - a string (or function taking a `context` parameter) to the endpoint
   Porla should make the HTTP request.
 * `headers` - _(optional)_ a Lua table of string keys and values that sets
   the HTTP request headers.
 * `method` - _(optional)_ a string (or function taking a `context` parameter)
   with the HTTP method to use.
 * `body` - _(optional)_ a string (or function taking a `context` parameter)
   with the HTTP request body.

## Outputs

 * `content` - the HTTP response body.
 * `status_code` - the HTTP response status code.

## Usage

```lua
local HttpRequest = require "porla.actions.HttpRequest"
```

### Example

```lua
HttpRequest:new{
  url = "https://some-where.example.com/v1/thing"
  headers = {
    ["Content-Type"] = "application/json",
    ["X-API-Key"] = "<some API key>"
  },
  method = "PUT",
  body = "{}"
}
```
