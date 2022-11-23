---
sidebar_position: 1
---

# Auth

The Porla API is protected with JWT bearer tokens. To call either the events
API or JSONRPC API, you need to issue one.

:::info
Before issuing tokens, make sure you have set a `secret_key`. Otherwise all
tokens will become invalid when Porla restarts.
:::

## Issuing a token

To issue a token, run Porla with the `auth:token` command.

```sh
porla auth:token
```

This will print a JWT token to stdout with _no expiry_. Make sure to protect
the token and only pass it to applications you trust. In a future update, Porla
will add support for expiry and permissions.

## Using tokens

After you have issued a JWT, accessing the API is easy. Pass it in the
`Authorization` as `Bearer <token>`.

```sh
http -A bearer -a $TOKEN :1337/api/v1/jsonrpc "method=sys.versions" "params="
```
