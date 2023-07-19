---
title: workflows.triggers.torrent
position: 1060
---

## Description

Trigger a workflow based on various torrent events.

## Exports

### Function `added`

A function to run as the `trigger` of a workflow. This function triggers the
workflow when a torrent is added.

### Function `finished`

A function to run as the `trigger` of a workflow. This function triggers the
workflow when a torrent is finished.

### Function `moved`

A function to run as the `trigger` of a workflow. This function triggers the
workflow when a torrent is moved.

## Example usage

```lua
local workflows = require("workflows")
local log       = require("workflows.actions.log")
local added     = require("workflows.triggers.torrent").added
local finished  = require("workflows.triggers.torrent").finished
local moved     = require("workflows.triggers.torrent").moved

function porla.init()
    workflows.add({
        trigger = added(),
        actions = {
            log("A torrent was added")
        }
    })

    workflows.add({
        trigger = finished(),
        actions = {
            log("A torrent was moved")
        }
    })

    workflows.add({
        trigger = finished(),
        actions = {
            log("A torrent was finished")
        }
    })
end
```
