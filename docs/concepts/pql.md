---
sidebar_position: 5
---

# PQL

PQL (short for Porla Query Language) is a small query language built into
Porla for finding torrents. The same syntax works in the web UI search field,
the [`torrents.list`](../api/jsonrpc/methods/torrents_list.md) `query` filter
and in plugins through [`PoQuery`](../plugins/types/poquery.md).

In true Porla fashion, it maps mostly 1:1 with the libtorrent API for
_torrent_status_ which means some clunky names here and there, but makes it
easier to maintain.

## Example queries

### Quick lookups

| Query                                       | Description                                                                                                                     |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `errc:true`                                 | Torrents with an error, such as a missing file, a full disk or a failed move.                                                   |
| `ubuntu iso`                                | Free text search; both words must appear in the name. A bare word that looks like an info hash also matches info hash prefixes. |
| `name:"ubuntu 24.04" OR info_hash:3f9aac15` | Finds a release by its exact name (quotes keep the space) or by the start of its info hash.                                     |
| `eta:<10m`                                  | Downloads expected to finish in the next 10 minutes.                                                                            |
| `upload_payload_rate:>1mb/s`                | Torrents currently uploading faster than 1 MB/s.                                                                                |
| `completed_time:2026-10-01..2026-10-05`     | Torrents that finished between 1st and 5th Oct, both days included.                                                             |

### Organizing

| Query                                      | Description                                                        |
| ------------------------------------------ | ------------------------------------------------------------------ |
| `-has:$userdata.category`                  | Torrents with no category set.                                     |
| `$userdata.category:=linux added_time:-7d` | Torrents in the `linux` category that were added in the last week. |
| `save_path:/mnt/old total:>50gb`           | Large torrents still in an old save path.                          |

### Troubleshooting

| Query                                                              | Description                                                                                                                         |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `has_metadata:false added_time:<=30m`                              | Magnet links that are still fetching metadata after 30 minutes, which usually means nobody is sharing them.                         |
| `announcing_to_trackers:true -has:current_tracker added_time:<=1h` | Torrents that should be using trackers but have had no tracker respond in over an hour. This points to tracker or network problems. |
| `moving_storage:true OR state:checking_files,checking_resume_data` | Torrents busy with disk work; either being moved or rechecked.                                                                      |
| `flags:paused,~auto_managed`                                       | Torrents that have been manually paused.                                                                                            |
| `flags:sequential_download state:downloading`                      | Downloads in sequential mode, usually because streaming.                                                                            |

### Stalled and dead

| Query                                                                                                 | Description                                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `state:downloading download_payload_rate:0 (last_download:>1h OR -has:last_download) added_time:<=1h` | Stalled downloads: nothing received for an hour, or ever. The added_time filter skips torrents that were only just added. |
| `progress:>=95 is_finished:false`                                                                     | Downloads stuck nere the end, often waiting for the last (rare) pieces.                                                   |
| `is_finished:false num_seeds:0 (last_seen_complete:<=14d OR -has:last_seen_complete)`                 | Likely dead torrents: no connected seeds, and no complete copy seen in two weeks, or ever.                                |

### Seeding and cleanup

