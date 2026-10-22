# `auth.login`

Logs in the given user and returns an authentication token (JWT). The token is
valid for 24 hours and cannot be refreshed.

For programmatic access, use API keys.

:::info

The token is also returned as a cookie (`porla-auth-token`) which is used by
browser clients to support persistent logins without managing the token.

:::

## Request

```json
{
  "username": "root",
  "password": "hunter2"
}
```

## Response

```json
{
  "token": "ey..."
}
```

## Errors

| Code | Reason                                |
| ---- | ------------------------------------- |
| -1   | Invalid username/password combination |
