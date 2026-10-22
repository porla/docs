# `PoHttpServerCallback`

### <code>(request: [PoHttpServerRequest](./pohttpserverrequest.md), response: [PoHttpServerResponse](./pohttpserverresponse.md)): void</code>

A callback that raises gives a 500 if nothing has been written; otherwise, the
connection is closed.

<Since>v0.42.0</Since>

#### Example

```lua
function(req, res)
    print(req.path)

    res:writeStatus("200 OK")
    res:finish()
end
```
