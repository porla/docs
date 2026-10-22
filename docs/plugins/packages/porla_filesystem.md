# `porla_filesystem`

Mostly wraps the `std::filesystem` C++ APIs for filesystem operations.

## Exports

### `create_directories(path: string): boolean?, string?`

<Since>v0.46.0</Since>

Creates the directory structure as specified by `path`. Returns `true` if it
created the directories, `false` if they already existed, and `nil, err` on
failure (e.g. "No such file or directory")

#### Example

```lua
local fs = require("porla_filesystem")
local success, err = fs.create_directories("foo/bar/baz")
```

### `exists(path: string): boolean?, string?`

<Since>v0.46.0</Since>

Checks if the given `path` exists. Returns a boolean that indicates if it does
exist, or an error.

#### Example

```lua
local fs = require("porla_filesystem")
local exists, err = fs.exists("some-arbitrary/path.txt")
```
