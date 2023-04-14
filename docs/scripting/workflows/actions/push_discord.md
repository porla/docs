# `PushDiscord`

The `PushDiscord` action pushes a message to a Discord channel using the
Discord webhooks API.

In order to use this action, set up a webhook integration and copy the URL.

## Inputs

 * `url` - a string with the full URL as provided by Discord.
 * `message` - a string (or function taking a `context` parameter) that returns
   the message to send.

## Usage

```lua
local PushDiscord = require "porla.actions.PushDiscord"
```

### Example

```lua
PushDiscord:new{
  url     = "<discord webhook url>",
  message = function(ctx)
    return string.format("Torrent %s added", ctx.torrent.name)
  end
}
```
