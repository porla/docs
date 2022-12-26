---
sidebar_position: 40
---

# Webhooks

Porla supports sending HTTP webhooks on various events. This allows users to
easily set up eg. Discord or Slack notifications, or any other type of
integration that provides an HTTP endpoint of some sort.

Each webhook can be set up with a payload. The payload is always a JSON
document that is created with [jsonnet](https://github.com/google/jsonnet).
Using jsonnet allows the user to emit dynamic JSON in the payload without much
effort.

## Configuring a webhook

Webhooks are configured in the `porla.toml` configuration file. Multiple
webhooks are supported, and a single webhook can be run on more than one event.

### Using jsonnet

```toml
[[webhooks]]
on = ["torrent_added"]
url = "http://example.com/callback"
payload = """
local torrent = std.extVar('torrent');

{
  message: torrent.name + " was added!"
}
"""
```

## Example webhooks

These are some example webhooks you can use and adjust to fit your needs.

### Discord notifications

To set up Discord notifications, create a webhook in your Discord server settings
under the _Integrations_ page. Copy the _Webhook URL_ and use as the `url` key in
your Porla webhook configuration.

```toml
[[webhooks]]
on = ["torrent_added"]
url = "https://discord.com/api/webhooks/redacted"
payload = """
local torrent = std.extVar('torrent');

{
  content: "Torrent **" + torrent.name + "** was added to Porla"
}
"""
```

## Available variables

These are the available variables that you can get through the `std.extVar`
function.

### `event_name`

A string with the name of the event that is run. Corresponds to the event in
the `on` array of the configuration. One of,

 * `torrent_added`
 * `torrent_finished`
 * `torrent_paused`
 * `torrent_resumed`
 * `torrent_removed`

#### Example

```jsonnet
local event = std.extVar('event_name');

{
  porla_event: event
}
```

### `torrent`

:::info

The `torrent_removed` event only contains the `info_hash` property on the `torrent`
object.

:::

An object with various properties for the torrent that the event is currently
running for. Available properties are,

 * `info_hash`
 * `name`
 * `progress`
 * `save_path`
 * `total`
 * `total_done`
 * `total_wanted`

#### Example

 ```jsonnet
local torrent = std.extVar('torrent');

{
  info_hash_v1: torrent.info_hash[0],
  torrent_name: torrent.name
}
 ```
