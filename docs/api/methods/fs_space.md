# `fs.space`

Checks the available space for a given path. Additionally, if the path is on a
block device with quotas enabled, the quota information for the current user is
queried as well.

## Request

```json
{
  "path": "/home/bob"
}
```

## Response

```json
{
  // Free space available to a non-privileged process (may be equal or less than free)
  "available": 48241639424,

  // Total size of the filesystem, in bytes
  "capacity": 50906857472,

  // Free space on the filesystem, in bytes
  "free": 50860769280,

  // If the block device does not have quotas enabled, this property will be null.
  "quota": {

    // Absolute limit on disk quota blocks alloc
    "blocks_limit_hard": 55000,

    // Preferred limit on disk quota blocks
    "blocks_limit_soft": 50000,

    // Time limit for excessive disk use
    "blocks_time": 0,

    // Current number of allocated inodes
    "current_inodes": 9,

    // Current occupied space (in bytes)
    "current_space": 23015424,

    // Maximum number of allocated inodes
    "inodes_limit_hard": 0,

    // Preferred inode limit
    "inodes_limit_soft": 0,

    // Time limit for excessive files
    "inodes_time": 0
  }
}
```
