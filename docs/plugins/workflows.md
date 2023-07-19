---
title: Workflows
sidebar_position: 50
---

# Workflows

Workflows in Porla are, at their core, plugins that uses the various _workflows_
packages. These packages wrap other Porla APIs and makes them easier to use in
an asynchronous matter.

Anything that you can build with the workflow APIs can also be built without them,
albeit with a bit more code.

To load workflows, set the [`workflow_dir`](../configuration.md#workflow_dir).
Porla will load each `.lua` file in this directory.

### The simplest workflow

A really simple workflow that logs _Hello from a workflow_ every time a torrent
is added.

```lua title="workflows/the-simplest-workflow.lua"
local workflows = require("workflows")
local log       = require("workflows.actions.log")
local added     = require("workflows.triggers.torrent").added

function porla.init()
    workflows.add({
        trigger = added(),
        actions = {
            log("Hello from a workflow")
        }
    })
end
```

