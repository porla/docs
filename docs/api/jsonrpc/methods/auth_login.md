# `auth.login`

Logs in the given user and returns a session token. The token has a sliding
expiration of 30 days.

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
  "token": "porla_..."
}
```

## Errors

| Code | Reason                                |
| ---- | ------------------------------------- |
| -1   | Invalid username/password combination |
