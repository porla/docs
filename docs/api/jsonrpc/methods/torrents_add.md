# `torrents.add`

Adds a torrent to Porla. Most of the parameters on the request object are
optional, however - either `ti` or `magnet_uri`, and `save_path` needs to be
set before passing the object through to libtorrent.

How to do this depends on your setup, but the easiest way is to set either `ti`
or `magnet_uri` and a `save_path` explicitly. You can also specify a preset
which in turn sets a save path. Or, you can set a save path on the `default`
preset, which will also set a save path.

:::info[How a session is picked]

Adding a torrent is quite easy, but figuring out which session it is added to
might be tricky. Here's the lookup order for finding a session.

1.  The `session_id` field of the request.
2.  If a preset is specified, the `session_id` of the preset.
3.  If a default preset exists, the `session_id` of the default preset.
4.  The default session.

:::

## Request

### With torrent file

```json
{
  "ti": "ZDg6YW5ub3VuY2Uz...",
  "save_path": "/downloads/linux",
  "category": "linux",
  "tags": ["iso", "ubuntu"],
  "metadata": { "source": "rss" },
  "download_limit": 400000
}
```

### With magnet uri

```json
{
  "magnet_uri": "magnet:?xt=urn:btih:cdcd...cd&dn=debian-12.7.0-amd64-netinst.iso",
  "save_path": "/downloads/linux"
}
```

## Response

```json
{
  "info_hash": ["a3bb86a8823f282e4f71f2943415617036e2ee8c", null],
  "session_id": 1
}
```

## Errors

| Code | Reason                                                                                                |
| ---- | ----------------------------------------------------------------------------------------------------- |
| -1   | "Session not found", with data.session_id                                                             |
| -2   | "Session not loaded" (with data.session_id), "Failed to parse 'ti'" or "Failed to parse 'magnet_uri'" |
| -3   | "Either 'ti' or 'magnet_uri' must be set"                                                             |
| -4   | missing info hash                                                                                     |
| -5   | "Torrent already in session"                                                                          |
| -6   | "'save_path' missing"                                                                                 |
| -7   | "Failed to add torrent to session", with data.what                                                    |
| -8   | category, tags or metadata aren't valid UTF-8                                                         |
| -9   | "Preset not found", for an unknown preset_id or preset                                                |
