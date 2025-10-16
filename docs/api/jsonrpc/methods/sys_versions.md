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
  "boost": {
    "version": "1.84.0"
  },
  "libtorrent": {
    "revision": "6e1587799",
    "version": "2.0.11.0"
  },
  "nlohmann_json": {
    "version": "3.11.2"
  },
  "openssl": {
    "release_date": "5 Aug 2025",
    "version": "3.5.2",
    "version_text": "OpenSSL 3.5.2 5 Aug 2025"
  },
  "porla": {
    "branch": "feat-sqlite-sessions",
    "commitish": "b2d0125fbb8a1f4573bcced1a46d6a616c6cdaad",
    "version": "0.0.0"
  },
  "sqlite": {
    "source_id": "2025-05-07 10:39:52 17144570b0d96ae63cd6f3edca39e27ebd74925252bbaf6723bcb2f6b4861fb1",
    "version": "3.49.2"
  },
  "tomlplusplus": {
    "version": "3.4.0"
  }
}
```
