# `plugins.add`

Add (install) a new plugin.

The `type` field determines what type of plugin to install. The following
values are valid for _type_,

 * `archive` - the `data` field should be a base64 encoded zip archive.
 * `path` - the `data` field should be an absolute path to a directory
   containing a plugin.

Installing from a path is usually done when developing plugins.

The `metadata` field can be used to attach any JSON object to the plugin, for
example if you want to store the source. The web UI does this to know where to
check for updates, for example.

## Request

```json
{
  // If installing from a zip archive
  "type": "archive",
  "data": "<base64 encoded zip archive>",

  // If installing from a local path
  "type": "path",
  "data": "/tmp/skeleton",

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

## Errors

| Code | Reason |
| ---- | ------ |
| -1 | Invalid plugin type. The `type` field must be either `archive` or `path`. |
| -101 | The path must be absolute. |
| -102 | The path does not exist. |
