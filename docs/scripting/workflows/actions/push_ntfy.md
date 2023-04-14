# `PushNtfy`

The `PushNtfy` action pushes a message to a [ntfy.sh](https://ntfy.sh) topic.

## Inputs

 * `topic` - a string with the topic to use.
 * `message` - a string (or function taking a `context` parameter) that returns
   the message to send.

## Usage

```lua
local PushNtfy = require "porla.actions.PushNtfy"
```

### Example

```lua
PushNtfy:new{
  topic   = "some-secret-topic",
  message = function(ctx)
    return string.format("Torrent %s added", ctx.torrent.name)
  end
}
```
