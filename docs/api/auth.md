---
sidebar_position: 1
---

# Auth

Much of the Porla HTTP API is protected with bearer tokens. They are either
JWTs or simple structured tokens. JWTs are used for user sessions, and
structured tokens are used for API keys.

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
http -A bearer -a $TOKEN :1337/api/v1/jsonrpc jsonrpc=2.0 id:=1 method=sys.versions params:='{}'
```

## Passing the token

Porla looks for an API key or JWT in the following order,

1.  The `X-Porla-Token` header, either holding the raw token or `Bearer <token>`.
2.  `Authorization: Bearer <token>`.
3.  The `porla-auth-token` cookie.

A token that starts with `ey` is treated as a JWT, and one starting with
`porla_` as an API key. A missing, invalid or expired token is _not_ a 401: the
call will run as _Anonymous_ so any protected function will return
`1001 "Invocation not allowed"`.

## Users and sessions

- `sys.status` returns `{"status": "setup"}` until the first user exists, then
  `"ok"`.
- `auth.init` creates the initial user.
- Passwords are hashed with Argon2id (via libsodium) and re-hashed on login if
  when the parameters (such as memory limit, etc) are out of date.
- `auth.login` returns `{"token": "ey..."}` and also sets the
  `porla-auth-token` cookie.
- The JWT is HS256 with claims `iss: porla`, `sub: <username>`, `iat`, and
  `exp` 24 hours later. After 24 hours the user needs to login again.
- API keys are checked against the database on every request so removing a key
  or updating its expiry takes effect immediately.

## Permissions

| Caller                      | Methods                                         |
| --------------------------- | ----------------------------------------------- |
| Anyone, including anonymous | `sys.status`, `auth.init`, `auth.login`         |
| API keys                    | all `torrents.*` methods, plus all read methods |
| Users                       | Everything                                      |
