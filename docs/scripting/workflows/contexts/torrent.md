# Torrent

The `torrent` context lets you access various pieces of information for the
torrent that is currently passing through your actions.

## Properties

 * `active_duration` - the number of seconds this torrent has spent in the
   session and not been paused.
 * `current_tracker` - the URL of the last working tracker.
 * `session` - the session this torrent belongs to.
 * `category` - the category this torrent belongs to.
 * `finished_duration` - the number of seconds this torrent had all
   _selected_ files and pieces downloaded and available to other peers.
 * `info_hash` - returns the info-hash for this torrent.
 * `name` - the torrent name.
 * `ratio` - returns the ratio for this torrent.
 * `save_path` - the torrent save path.
 * `seeding_duration` - the number of seconds this torrent had _all_ files and
   pieces downloaded and available to other peers.
 * `size` - the torrent size in bytes.
 * `tags` - a list of tags.
 * `is_downloading` - returns true if torrent is currently downloading, 
   otherwise false.
 * `is_finished` - returns true if torrent is finished, otherwise false.
 * `is_moving` - returns true if torrent is being moved, otherwise false.
 * `is_paused` - returns true if torrent is currently paused, 
   otherwise false.
 * `is_seeding` - returns true if this torrent is currently seeding, 
   otherwise false.

 Check the [PQL](/docs/pql.md#flags) documentation for more details on the 
 `is_` properties.

## Example

```lua
function(ctx)
  return ctx.torrent.name
end
```
