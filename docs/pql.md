---
sidebar_position: 11
---

# PQL

PQL (short for Porla Query Language) is a simple query language built into
Porla that makes it easy to query torrents.

## Types

There are three main types - `STRING`, `FLOAT` and `INT`.

### Strings

A string is any characters enclosed in `"`.

 * `"I'm a string"`

### Float

A floating point number consists of two integers separated by a `.` (dot).

 * `-3.14`
 * `133.7`

### Integer

A simple integer. Is backed by a 64 bit number (`std::int64_t`).

 * `1337`

## Number modifiers

For `INT` and `FLOAT` values, there are a few modifiers you can use to make
querying easier. For example, when filtering the `size` (which is the torrent
size in bytes) you can suffix the number value with a modifier like so,

```
size > 1gb
```

### Size suffixes

 * `kb`
 * `mb`
 * `gb`
 * `tb`
 * `pb`

### Speed suffixes

 * `kbps`
 * `mbps`
 * `gbps`

### Duration suffixes

 * `s` - seconds. Does nothing.
 * `m` - minutes. Multiplies the value with 60.
 * `h` - hours. Multiplies the value with 60 * 60.
 * `d` - days. Multiplies the value with 60 * 60 * 24.
 * `w` - weeks. Multiplies the value with 60 * 60 * 24 * 7.


## Fields

### `age`

The time in seconds since the torrent was added.

```
age > 1w
```

### `category`

The category that the torrent belongs to (if any).

```
category = "some-category"
```

### `download_rate`

The current download rate (including protocol traffic).

```
download_rate > 10mbps
```

### `name`

The name of the torrent.

```
name contains "debian"
```

### `progress`

The current progress of the torrent as a floating point number between 0 and 1.

```
progress < 0.1
```

### `ratio`

The current ratio of the torrent (uploaded bytes / downloaded bytes).

```
ratio > 1
```

### `save_path`

The path on disk where the torrent is stored.

```
save_path = "/dl"
```

### `size`

The total size of the files in the torrent.

```
size > 1gb
```

### `tags`

The tags currently attached to this torrent. Querying tags must be done with
the _contains_ operator.

```
tags contains "some-tag"
```

### `upload_rate`

The current upload rate (including protocol traffic).

```
upload_rate < 500kbps
```

## Operators

These are the comparison operators available.

 * `<` - less than.
 * `<=` - less than or equal to.
 * `>` - greater than.
 * `>=` - greater than or equal to.
 * `=` - equal.

There is also `contains` which works on string values to check if the provided
string exists in the value, or on string arrays (such as tags) to check if the
provided string is contained in the array.
