# MMDB

Porla has basic MMDB support using the JSONRPC method
[`mmdb.lookup`](../api/jsonrpc/methods/mmdb_lookup.md).

Using the MMDB file, the web UI can do IP geolocation for the peer list. It is
purely a client-side thing, and Porla itself only provides the APIs.

## Setup

To set up MMDB, you need to source an MMDB file such as one from MaxMind or
DB-IP and make it accessible to Porla.

The path to the MMDB file is the KV key `porla.mmdb.path`, which can be set from
the web UI settings. Updates to this value will reload the database immediately.

If you set the path to null or an empty string, it will be unloaded.
