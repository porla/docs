# `plugins.list`

List all plugins.

Name and version of the plugin are read from the `manifest.toml` file in the
plugin archive file.

## Request

```json
{
}
```

## Response

```json
{
  "plugins": [
    {
      "id": 7,
      "type": "path",
      "name": "skeleton",
      "version": "0.1",
      "metadata": {},
      "is_loaded": true
    }
  ]
}
```
