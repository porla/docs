---
sidebar_position: 10
title: Creating plugins
---

# Creating plugins

Plugins provide an easy way to extend the functionality of Porla. Use them to
automatically categorize, tag and manage torrents, or send notifications, etc.

:::info
This is not a Lua language guide but rather a quick-start on how to get started
with your own plugin.
:::

## Basics

```lua title="example.lua"
return {
    init = function()
        print("Hello, world!")
    end
}
```

This will print "Hello, world!" to the Porla log (stdout) every time the plugin
is loaded. Reload the plugin from the plugin settings to see it happen multiple
times.

## Configuration

Users can pass configuration to a plugin. This configuration must be valid Lua
as well. The Lua object is passed as the first argument to the `init` function.

```lua title="example-with-config.lua"
return {
    init = function(config)
        print("Hello, {}!", config.name)
    end
}
```

Update the plugin to have the following configuration.

```lua
return {
    name = "vktr"
}
```

_If no configuration is provided, config will be `nil`._

## Destroying

When a plugin is destroyed (unloaded) Porla will try to call the `destroy`
function if one is provided.

This provides an simple way of doing any last-minute cleanup.

:::warning
The `destroy` is sync and the Lua state will be destroyed immediately after the
function returns. Asynchronous callbacks will not work here.
:::

```lua title="example-with-destroy.lua"
return {
    init = function()
        print("Hello, world!")
    end,

    destroy = function()
        print("Goodbye, cruel world")
    end
}
```
