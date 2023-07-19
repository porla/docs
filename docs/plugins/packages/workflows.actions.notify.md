---
title: workflows.actions.notify
position: 1020
---

## Description

Various kinds of notifications for workflows, such as Discord and Ntfy.sh.

## Exports

### Function `discord`

A function to run inside the `actions` of a workflow. This function takes a Lua
table with the following keys.

 * `message` - a string or a function taking a context that returns a string. The
   message to post.
 * `url` - a string or a function taking a context that returns a string. The
   Discord webhook URL.

### Function `ntfy`

A function to run inside the `actions` of a workflow. This function takes a Lua
table with the following keys.

 * `message` - a string or a function taking a context that returns a string. The
   message to post.
 * `topic` - a string or a function taking a context that returns a string. The
   Ntfy.sh topic to use.

## Example usage

```lua
local workflows = require("workflows")
local notify    = require("workflows.actions.notify")
local added     = require("workflows.triggers.torrent").added

function porla.init()
    workflows.add({
        trigger = added(),
        actions = {
            notify.discord({
                message = "Hello!",
                url     = "<discord webhook url>"
            }),
            notify.ntfy({
                message = "Hello!",
                topic   = "super-secret-topic"
            })
        }
    })
end
```