| Query                                                                      | Description                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is_finished:true ratio_real:<1 seeding_duration:<3d`                      | Private-tracker hit-and-run protection: finished torrents that haven't paid back their download yet and have seeded less than three days. Don't remove these. It uses `ratio_real` so a cross-seed doesn't hide a real deficit. |
| `is_seeding:true (last_upload:>30d OR -has:last_upload) added_time:<=30d`  | Seeds nobody has downloaded from in a month, or ever, that have been around at least that long. These are good candidates for freeing space.                                                                                    |
| `is_seeding:true (ratio:>=2 OR seeding_duration:>4w) -$userdata.tags:keep` | Torrents that have done their part (ratio 2 or a month of seeding), excluding anything tagged keep. A typical auto-removal rule.                                                                                                |

## Fields

### General and tracker

| Field             | Kind       | Description                                                                                    | Example                       |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------- | ----------------------------- |
| `errc`            | `Bool`     | True if the torrent is in an error state.                                                      | `errc:true`                   |
| `save_path`       | `Text`     | Directory where the torrent data is stored.                                                    | `save_path:/mnt/media`        |
| `name`            | `Text`     | Name of the torrent. Plain values match substrings, `=` matches the whole name, `*` is a glob. | `name:=*.iso`                 |
| `next_announce`   | `Duration` | Time until the next tracker announce. Empty when none is scheduled.                            | `next_announce:<5m`           |
| `current_tracker` | `Text`     | URL of the tracker currently in use. Empty if none has responded.                              | `current_tracker:example.org` |

### Transfer totals (sizes)

| Field                    | Kind   | Description                                                              | Example                          |
| ------------------------ | ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `total_download`         | `Size` | Bytes downloaded this session, including protocol overhead.              | `total_download:>1gb`            |
| `total_upload`           | `Size` | Bytes uploaded this session, including protocol overhead.                | `total_upload:>500mb`            |
| `total_payload_download` | `Size` | Bytes of torrent data downloaded this session, excluding overhead.       | `total_payload_download:>1gib`   |
| `total_payload_upload`   | `Size` | Bytes of torrent data uploaded this session, excluding overhead.         | `total_payload_upload:>10gb`     |
| `total_failed_bytes`     | `Size` | Bytes downloaded that failed the hash check.                             | `total_failed_bytes:>0`          |
| `total_redundant_bytes`  | `Size` | Bytes downloaded more than once, or thrown away.                         | `total_redundant_bytes:>100mb`   |
| `total_done`             | `Size` | Bytes of verified data on disk, including files that where not selected. | `total_done:>2gb`                |
| `total`                  | `Size` | Total size of the torrent                                                | `total:1gb..10gb`                |
| `total_wanted_done`      | `Size` | Bytes of verified data for the selected files.                           | `total_wanted_done:>1gb`         |
| `total_wanted`           | `Size` | Total size of the selected files.                                        | `total_wanted:<700mb`            |
| `total_wanted_remaining` | `Size` | Bytes left to download for the selected files.                           | `total_wanted_remaining:<100mib` |
| `all_time_upload`        | `Size` | Total bytes uploaded for this torrent, across restarts.                  | `all_time_upload:>1tb`           |
| `all_time_download`      | `Size` | Total bytes downloaded for this torrent, across restarts.                | `all_time_download:>50gb`        |

### Dates

Use `YYYY-MM-DD`, `YYYY-MM-DDTHH:MM`, or relative times like `-1w`; a bare
relative time means "within the last ...".

| Field                | Kind   | Description                                                         | Example                                 |
| -------------------- | ------ | ------------------------------------------------------------------- | --------------------------------------- |
| `added_time`         | `Date` | When the torrent was added to the session.                          | `added_time:-7d`                        |
| `completed_time`     | `Date` | When the torrent finished downloading. Empty if it hasn't finished. | `completed_time:2026-10-01..2026-10-05` |
| `last_seen_complete` | `Date` | Last time a complete copy was seen in the swarm.                    | `last_seen_complete:<-30d`              |

### Progress and queue

| Field            | Kind      | Description                                                                                      | Example             |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------ | ------------------- |
| `progress`       | `Percent` | Download progress as a percentage from 0 to 100.                                                 | `progress:>=90`     |
| `queue_position` | `Number`  | Position in the libtorrent download queue. Empty for torrents that aren't queued, such as seeds. | `queue_position:<3` |

### Rates

Bytes per second; units such as `kb`, `mib` with an optional `/s` are supported.

| Field                   | Kind   | Description                                 | Example                         |
| ----------------------- | ------ | ------------------------------------------- | ------------------------------- |
| `download_rate`         | `Rate` | Current download speed, including overhead. | `download_rate:>1mb/s`          |
| `upload_rate`           | `Rate` | Current upload speed, including overhead.   | `upload_rate:>500kb/s`          |
| `download_payload_rate` | `Rate` | Current download speed, excluding overhead. | `download_payload_rate:>0`      |
| `upload_payload_rate`   | `Rate` | Current upload speed, excluding overhead.   | `upload_payload_rate:>100kib/s` |

### Peers and swarm

| Field                | Kind     | Description                                                | Example                |
| -------------------- | -------- | ---------------------------------------------------------- | ---------------------- |
| `num_seeds`          | `Number` | Number of connected peers that are seeding.                | `num_seeds:>=1`        |
| `num_peers`          | `Number` | Number of connected peers, including seeds.                | `num_peers:0`          |
| `num_complete`       | `Number` | Number of seeds reported by the tracker.                   | `num_complete:<3`      |
| `num_incomplete`     | `Number` | Number of downloaders reported by the tracker.             | `num_incomplete:>50`   |
| `list_seeds`         | `Number` | Number of known seeds, connected or not.                   | `list_seeds:>10`       |
| `list_peers`         | `Number` | Number of known peers, connected or not.                   | `list_peers:>100`      |
| `connect_candidates` | `Number` | Number of known peers that can still be connected to.      | `connect_candidates:0` |
| `num_pieces`         | `Number` | Number of pieces that has been downloaded and verified.    | `num_pieces:>1000`     |
| `block_size`         | `Number` | The size of a block, in bytes, as requested from peers.    | `block_size:16384`     |
| `num_uploads`        | `Number` | Number of peers currently unchoked.                        | `num_uploads:>4`       |
| `num_connections`    | `Number` | Number of open peer connections, including half-open ones. | `num_connections:>50`  |

### Limits and bandwidth

| Field                  | Kind     | Description                                                               | Example                   |
| ---------------------- | -------- | ------------------------------------------------------------------------- | ------------------------- |
| `uploads_limit`        | `Number` | Maximum unchoked peers for this torrent.                                  | `uploads_limit:<10`       |
| `connections_limit`    | `Number` | Maximum peer connections for this torrent.                                | `connections_limit:<100`  |
| `upload_limit`         | `Number` | Upload speed limit for this torrent, or empty if unlimited.               | `upload_limit:<1mb/s`     |
| `download_limit`       | `Number` | Download speed limit for this torrent, or empty if unlimited.             | `has:download_limit`      |
| `up_bandwidth_queue`   | `Number` | Number of peers waiting for upload bandwidth.                             | `up_bandwidth_queue:>0`   |
| `down_bandwidth_queue` | `Number` | Number of peers waiting for download bandwidth.                           | `down_bandwidth_queue:>0` |
| `seed_rank`            | `Number` | Seeding priority used by the auto-manager; higher ranks are seeded first. | `seed_rank:>1000`         |

### State and status flags

| Field                    | Kind    | Description                                                                                                              | Example                        |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| `state`                  | `State` | Current state: `checking_files`, `downloading_metadata`, `downloading`, `finished`, `seeding` or `checking_resume_data`. | `state:downloading,seeding`    |
| `is_seeding`             | `Bool`  | True if the torrent has all pieces and is seeding.                                                                       | `is_seeding:true`              |
| `is_finished`            | `Bool`  | True if all selected files are downloaded.                                                                               | `is_finished:yes`              |
| `has_metadata`           | `Bool`  | True if the torrent has metadata (magnet links has no metadata)                                                          | `has_metadata:false`           |
| `has_incoming`           | `Bool`  | True if a peer has connected to us for this torrent.                                                                     | `has_incoming:true`            |
| `moving_storage`         | `Bool`  | True while the torrent's files are being moved to a new path.                                                            | `moving_storage:true`          |
| `announcing_to_trackers` | `Bool`  | True if the torrent announces to its trackers.                                                                           | `announcing_to_trackers:false` |
| `announcing_to_lsd`      | `Bool`  | True if the torrent announces to Local Service Discovery.                                                                | `announcing_to_lsd:true`       |
| `announcing_to_dht`      | `Bool`  | True if the torrent announces to the DHT.                                                                                | `announcing_to_dht:false`      |
| `info_hash`              | `Hash`  | The torrent's v1 or v2 info hash. Any hash prefix of 4-64 hex characters will match.                                     | `info_hash:a1b2c3d4`           |

### Activity durations

Duration fields accepts suffixes `s`, `m`, `h`, `d`, `w`, `mo`, `y`.

| Field               | Kind       | Description                                                         | Example                      |
| ------------------- | ---------- | ------------------------------------------------------------------- | ---------------------------- |
| `last_upload`       | `Duration` | Time since data was last uploaded. Empty if never.                  | `last_upload:>7d`            |
| `last_download`     | `Duration` | Time since data was last downloaded. Empty if never.                | `last_download:>1d`          |
| `active_duration`   | `Duration` | Total time the torrent has been active (not paused).                | `active_duration:>30d`       |
| `finished_duration` | `Duration` | Total time the torrent has been in the `finished` state.            | `finished_duration:>1w`      |
| `seeding_duration`  | `Duration` | Total time the torrent has been seeding.                            | `seeding_duration:>2w`       |
| `flags`             | `Flags`    | The libtorrent torrent flags. Lists all matched flags. `~` negates. | `flags:auto_managed,~paused` |

### Porla fields

Fields that are useful but not part of the libtorrent torrent status.

| Field                | Kind       | Description                                                                                                                                                                                            | Example                      |
| -------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| `eta`                | `Duration` | Estimated time left based on the remaining selected bytes and the current download speed. Empty if finished or no download speed.                                                                      | `eta:<1h`                    |
| `ratio`              | `Number`   | Upload ratio (all-time upload ÷ all-time download). Uses the data held on disk instead when the download counter is missing or very small, e.g for seed-mode or cross-seeded torrents. Capped at 9999. | `ratio:>=2`                  |
| `ratio_real`         | `Number`   | Upload ratio from this client's own counters only, without any fallback.                                                                                                                               | `ratio_real:<1`              |
| `$userdata.category` | `Text`     | The torrent's category, or empty if not set.                                                                                                                                                           | `$userdata.category:=sonarr` |
| `$userdata.tags`     | `Tag`      | The torrent's tags. Matches if any tag equals a listed value; `*` globs work.                                                                                                                          | `$userdata.tags:hd,4k`       |


## Syntax

A query is a list of terms. Terms next to each other must all match.

| Syntax                     | Meaning                                         |
| -------------------------- | ----------------------------------------------- |
| `a b`, `a AND b`, `a && b` | both `a` and `b`                                |
| `a OR b`, `a \|\| b`       | either `a` or `b`                               |
| `-a`, `!a`, `NOT a`        | not `a`                                         |
| `( ... )`                  | grouping                                        |
| `field:value`              | compare a field, see [Fields](#fields)          |
| `word`                     | free text, see [Free text](#free-text)          |
| `"some words"`             | an exact phrase. Use `\"` for a quote inside it |

