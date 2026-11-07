# `porla_filesystem`

Mostly wraps the `std::filesystem` C++ APIs for filesystem operations. Relative
paths resolve against Porla's working directory. Errors are a
[`PoError`](../types/poerror.md) with `code = "io_error"` and the OS error in
`category` and `value`.

## Exports

### <code>create_directories(path: string): boolean?, [PoError](../types/poerror.md)?</code>

<Since>v0.46.0</Since>

Creates the directory structure as specified by `path`. Returns `true` if it
created the directories, `false` if they already existed, and `nil, err` on
failure (e.g. "No such file or directory")

#### Example

```lua
local fs = require("porla_filesystem")
local success, err = fs.create_directories("foo/bar/baz")
```

### <code>exists(path: string): boolean?, [PoError](../types/poerror.md)?</code>

<Since>v0.46.0</Since>

Checks if the given `path` exists. Returns a boolean that indicates if it does
exist, or an error.

#### Example

```lua
local fs = require("porla_filesystem")
local exists, err = fs.exists("some-arbitrary/path.txt")
```

### <code>link(src: string, dst: string): boolean?, [PoError](../types/poerror.md)?</code>

<Since>v0.55.0</Since>

Creates a hard link `dst` to the file `src`, and any missing parent directories
of `dst`. Never replaces an existing `dst`. Both paths must be on the same
filesystem. Returns `true`, or `nil, err` (for example "File exists" or
"Invalid cross-device link").

#### Example

```lua
local fs = require("porla_filesystem")
local ok, err = fs.link("/downloads/movie.mkv", "/library/Movie (2024)/movie.mkv")
```

### <code>space(path: string): table?, [PoError](../types/poerror.md)?</code>

<Since>v0.55.0</Since>

Returns the space on the filesystem that holds `path`, in bytes:

- `available` - free for Porla's user, what a download can use
- `capacity` - the size of the filesystem
- `free` - free, including space reserved for root

#### Example

```lua
local fs = require("porla_filesystem")
local space, err = fs.space("/downloads")

if space then
    print(space.available // (1024 * 1024 * 1024), "GiB free")
end
```
