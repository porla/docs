# `auth.sessions.remove`

<Since>v0.52.0</Since>

Ends a session, for example one on a lost device. Its token stops working
immediately. Use [`auth.logout`](./auth_logout.md) to end your own session.

## Request

```json
{
  "id": "51eff101c41d1ad8"
}
```

## Response

```json
null
```

## Errors

| Code | Reason            |
| ---- | ----------------- |
| -1   | Session not found |
