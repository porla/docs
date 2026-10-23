# `auth.logout`

<Since>v0.52.0</Since>

Ends the current session: its token stops working immediately and the
`porla-auth-token` cookie is cleared. Only for logged-in users; API keys can't
call it.

## Request

```json
{}
```

## Response

```json
null
```
