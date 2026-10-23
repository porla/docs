# `auth.keys.create`

<Since>v0.49.0</Since>

Creates an API key with an optional expiry date.

:::note
This method requires a logged-in user, meaning API keys cannot be used to
create further API keys.
:::

## Request

```json
{
  "name": "autobrr",
  // Optional expiry date as a unix timestamp in seconds.
  "expires_at": 1893452400
}
```

## Response

:::info
The `key` value is the actual token and cannot be retrieved again, so persist this.
:::

```json
{
  "id": "7e729d8818b337c3",
  "key": "porla_7e729d8818b337c3_7HMG5bH4Rlh2hjthXMb-Rn7inzul3Jn_gjDTHeYP5zA"
}
```

## Errors

| Code | Reason                                       |
| ---- | -------------------------------------------- |
| -1   | Invalid name - length must be between 1-1024 |
| -2   | Invalid `expires_at` - must be in the future |
