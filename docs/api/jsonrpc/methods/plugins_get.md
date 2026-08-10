# `plugins.get`

Gets details about the plugin with the specified ID.

## Request

```json
{
  "id": 7
}
```

## Response

```json
{
  "plugin": {
    "id": 7,
    "type": "path",
    "name": "skeleton",
    "version": "0.1",
    "config": "return {}",
    "metadata": {
      "source": "github:porla-plugins/skeleton"
    },
    "is_loaded": true
  }
}
```
