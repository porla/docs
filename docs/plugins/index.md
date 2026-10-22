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

- Porla fetches `https://api.github.com/repos/<owner>/<repo>/releases/tags/<version>`,
  so version has to be the exact release tag, e.g. v0.2.0.
- The release needs at least one asset. Porla downloads the first one, which
  must be a zip with plugin.lua at its root.
- The zip is saved as `<state_dir>/plugins/<owner>_<repo>_<tag>.zip`.
- A plugin installed this way can later be moved to another release with
  `plugins.upgrade`. Removing the plugin doesn't delete the zip.
- It needs outbound HTTPS from the Porla server.

For example, [porla-plugins](https://github.com/porla-plugins) contains a
directory of useful plugins, and to install a plugin you use

- Owner: _porla-plugins_
- Repository: _metrics_
- Version: _v0.2.0_

### Installing from a path

To install a plugin from a path you select manual installation from the plugin
install page and provide a path to the plugin.

- For a .zip or a directory, the entry point must be plugin.lua at the root.
- A path that another plugin already uses is refused.
- Over RPC, this is `plugins.add`.

The path must be absolute and can be either a `.lua` file, a `.zip` file or a
directory containing a `plugin.lua` file.

:::info
The path must exist _on the Porla server_.
:::
