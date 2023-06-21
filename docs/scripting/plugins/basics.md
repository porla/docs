---
sidebar_position: 10
---

# Basics

Plugins in Porla are Lua scripts that interact with the various packages that
Porla provides. Plugins can add functionality, modify behavior, etc.


## Installing plugins

Plugins are installed from the web UI. The plugin management page can be reached
by clicking the plugin button in the top right of the UI.

### Git

The easiest way to install plugins is via Git. Porla bundles _libgit2_ and uses
it to fetch plugins as well as keep them up to date. To allow Porla to fetch
plugins via Git, you need to set the `plugins.allow_git` key to true in the
`porla.toml` configuration.

```toml
[plugins]
allow_git = true
```

### Folder

You can also just point to a folder that has a `plugin.lua` file and Porla will
pick it up as well.


## Plugin skeleton

Creating plugins is easy. Each plugin should live in its own folder and that
folder should have a `plugin.lua` file.

```lua title="simple-plugin/plugin.lua"
local log = require "log"

function porla.init()
    log.info "Init plugin"
end

function porla.destroy()
    log.info "Destroying plugin"
end
```
