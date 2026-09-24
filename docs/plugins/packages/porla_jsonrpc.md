# `porla_jsonrpc`

Allows plugins to register JSONRPC methods.

:::info
A plugin cannot register a method that is already registered - i.e replacing
an existing method.
:::

## Exports

### `register(method: string, callback: function): void`

<Since>v1.0</Since>

Registers a method with the name `method`.

#### Example

```lua
local jsonrpc = require("porla_jsonrpc")

jsonrpc.register("custom.method", function(params, res)
    print(params.name)

    res:ok({
        hello = "world"
    })
end)
```
