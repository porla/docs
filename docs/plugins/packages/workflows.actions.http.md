---
title: workflows.actions.http
position: 1010
---

## Description

Perform HTTP requests from your workflow.

## Exports

A function to run inside the `actions` of a workflow. This function takes a Lua
table with the following keys.

 * `url` - the URL to request.
 * `headers` - (optional) a Lua table of string keys and values that sets the 
   HTTP request headers.
 * `body` - (optional) the contents of the HTTP request.
 * `method` - (optional, defaults to `GET`) the HTTP method to use.
 

### Workflow outputs

This action will put a Lua table in the steps context. The table has the
following keys.

 * `content` - the HTTP response content.
 * `status_code` - the HTTP response status code.

## Example usage

```lua
local workflows = require("workflows")
local http      = require("workflows.actions.http")
local added     = require("workflows.triggers.torrent").added

function porla.init()
    workflows.add({
        trigger = added(),
        actions = {
            http({
                url = "https://www.google.com"
            })
        }
    })
end
```
