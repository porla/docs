---
sidebar_position: 4
---

# JSONRPC

Porla has a JSONRPC API at `/api/v1/jsonrpc` which allows full control of all
parts of Porla. The API requires [authentication](../auth.md).

## Data formats

The JSONRPC API uses info hashes quite extensively. Porla will always return an
info hash in the format `[ "v1", "v2" ]`, that is an array of the v1 and v2
hash.

You can, however, send the info hash as a regular string and Porla will try to
parse it to either a v1 or v2 info hash depending on the string length.

## Example

This call uses `curl` to get the versions of Porla and its various dependencies.

```
curl -H "Authorization: Bearer <JWT>" \
    -H "Content-Type: application/json" \
    -d '{ "jsonrpc": "2.0", "method": "sys.versions", "params": {} }' \
    http://localhost:1337/api/v1/jsonrpc
```
