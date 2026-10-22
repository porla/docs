# `webui.install`

Installs a web UI release. It uses the `porla/web` repository by default but
can be overridden by updating the key-value keys `porla.webui.owner` and
`porla.webui.repository`.

:::info

The installed archive becomes the current web UI and is served straight await.

Web clients should do a `location.reload();` to update.

:::

## Request

```json
{
  "version": "3.4.1"
}
```

## Response

```json
{}
```

## Errors

| Code | Reason                            |
| ---- | --------------------------------- |
| -1   | Missing or invalid version        |
| -2   | Failed to install web UI: `<err>` |
| -3   | Failed to load web UI archive     |
