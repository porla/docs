---
title: Getting started
---

# Plugins in Porla

Porla embeds [Lua 5.4](https://www.lua.org/) and adds a powerful API to support
advanced customizations.

## Creating plugins

See [creating plugins](./creating-plugins.md).

## Installing plugins

If all you want to do is find and use plugins you can install any plugin from
the settings page.

### Installing from GitHub

To install a plugin from GitHub, you need three things, the repository owner,
the repository name, and the tag name (which must also be a GitHub release).

For example, [porla-plugins](https://github.com/porla-plugins) contains a
directory of useful plugins, and to install a plugin you use

 * Owner: _porla-plugins_
 * Repository: _metrics_
 * Version: _v0.2.0_

### Installing from a path

To install a plugin from a path you select manual installation from the plugin
install page and provide a path to the plugin.

The path must be absolute and can be either a `.lua` file, a `.zip` file or a
directory containing a `plugin.lua` file.

:::info
The path must exist _on the Porla server_.
:::