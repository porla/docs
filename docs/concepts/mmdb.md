# MMDB

Porla has basic MMDB support using the JSONRPC method
[`mmdb.lookup`](../api/jsonrpc/methods/mmdb_lookup.md).

Using the MMDB file, the web UI can do IP geolocation for the peer list. It is
purely a client-side thing, and Porla itself only provides the APIs.

## Setup

To set up MMDB, you need to source an MMDB file such as one from MaxMind or
DB-IP.

Then, copy the file to your Porla server, and set the MMDB path in the web UI
settings.