`NOT` binds tighter than `AND`, which binds tighter than `OR`. So
`debian OR ubuntu server` means `debian OR (ubuntu AND server)`.

:::warning

The keywords `AND`, `OR` and `NOT` must be written in upper case. A lower case
`and` or `or` is searched for as text, so `rock and roll` finds names
containing all three words.

:::

### Free text

A word or a quoted phrase without a field searches the torrent name. The
search ignores case for ASCII letters (`ubuntu` matches `Ubuntu`) but not for
other letters (`pårla` does not match `Pårla`).

A word of 8 to 64 hexadecimal characters also matches torrents whose v1 or v2
info hash starts with it.

Some characters have a meaning in PQL: `( ) " < > = ! :` and a leading `-`.
Quote a search that contains them, for example `"http://example.com"` or
`"hello!"`.

### Comparing fields

Write a field name, a colon and a value, with no spaces: `total:>1gb`. An
optional operator goes between the colon and the value.

| Operator | Meaning                                   |
| -------- | ----------------------------------------- |
| _none_   | contains (text), equals (everything else) |
| `=`      | equals                                    |
| `>`      | greater than                              |
| `>=`     | greater than or equal to                  |
| `<`      | less than                                 |
| `<=`     | less than or equal to                     |

Values can also be written as:

| Form         | Meaning                                                             | Works for                                            |
| ------------ | ------------------------------------------------------------------- | ---------------------------------------------------- |
| `a,b,c`      | any of these values                                                 | text, `tag`, `hash`, `is`, `has`                     |
| `a..b`       | a range, including both ends                                        | numbers, sizes, rates, durations, percentages, dates |
| `ubuntu*iso` | a pattern where `*` matches anything. It must match the whole value | text, `tag`                                          |
| `"a,b"`      | the literal value, with no lists, ranges or patterns                | everything                                           |

A field that has no value for a torrent never matches. For example `eta:<1h`
never matches a torrent without a known ETA, and `-eta:<1h` always does.
