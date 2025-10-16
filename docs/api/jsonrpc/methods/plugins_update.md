# `plugins.update`

Updates the data, configuration or metadata of the plugin with the specified
ID. This method is used to update a plugin to a new version, or change the
configuration of a running plugin, etc.

If `config` or `metadata` is null, these values will be cleared in the
database. If `data` is null, it will _not_ be cleared - you cannot remove the
archive or path of a plugin. Instead, to remove a plugin, use
[`plugins.remove`](./plugins_remove.md).
