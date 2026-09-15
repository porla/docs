# `PoTcpClient`

Represents a TCP client.

## Methods

### `close(): void`

<Since>v1.0</Since>

Closes the socket.

### `connect(host: string, port: number, callback: function): void`

<Since>v1.0</Since>

Connects to the specified host and port. If an error occurs, the callback will
be passed an error as the first argument.

#### Example

```lua
client:connect("non-existent-domain", 9999, function(err)
    if err then
        print("Failed to connect: {}", err)
    end
end)
```

### `read(callback: function): void`

<Since>v1.0</Since>

Reads any available data.

#### Example

```lua
client:read(function(err, data)
    if err then
        print("Error when reading: {}", err)
        return
    end

    print("Received data: {}", data)
end)
```

### `read_exactly(n: number, callback: function): void`

<Since>v1.0</Since>

Reads exactly _n_ number of bytes from the connection.

#### Example

```lua
client:read_exactly(4, function(err, data)
    if err then
        print("Error when reading: {}", err)
        return
    end

    print("Read 4 bytes: {}", data)
end)
```

### `tls(callback: function): void`

<Since>v1.0</Since>

Begins a TLS handshake.

#### Example

```lua
client:tls(function(err)
    if err then
        print("Failed to perform TLS handshake")
        return
    end

    -- connection is now secure
end)
```
