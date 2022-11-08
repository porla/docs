# `torrents.move`

Moves a torrent to a new save path.

## Request

```json
{
  "info_hash": [ "abcdef0123456789abcd", null ],

  // How to manage replacing files. default is 
  // - always_replace_files (default)
  // - dont_replace
  // - fail_if_exists
  "flags": "dont_replace",

  // The target path.
  "path": "/dl/other/path"
}
```

## Response

```json
null
```
