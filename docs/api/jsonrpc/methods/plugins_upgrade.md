# `plugins.upgrade`

Moves a GitHub-installed plugin to another release in the same repository.

## Request

```json
{
  "id": 8,
  "version": "0.2.1"
}
```

## Response

```json
null
```

## Errors

| Code | Reason                                            |
| ---- | ------------------------------------------------- |
| -1   | Plugin not found                                  |
| -2   | Plugin is missing required metadata for upgrading |
| -3   | Cannot upgrade to same version                    |
| -4   | Release not found                                 |
| -5   | Failed to parse release body as JSON              |
| -6   | Release has no downloadable asset                 |
| -7   | Failed to fetch release asset                     |
| -8   | Failed to write plugin archive to `<path>`        |
| -9   | Plugin path is used by another plugin             |
