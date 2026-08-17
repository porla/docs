# `auth.init`

If the Porla instance requires setup (i.e no users in the database) then this
method can be used to create the initial user.

Calling this method returns an error if there are users in the database.

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
}
```

## Errors

| Code | Reason |
| ---- | ------ |
| -1 | Auth already initialized. |
