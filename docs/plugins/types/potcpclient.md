# `PoTcpClient`

Represents a TCP client.

## Methods

### `connect(host: string, port: number, callback: function): void`

Connects to the specified host and port.

### `read(callback: function): void`

Reads any available data.

### `read_n(n: number, callback: function): void`

Reads _n_ number of bytes from the connection.

### `tls(callback: function): void`

Begins a TLS handshake.
