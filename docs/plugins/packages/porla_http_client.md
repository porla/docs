# `porla_http_client`

Allows plugins to make asynchronous HTTP requests. It wraps cURL with support
for `http` and `https` only, also when following redirects.

Response bodies are limited to 8 MiB (`HEAD` requests aren't).

## Exports

### <code>request(url: string, callback: [PoHttpClientCallback](../types/pohttpclientcallback.md)): void</code>

<Since>v0.42.0</Since>

Makes a HTTP GET request to the `url` given.

#### Example

```lua
local http_client = require("porla_http_client")

http_client.request("https://porla.org", function(err, res)
    if err then
        print("Request failed", err)
        return
    end

    print(res.status)
end)
```

### <code>request(url: string, options: [PoHttpClientRequestOptions](../types/pohttpclientrequestoptions.md), callback: [PoHttpClientCallback](../types/pohttpclientcallback.md)): void</code>

<Since>v0.42.0</Since>

<Changed in="v0.54.0">The callback comes last; it was `request(url, callback, options)`.</Changed>

Makes any type of HTTP request to the `url` given. Use `options` to customize the request.

Raises `invalid_params` for a bad method, a negative timeout, a missing
callback, or a header that isn't a string, whose name isn't a valid HTTP token,
or whose value contains a line break (CR, LF) or NUL. The callback never runs
before `request` returns.

<Changed in="v0.55.0">Header names and values are validated, and a missing callback raises.</Changed>

#### Example

Send a HTTP POST to some URL.

```lua
local http_client = require("porla_http_client")

http_client.request("http://some-url", {
    body    = "{}",
    method  = "POST",
    headers = {
        ["Content-Type"] = "application/json"
    }
}, function(err, res)
    -- do stuff with the response
end)
```
