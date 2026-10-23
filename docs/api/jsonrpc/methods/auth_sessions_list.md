# `auth.sessions.list`

<Since>v0.52.0</Since>

Lists the active login sessions, with the browser (user agent) and address they
were created from. `current` marks the session making this request. A session
expires 30 days after it was last used; `last_used_at` and `expires_at` are
updated at most every 5 minutes.

## Request

```json
{}
```

## Response

```json
{
  "sessions": [
    {
      "id": "d7befc5bd8f4851e",
      "created_at": 1893452400,
      "last_used_at": 1893456000,
      "expires_at": 1896048000,
      "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0",
      "remote_address": "127.0.0.1",
      "current": true
    },
    {
      "id": "51eff101c41d1ad8",
      "created_at": 1893452500,
      "last_used_at": 1893452500,
      "expires_at": 1896044500,
      "user_agent": "curl/8.9.1",
      "remote_address": "127.0.0.1",
      "current": false
    }
  ]
}
```
