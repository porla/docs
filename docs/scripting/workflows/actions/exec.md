# `Exec`

The `Exec` action executes a specified binary and passes the arguments to it.

The workflow will wait until the program has exited before it continues.

## Inputs

 * `file` - a string pointing to the binary to execute.
 * `args` - _(optional)_ a string array with arguments to pass to the executable.
 * `std_in` - _(optional)_ a string (or function taking a `context` parameter)
   that returns the data to write to the process standard input.

## Outputs

 * `exit_code` - the exit code of the process that was launched.
 * `std_err` - the output which was written to _stderr_.
 * `std_out` - the output which was written to _stdout_.

## Usage

```lua
local Exec = require "porla.actions.Exec"
```

### Example

```lua
Exec:new{
  file = "/usr/bin/curl",
  args = {
    "https://www.google.com"
  }
}
```
