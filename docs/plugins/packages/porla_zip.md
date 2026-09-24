# `porla_zip`

Wraps `libzip` and allows plugins to read zip files.

## Exports

### `read(buffer: string): table?, string?`

Reads the buffer and returns a table with the contents of the zip file.

#### Example

```lua
local zip = require("porla_zip")

local files, err = zip.read("... buffer")

if err then
    -- failed to read
    return
end

-- prints the contents of test.txt
print(files["test.txt"])
```
