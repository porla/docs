# `sessions.remove`

Removes a session. If the session has any torrents, this operation will be
refused.

_The default session cannot be removed._

## Request

```json
{
  "id": 8
}
```

## Response

```json
null
```

## Errors

| Code | Reason                              |
| ---- | ----------------------------------- |
| -1   | Session not found                   |
| -2   | Cannot remove default session       |
| -3   | Cannot remove session with torrents |
