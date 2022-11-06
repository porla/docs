# `torrents.files.list`

Lists all the files in a torrent.

## Request

```json
{ "info_hash": [ "abcdef0123456789abcd", null ] }
```

## Response

```json
{
  "files": [
    {
      // true if the file at the specified index has been renamed to have an
      // absolute path, i.e. is not anchored in the save path of the torrent.
      "absolute_path": false,

      // Index of first piece node in the merkle tree.
      "first_block_node": 262143,
      "first_piece_node": 16383,

      // A bitmask of flags from file_flags_t that apply to the file.
      "flags": 0,

      // The name of the file.
      "name": "ubuntu-21.04-desktop-amd64.iso",

      // Returns the number of pieces or blocks the file at `index` spans,
      // under the assumption that the file is aligned to the start of a piece.
      // This is only meaningful for v2 torrents, where files are guaranteed
      // such alignment. These numbers are used to size and navigate the merkle
      // hash tree for each file.
      "num_blocks": 172043,
      "num_pieces": 10753,

      // The byte offset within the torrent file where this file starts. It can
      // be used to map the file to a piece index (given the piece size)
      "offset": 0,

      // The path (inside the torrent file) with the filename appended.
      "path": "ubuntu-21.04-desktop-amd64.iso",

      // The size of the file.
      "size": 2818738176
    }
  ]
}
```
