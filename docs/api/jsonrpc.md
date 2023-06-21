---
sidebar_position: 4
---

# JSONRPC

Porla has a JSONRPC API at `/api/v1/jsonrpc` which allows full control of all
parts of Porla. The API requires [authentication](./auth.md).

## Example

This call uses `curl` to get the versions of Porla and its various dependencies.

```
curl -H "Authorization: Bearer <JWT>" \
    -H "Content-Type: application/json" \
    -d '{ "jsonrpc": "2.0", "method": "sys.versions", "params": {} }' \
    http://localhost:1337/api/v1/jsonrpc
```
