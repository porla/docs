---
sidebar_position: 4
---

# JSONRPC

Porla has a JSONRPC API at `/api/v1/jsonrpc` which allows full control of all
parts of Porla. most of the API requires [authentication](../auth.md); some
methods like `sys.status`, `auth.init` and `auth.login` can be called without
anonymously.

## Data formats

The JSONRPC API uses info hashes quite extensively. Porla will always return an
info hash in the format `[ "v1", "v2" ]`, that is an array of the v1 and v2
hash, with `null` for the missing half, so both pure v1, v2 and hybrid info
hashes are well represented.

Sending an info hash accepts the following,

 - a 40-character hex string (v1);
 - a 64-character hex string (v2);
 - `[v1, null]`, `[null, v2]`, `[v1, v2]`

Invalid hex characters return `-32603 Internal error`, with `data` like "info
hash ... contains invalid hex characters".

## Requests and responses

Methods with nothing to reply (such as `torrents.pause` etc) return with
`"result": null`.

## Example

This call uses `curl` to get the versions of Porla and its various dependencies.

```
curl -H "Authorization: Bearer <token>" \
    -H "Content-Type: application/json" \
    -d '{ "jsonrpc": "2.0", "id": 1, "method": "sys.versions", "params": {} }' \
    http://localhost:1337/api/v1/jsonrpc
```
