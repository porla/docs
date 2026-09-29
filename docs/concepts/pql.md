---
sidebar_position: 5
---

# PQL

PQL (short for Porla Query Language) is a small query language built into
Porla for finding torrents. The same syntax works in the web UI search field,
the [`torrents.list`](../api/jsonrpc/methods/torrents_list.md) `query` filter
and in plugins through [`PoQuery`](../plugins/types/poquery.md).

## Examples

- `ubuntu` - torrents with _ubuntu_ in their name.
- `ubuntu iso` - torrents with both _ubuntu_ and _iso_ in their name.
- `is:seeding age:>1w` - torrents that are seeding and were added more than a
  week ago.
- `size:>10gb -tag:keep` - torrents larger than 10GB without the tag _keep_.
- `category:movies,tv ratio:<1` - torrents in either category with a ratio
  below 1.
- `added:>=2026-01-01 is:downloading` - torrents added 2026 that are still
  downloading.
- `3f9aac15` - the torrent whose info hash starts with `3f9aac15`, as printed
  in the Porla log.

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

Write a field name, a colon and a value, with no spaces: `size:>1gb`. An
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

## Fields

### Text

Text fields match when the value is contained in the field, ignoring ASCII
case. With `=`, the whole field must match. Only `=` is allowed as an operator.

| Field      | Description                                                    | Example                                             |
| ---------- | -------------------------------------------------------------- | --------------------------------------------------- |
| `name`     | The name of the torrent.                                       | `debian` or `name:="ubuntu-24.04-desktop-amd64.iso` |
| `path`     | The path on disk where the torrent is stored.                  | `path:/downloads/tv`                                |
| `category` | The category of the torrent, if it has one.                    | `category:movies,tv`                                |
| `tracker`  | The URL of the tracker the torrent is currently announcing to. | `tracker:example.org`                               |


### `tag`

Matches torrents that have a tag equal to the value, ignoring ASCII case. Use
a pattern to match part of a tag.

Use a list for torrents with either tag, and two terms for torrents with both.

```
tag:keep
tag:keep,archive
tag:keep tag:archive
tag:arch*
```

### `hash`

Matches torrents whose v1 or v2 info hash starts with the value. The value
must be 4 to 64 hexadecimal characters.

```
hash:3f9aac15
hash:3f9aac158c7de8dfcab171ea58a17aabdf7fbc93
```

### Sizes

| Field        | Description                                  |
| ------------ | -------------------------------------------- |
| `size`       | The total size of the wanted files.          |
| `downloaded` | The number of bytes downloaded and verified. |
| `uploaded`   | The number of bytes uploaded, in total.      |
| `remaining`  | The number of wanted bytes left to download. |

Sizes accept the units below. They are all binary, so `1kb` is 1024 bytes.
Units ignore case, and a value without a unit is in bytes. Decimals are
allowed, as in `1.5gb`.

| Unit             | Bytes |
| ---------------- | ----- |
| `b`              | 1     |
| `k`, `kb`, `kib` | 1024  |
| `m`, `mb`, `mib` | 1024² |
| `g`, `gb`, `gib` | 1024³ |
| `t`, `tb`, `tib` | 1024⁴ |
| `p`, `pb`, `pib` | 1024⁵ |

```
size:>1gb
size:1gb..10gb
remaining:<500mb
```

### Rates

| Field                 | Description                                                                  |
| --------------------- | ---------------------------------------------------------------------------- |
| `dl`, `download_rate` | The current download rate, in bytes per second, excluding protocol overhead. |
| `ul`, `upload_rate`   | The current upload rate, in bytes per second, excluding protocol overhead.   |

Rates use the size units, optionally followed by `/s`.

```
dl:>1mb
ul:>500kb/s
ul:0
```

### Durations

| Field           | Description                                      |
| --------------- | ------------------------------------------------ |
| `age`           | The time since the torrent was added.            |
| `eta`           | The estimated time until the download completes. |
| `active_time`   | The total time the torrent has been active.      |
| `seed_time`     | The total time the torrent has been seeding.     |
| `finished_time` | The total time the torrent has been finished.    |

A value without a unit is in seconds.

| Unit | Duration | Example             |
| ---- | -------- | ------------------- |
| `s`  | second   | `age:>50s`          |
| `m`  | minute   | `age:>5m`           |
| `h`  | hour     | `age:1h..2h`        |
| `d`  | day      | `seed_time:>4d`     |
| `w`  | week     | `finished_time:>1w` |
| `mo` | 30 days  | `active_time:>1mo`  |
| `y`  | 365 days | `eta:>1y`           |

### Numbers

| Field      | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| `progress` | The progress of the torrent, as a percentage from 0 to 100. |
| `ratio`    | Uploaded bytes divided by downloaded bytes.                 |
| `seeds`    | The number of connected seeds.                              |
| `peers`    | The number of connected peers.                              |
| `queue`    | The position in the queue.                                  |

`progress` accepts an optional `%` sign.

```
progress:<50
progress:>=99.5%
ratio:>=2
seeds:0
```

### Dates

| Field       | Description                                       |
| ----------- | ------------------------------------------------- |
| `added`     | When the torrent was added.                       |
| `completed` | When the torrent finished downloading, if it has. |

Write dates as `YYYY-MM-DD`, or `YYYY-MM-DDTHH:MM` to be exact to the minute.
Dates are in the time zone of the machine running Porla.

A date stands for the whole day, or the whole minute:

| Query                          | Matches                                |
| ------------------------------ | -------------------------------------- |
| `added:2026-01-01`             | any time on 1 January 2026             |
| `added:>2026-01-01`            | 2 January 2026 or later                |
| `added:>=2026-01-01`           | 1 January 2026 or later                |
| `added:<2026-01-01`            | 31 December 2025 or earlier            |
| `added:<=2026-01-01`           | 1 January 2026 or earlier              |
| `added:2026-01-01..2026-01-31` | any time in January 2026               |
| `added:2026-01-01T12:00`       | 12:00:00 to 12:00:59 on 1 January 2026 |

## Flags

Use `is:` to check the state of a torrent. Give several flags separated by
`,` to match any of them, as in `is:downloading,checking`.

| Flag             | Matches torrents that...                                                      |
| ---------------- | ----------------------------------------------------------------------------- |
| `is:downloading` | are downloading.                                                              |
| `is:seeding`     | have every piece and are seeding. Can be true while paused.                   |
| `is:finished`    | have every wanted piece, but not every piece, because some files are skipped. |
| `is:paused`      | are paused. This includes queued torrents.                                    |
| `is:queued`      | are paused by the queue, not by a user.                                       |
| `is:checking`    | are checking their files or resume data.                                      |
| `is:moving`      | are moving their files.                                                       |
| `is:private`     | are private torrents.                                                         |
| `is:stalled`     | are downloading but not receiving any data.                                   |
| `is:active`      | are downloading or uploading any data.                                        |

Use `has:` to check whether a torrent has a value.

| Flag           | Matches torrents that...                                                    |
| -------------- | --------------------------------------------------------------------------- |
| `has:category` | have a category.                                                            |
| `has:tags`     | have at least one tag.                                                      |
| `has:metadata` | have their metadata, for example a magnet link that has finished resolving. |
| `has:error`    | have an error.                                                              |
