# `auth.init`

If the Porla instance requires setup (i.e no users in the database) then this
method can be used to create the initial user.

After the first user exists, every call will fail with `-1`.

## Request

```json
{
  "username": "root",
  "password": "hunter2"
}
```

## Response

```json
null
```

## Errors

| Code | Reason                                  |
| ---- | --------------------------------------- |
| -1   | Auth already initialized                |
| -2   | Failed to hash password                 |
| -3   | Username and password must not be empty |
