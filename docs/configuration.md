---
sidebar_position: 5
---

# Configuration

Porla can be configured in various ways - either via environment variables,
command line arguments, or a configuration file.

## Environment variables

### `PORLA_CONFIG_FILE`

Path to a configuration file to use.

### `PORLA_DB`

Path to a database file to store state in. If the file does not exist, Porla
will try to create it.

_Can be set to `:memory:` if an in-memory database should be used._

### `PORLA_HTTP_BASE_PATH`

Set to a value that prefixes the HTTP base path for all Porla HTTP endpoints.

For example, setting this to `/porla` will make the UI available at `/porla`
and the API will be located at `/porla/api/v1/jsonrpc` for example.

### `PORLA_HTTP_HOST`

The HTTP host that Porla will listen on. If not set, will default to
_127.0.0.1_.

### `PORLA_HTTP_PORT`

The HTTP port that Porla will listen on. If not set, will default to _1337_.

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

### `PORLA_SECRET_KEY`

The secret key that Porla uses when generating and validating authentication
tokens. Can be any string value, but a pass phrase or long random string is
recommended.

Use `openssl rand -hex 32` to generate one.

If not set, Porla will generate a random secret key every application startup,
meaning JWT values will be invalidated each time.

### `PORLA_STATE_DIR`

The path to a directory where Porla will save its state.

## Command line arguments

### `--config-file`

See [`PORLA_CONFIG_FILE`](#porla_config_file).

### `--db`

See [`PORLA_DB`](#porla_db).

### `--http-base-path`

See [`PORLA_HTTP_BASE_PATH`](#porla_http_base_path).

### `--http-host`

See [`PORLA_HTTP_HOST`](#porla_http_host).

### `--http-port`

See [`PORLA_HTTP_PORT`](#porla_http_port).

### `--log-level`

See [`PORLA_LOG_LEVEL`](#porla_log_level).

### `--secret-key`

See [`PORLA_SECRET_KEY`](#porla_secret_key).

### `--state-dir`

See [`PORLA_STATE_DIR`](#porla_state_dir).
