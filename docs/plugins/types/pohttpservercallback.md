# `PoHttpServerCallback`

### <code>(request: [PoHttpServerRequest](./pohttpserverrequest.md), response: [PoHttpServerResponse](./pohttpserverresponse.md)): void</code>

<Since>v1.0</Since>

#### Example

```lua
function(req, res)
    print(req.path)

    res:writeStatus("200 OK")
    res:finish()
end
```
