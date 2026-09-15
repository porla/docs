# `porla_http_server`

Exposes methods to interact with the embedded HTTP server in Porla.

Plugins can use this to register their own route handlers. Used by the
[metrics plugin](https://github.com/porla-plugins/metrics) to add a `/metrics`
endpoint for Prometheus compatible metrics.

## Exports

### <code>get(path: string, callback: [PoHttpServerCallback](../types/pohttpservercallback.md)): void</code>

<Since>v1.0</Since>

Registers a callback handler for a HTTP GET request at the given path.

#### Example

```lua
local http_server = require("porla_http_server")

http_server.get("/hello", function(req, res)
    res:finish("Hello!")
end)
```
