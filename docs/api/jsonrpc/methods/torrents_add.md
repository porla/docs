# `torrents.add`

Adds a torrent to Porla. Most of the parameters on the request object are
optional, however - either `ti` or `magnet_link`, and `save_path` needs to be
set before passing the object through to libtorrent.

How to do this depends on your setup, but the easiest way is to set either `ti`
or `magnet_link` and a `save_path` explicitly. You can also specify a preset
which in turn sets a save path. Or, you can set a save path on the `default`
preset, which will also set a save path.

:::info[How a session is picked]

Adding a torrent is quite easy, but figuring out which session it is added to
might be tricky. Here's the lookup order for finding a session.

 1. The `session_id` field of the request.
 2. If a preset is specified, the `session_id` of the preset.
 3. If a default preset exists, the `session_id` of the default preset.
 4. The default session.

:::

## Request

```json
{
  // the upload and download rate limits for this torrent, specified in
  // bytes per second. -1 means unlimited.
  "download_limit": 123,
  "upload_limit": 763,

  // http_seeds expects URLs to web servers implementing the original HTTP
  // seed specification `BEP 17`.
  "http_seeds": [
    "http://http-seed.example.com"
  ],

  // set to a magnet uri
  "magnet_uri": "magnet:?xt=urn:btih:...",

  "max_connections": 3000,
  "max_uploads": 9000,

  // In case there's no other name in this torrent, this name will be used.
  // The name out of the torrent_info object takes precedence if available.
  "name": "some name",

  // The ID of the preset to apply settings from. Optional. If no preset ID is
  // specified, the one named "default" will be used (if any).
  "preset_id": 8,

  // the path where the torrent is or will be stored. Setting this to an
  // absolute path performs slightly better than a relative path.
  "save_path": "/tmp",

  // The ID of the session to add this torrent to. This will override the
  // session ID from the preset (if any). If no session ID is specified,
  // the default session will be used.
  "session_id": 19,

  // the torrent file to add
  "ti": "<base64 encoded .torrent file>",

  // If the torrent doesn't have a tracker, but relies on the DHT to find
  // peers, the ``trackers`` can specify tracker URLs for the torrent.
  "trackers": [
    "http://example.com/announce"
  ],

  // url_seeds expects URLs to regular web servers, aka "get right" style,
  // specified in `BEP 19`_.
  "url_seeds": [
    "http://url-seed.example.com"
  ]
}
```

## Response

This method returns the info hash of the added torrent.

```json
{ "info_hash": [ "abcdef0123456789abcd", null ] }
```

## Errors

| Code | Reason |
| ---- | ------ |
| -1 | Session not found. See note at the top on how a session is determined. The `session_id` field of the error response contains the session ID that was used, or _-1_ if the default session was not found. |
| -2 | No save path. A preset might have set the save path to an empty string. |
| -3 | Either `ti` or `magnet_link` must be specified. |
| -4 | The torrent could not be added to the session. The `what` field in the error might tell you why. |
| -5 | An unspecified error occured when adding the torrent. |
| -6 | A torrent with this info hash is already in the session. |
| -10 | The `ti` parameter was not a valid base64 encoded bencoded string. |
| -11 | The `ti` parameter did not contain a valid bencoded torrent file. |
| -20 | The `magnet_uri` parameter is not a valid magnet link. |
