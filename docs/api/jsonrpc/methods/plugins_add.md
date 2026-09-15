# `plugins.add`

Adds a plugin to Porla.

## Request

```json
{
  "path": "/tmp/plugin.lua",
  "config": "<any config specified for the plugin>",
  "metadata": {
    "source": "github:porla-plugins/skeleton"
  }
}
```

## Response

```json
{
  "id": 7
}
```
