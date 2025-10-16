---
sidebar_position: 1
---

# `POST /api/v1/auth/init`

This endpoint can only be used when no users currently exists in the database.

Use this to create the first user with a username and password.

## Request

```json
{
  "username": "porla",
  "password": "hunter2"
}
```

## Response

```json
{
  "ok": true
}
```
