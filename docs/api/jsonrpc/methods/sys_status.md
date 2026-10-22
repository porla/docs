# `sys.status`

The setup state of Porla. Will return `setup` as status until the first user
has been created.

## Request

```json
{}
```

## Response

```json
{
  "status": "setup" | "ok"
}
```
