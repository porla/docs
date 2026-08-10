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

### `PORLA_HTTP_AUTH_DISABLED_YES_REALLY`

Set this to exactly `true` in order to disable HTTP authentication. Not
recommended, but can be used if an auth proxy is used.

### `PORLA_HTTP_BASE_PATH`

Set to a value that prefixes the HTTP base path for all Porla HTTP endpoints.

For example, setting this to `/porla` will make the UI available at `/porla`
and the API will be located at `/porla/api/v1/jsonrpc` for example.

### `PORLA_HTTP_HOST`

The HTTP host that Porla will listen on. If not set, will default to
_127.0.0.1_.

### `PORLA_HTTP_METRICS_ENABLED`

Enables or disables the HTTP `/metrics` endpoint where Prometheus (or similar)
can scrape Porla metrics.

Can be either `true` or `false`. If not specified, defaults to `true`.

### `PORLA_HTTP_PORT`

The HTTP port that Porla will listen on. If not set, will default to _1337_.

Yes, really.

### `PORLA_HTTP_WEBUI_ENABLED`

Enables or disables the web UI. If disabled, Porla will not serve a web UI at
the root path, and no web UI will be downloaded as part of the first-time start
up.

Can be either `true` or `false`. If not specified, defaults to `true`.

### `PORLA_HTTP_WEBUI_FILE`

The path to a zip file with a packaged web UI.

### `PORLA_HTTP_WEBUI_REPOSITORY`

The name of a GitHub repository that packages web UI releases. The repository
must use GitHub releases and attach a zip file as an asset to the release.

Defaults to `porla/web`.

### `PORLA_LOG_LEVEL`

The minimum log level that Porla should log. Defaults to `info`. Valid values
are,

 * `trace`
 * `debug`
 * `info`
 * `warning`
 * `error`
 * `fatal`

### `PORLA_MMDB_FILE`

The path to a MMDB file which is used for the
[`mmdb.lookup`](./api/jsonrpc/methods/mmdb_lookup.md) method. It is up to the
user to source a compatible MMDB file.

Porla does not use the MMDB data for anything more than providing the JSONRPC
APIs for doing lookups.

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

### `--http-metrics-enabled`

See [`PORLA_HTTP_METRICS_ENABLED`](#porla_http_metrics_enabled).

### `--http-port`

See [`PORLA_HTTP_PORT`](#porla_http_port).

### `--http-webui-enabled`

See [`PORLA_HTTP_WEBUI_ENABLED`](#porla_http_webui_enabled).

### `--http-webui-file`

See [`PORLA_HTTP_WEBUI_FILE`](#porla_http_webui_file).

### `--http-webui-repository`

See [`PORLA_HTTP_WEBUI_REPOSITORY`](#porla_http_webui_repository).

### `--log-level`

See [`PORLA_LOG_LEVEL`](#porla_log_level).

### `--mmdb-file`

See [`PORLA_MMDB_FILE`](#porla_mmdb_file).

### `--secret-key`

See [`PORLA_SECRET_KEY`](#porla_secret_key).

### `--state-dir`

See [`PORLA_STATE_DIR`](#porla_state_dir).
