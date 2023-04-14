# `Log`

The `Log` action prins a log message to the log output.

## Inputs

 * `message` - a string (or function taking a `context` parameter) that returns
   the message to log.

## Outputs

 * `rendered_message` - the message that was logged.

## Usage

```lua
local Log = require "porla.actions.Log"
```

### Example

```lua
Log:new{
  message = function(ctx)
    return string.format("Torrent %s added", ctx.torrent.name)
  end
}
```
