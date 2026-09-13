# `porla_http_client`

Allows plugins to make asynchronous HTTP requests.

## Exports

### <code>request(url: string, callback: PoHttpClientRequestCallback): void</code>

<Since>v1.0</Since>

Makes a HTTP GET request to the `url` given.

#### Example

```lua
local http_client = require("porla_http_client")

http_client.request("https://porla.org", function(res)
    print(res.status)
end)
```

### <code>request(url: string, callback: PoHttpClientCallback, options: PoHttpClientRequestOptions): void</code>

<Since>v1.0</Since>

Makes any type of HTTP request to the `url` given. Use `options` to customize the request.

#### Example

Send a HTTP POST to some URL.

```lua
local http_client = require("porla_http_client")

local callback = function(res)
    -- do stuff with the response
end

http_client.request("http://some-url", callback, {
    body    = "{}",
    method  = "POST",
    headers = {
        "X-Foo" = "bar"
    }
})
```