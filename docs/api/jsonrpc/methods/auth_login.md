# `auth.login`

Logs in the given user and returns an authentication token (JWT).

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

| Code | Reason |
| ---- | ------ |
| -1 | Invalid username/password. |
