# `plugins.install`

Downloads a plugin from a GitHub release and adds it.

- It fetches `releases/tags/<version>` and downloads the first asset, which
  must be a zip with plugin.lua at its root.
- The zip is saved as `<state_dir>/plugins/<owner>_<repo>_<tag>.zip`.
- The stored metadata is `{"source": "github", "owner", "repository", "version"}`,
  which plugins.upgrade relies on.

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

## Errors

| Code | Reason                                      |
| ---- | ------------------------------------------- |
| -2   | Release not found                           |
| -3   | Failed to parse release body as JSON        |
| -4   | Release has no downloadable assets          |
| -5   | Failed to fetch release asset               |
| -6   | Failed to write release archive to `<path>` |
| -7   | Plugin path is used by another plugin       |
