# `porla_sockets`

Allows plugins to work with sockets.

## Exports

### <code>tcp_client(): [PoTcpClient](../types/potcpclient.md)</code>

Constructs a new TCP client that can be used to talk TCP.

#### Example

```lua
local sockets = require("porla_sockets")

local client = sockets.tcp_client()

client:connect("irc.libera.chat", 6697, function(err)
    if err then
        print("Failed to connect to irc.libera.chat: {}", err)
        return
    end

    client:tls(function(err)
        if err then
            print("Failed to upgrade connection to TLS: {}", err)
            return
        end

        -- begin read
    end)
end)
```
