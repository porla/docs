# `sys.versions`

Gets version information about Porla and (most) of the third-party
dependencies.

## Request

```json
{}
```

## Response

```json
{
  "porla": {
    "branch",
    "commitish",
    "version"
  },
  "libtorrent": {
    "revision",
    "version"
  },
  "boost": {
    "version"
  },
  "curl": {
    "version"
  },
  "libzip": {
    "version"
  },
  "maxminddb": {
    "version",
  },
  "nlohmann_json": {
    "version"
  },
  "openssl": {
    "release_date",
    "version",
    "version_text"
  },
  "sqlite": {
    "source_id",
    "version"
  }
}
```
