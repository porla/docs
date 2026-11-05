---
sidebar_position: 20
title: Editor setup
---

# Editor setup

Porla ships type definitions for its Lua API, written for the
[Lua language server](https://luals.github.io/) (LuaLS). They describe every
package, type, global and event payload, so your editor can complete names,
show signatures and documentation, and warn about mistakes before you load the
plugin.

## Get the definitions

The definitions live in the [`types/lua`](https://github.com/porla/porla/tree/main/types/lua)
directory of the Porla repository. Use the ones from the release you run, since
the Lua API changes between versions:

```sh
git clone --depth 1 --branch v<version> --filter=blob:none --sparse \
    https://github.com/porla/porla porla-types
cd porla-types
git sparse-checkout set types/lua
```

Replace `v<version>` with the tag of your Porla version, for example `v0.53.0`.
Plugins can read the version at runtime with `require("porla_runtime").version`.

## Point LuaLS at them

Add a `.luarc.json` next to your `plugin.lua`:

```json title=".luarc.json"
{
  "runtime.version": "Lua 5.4",
  "workspace.library": ["/path/to/porla-types/types/lua"]
}
```

Any editor that runs LuaLS picks this file up, for example VS Code with the
[Lua extension](https://marketplace.visualstudio.com/items?itemName=sumneko.lua)
or Neovim with `lua_ls`.

## What you get

Package functions, their arguments and return values are typed, including the
errors they return:

```lua
local http_client = require("porla_http_client")

http_client.request("https://example.com", function(err, res)
    if err then
        print(err.code)    -- a PoErrorCode, e.g. "http_error"
        return
    end

    print(res.status)
end)
```

Event handlers get a typed payload for each event name:

```lua
local events = require("porla_events")

events.on("torrent.added", function(e)
    print(e.status.name, e.session_id)
end)
```

To have the table your plugin returns checked too, annotate it with `PoPlugin`:

```lua title="plugin.lua"
---@type PoPlugin
local plugin = {
    init = function(config)
        print("loaded")
    end
}

return plugin
```

## Check from the command line

LuaLS can also check a plugin without an editor, which is handy in CI:

```sh
lua-language-server --check . --checklevel=Warning
```

Run it in the plugin directory; it reads the same `.luarc.json`.
