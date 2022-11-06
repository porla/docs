# `torrents.add`

Adds a torrent to Porla. Most of the parameters on the request object are
optional, however - either `ti` or `magnet_link`, and `save_path` needs to be
set before passing the object through to libtorrent.

How to do this depends on your setup, but the easiest way is to set either `ti`
or `magnet_link` and a `save_path` explicitly. You can also specify a preset
which in turn sets a save path. Or, you can set a save path on the `default`
preset, which will also set a save path.

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

  // Set to a preset as configured in porla.toml to automatically set config
  // values.
  "preset": "my-preset-1",

  // the path where the torrent is or will be stored. Setting this to an
  // absolute path performs slightly better than a relative path.
  "save_path": "/tmp",

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
