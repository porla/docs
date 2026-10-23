---
sidebar_position: 5
---

# Configuration

Porla can be configured either via environment variables or command line
arguments.

## Environment variables

### `PORLA_DB`

Path to a database file to store state in. If the file does not exist, Porla
will try to create it.

_Can be set to `:memory:` if an in-memory database should be used._

### `PORLA_HTTP_ALLOWED_HOSTS`

If Porla runs behind a reverse proxy, set this to the host name you use to
access Porla. Multiple hosts can be specified separated by a comma.

_Only needed when Porla listens on 127.0.0.1_.

### `PORLA_HTTP_BASE_PATH`

Set to a value that prefixes the HTTP base path for all Porla HTTP endpoints.

For example, setting this to `/porla` will make the UI available at `/porla`
and the API will be located at `/porla/api/v1/jsonrpc` for example.

### `PORLA_HTTP_HOST`

The HTTP host that Porla will listen on. If not set, will default to
_127.0.0.1_.

### `PORLA_HTTP_PORT`

The HTTP port that Porla will listen on. If not set, will default to _1337_.
Must be a value between 1-65535.

Yes, really.

### `PORLA_LOG_LEVEL`

The minimum log level that Porla should log. Defaults to `info`. Valid values
are,

 * `trace`
 * `debug`
 * `info`
 * `warning`
 * `error`
 * `fatal`

### `PORLA_STATE_DIR`

The path to a directory where Porla will save its state. It will be created if
missing.

## Command line arguments

### `--db`

See [`PORLA_DB`](#porla_db).

### `--http-allowed-hosts`

See [`PORLA_HTTP_ALLOWED_HOSTS`](#porla_http_allowed_hosts).

### `--http-base-path`

See [`PORLA_HTTP_BASE_PATH`](#porla_http_base_path).

### `--http-host`

See [`PORLA_HTTP_HOST`](#porla_http_host).

### `--http-port`

See [`PORLA_HTTP_PORT`](#porla_http_port).

### `--log-level`

See [`PORLA_LOG_LEVEL`](#porla_log_level).

### `--state-dir`

See [`PORLA_STATE_DIR`](#porla_state_dir).
