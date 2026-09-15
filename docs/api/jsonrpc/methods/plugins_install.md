# `plugins.install`

Installs a plugin from a remote source. Currently only GitHub supported.

## Request

```json
{
  "owner": "porla-plugins",
  "repository": "metrics",
  "version": "v0.1",
  "config": "return {}"
}
```

## Response

```json
{
  "id": 8
}
```