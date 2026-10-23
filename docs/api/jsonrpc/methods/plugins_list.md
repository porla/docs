# `plugins.list`

List all plugins.

`name` and `version` come from the plugin's optional `plugin.json`, read while
the plugin is loaded. Without one, `name` is the plugin's file or directory
name and `version` is `null`.

## Request

```json
{}
```

## Response

```json
{
  "plugins": [
    {
      "id": 7,
      "path": "/home/user/plugins/my-plugin",
      "name": "My plugin",
      "version": "1.2.0",
      "metadata": {},
      "is_loaded": true
    },
    {
      "id": 8,
      "path": "/home/user/plugins/notify.lua",
      "name": "notify.lua",
      "version": null,
      "metadata": {},
      "is_loaded": true
    }
  ]
}
```
