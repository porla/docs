# `LtOpenFileState`

## Properties

### `file_index: number`

### `open_mode: string[]`

One of `read_only`, `write_only`, `read_write`, plus any of `sparse`,
`no_atime`, `random_access`, `mmapped`.

### `last_use: number`

A monotonic-clock count from libtorrent.
