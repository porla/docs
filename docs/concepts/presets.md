---
sidebar_position: 10
---

# Presets

Presets in Porla are rules that can be applied to torrents _when adding them_.

For example, a preset can change the download/upload limit of a torrent, or add
it to a specific session.

## How it works

When adding a torrent you can pass the `preset_id`, which will apply that
specific preset to the params before adding the torrent to the session. A
preset can be the *default* preset, which means it will always be applied even
if no `preset_id` is set.

If a default preset exists, and you pass another preset ID, the default preset
will be applied first, and then the specified preset will be applied. This
means you can have a default preset that sets some common settings like save
path, and then specific presets that override the default preset.
