# Torrent

The `torrent` context lets you access various pieces of information for the
torrent that is currently passing through your actions.

## Properties

 * `active_duration` - the number of seconds this torrent has spent in the
   session and not been paused.
 * `category` - the category this torrent belongs to.
 * `finished_duration` - the number of seconds this torrent had all
   _selected_ files and pieces downloaded and available to other peers.
 * `is_seeding` - returns true if this torrent is currently seeding,
   otherwise false.
 * `name` - the torrent name.
 * `ratio` - returns the ratio for this torrent.
 * `save_path` - the torrent save path.
 * `seeding_duration` - the number of seconds this torrent had _all_ files and
   pieces downloaded and available to other peers.
 * `size` - the torrent size in bytes.
 * `tags` - a list of tags.

## Example

```lua
function(ctx)
  return ctx.torrent.name
end
```
