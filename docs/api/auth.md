---
sidebar_position: 1
---

# Auth

Much of the Porla HTTP API is protected with bearer tokens. They are either
JWTs or simple opaque tokens. JWTs are used for user sessions, and opaque
tokens are used for API keys.

If you want to let other applications access Porla APIs, create API keys for
them.

## Creating an API key

An API key can be created from the settings. It can have an optional expiry
date. The API key token is shown once, and can not be retrieved again since
only a hash of the secret part is stored in the database.

:::info
The token will look like `porla_7e729d8818b337c3_7HMG5bH4Rlh2hjthXMb-Rn7inzul3Jn_gjDTHeYP5zA`.
Use the whole value as token, including the `porla_` prefix.
:::

## Using API keys

After you have created an API key and copied its token, accessing the API is
easy. Pass it in the `Authorization` as `Bearer <token>`.

```sh
http -A bearer -a $TOKEN :1337/api/v1/jsonrpc "method=sys.versions" "params="
```
