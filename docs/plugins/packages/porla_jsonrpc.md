# `porla_jsonrpc`

Allows plugins to register JSONRPC methods.

:::info
A plugin cannot register a method that is already registered - i.e replacing
an existing method.
:::

## Exports

### `register(method: string, callback: function, can_invoke?: function): void`

<Since>v0.46.0</Since>

Registers a method with the name `method`.

Raises `invalid_params` when `callback`, or a given `can_invoke`, isn't a
function.

<Changed in="v0.55.0">A `can_invoke` that isn't a function raises; before, it was ignored and only signed-in users could call the method.</Changed>

#### Example

```lua
local jsonrpc = require("porla_jsonrpc")

local function check_invoke(ctx)
    return ctx.kind == "user"
end

jsonrpc.register("custom.method", function(params, res)
    print(params.name)

    res:ok({
        hello = "world"
    })
end, check_invoke)
```
