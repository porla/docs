---
sidebar_position: 2
---

# `POST /api/v1/auth/login`

Logs in the user with a specified password.

## Request

```json
{
  "username": "porla",
  "password": "hunter2"
}
```

## Response

_The token is also set in the `porla-auth-token` cookie._

```json
{
  "token": "ey..."
}
```
