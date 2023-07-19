---
title: config
position: 5
---

## Description

Provides access to the contents of the `porla.toml` file as a Lua table. Use this
to access values from the configuration file inside your plugins.

## Example usage

```lua
local config = require("config")

-- print the workflow_dir
print(config.workflow_dir)
```
