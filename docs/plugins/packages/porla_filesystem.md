# `porla_filesystem`

Mostly wraps the `std::filesystem` C++ APIs for filesystem operations.

## Exports

### `create_directories(path: string): boolean?, string?`

<Since>v1.0</Since>

Creates the directory structure as specified by `path`. Returns a boolean that
indicates success (or not), or an error.

#### Example

```lua
local success, err = fs.create_directories("foo/bar/baz")
```

### `exists(path: string): boolean?, string?`

<Since>v1.0</Since>

Checks if the given `path` exists. Returns a boolean that indicates if it does
exist, or an error.

#### Example

```lua
local exists, err = fs.exists("some-arbitrary/path.txt")
```
