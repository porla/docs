---
sidebar_position: 5
---

# `GET /api/v1/system`

A simple endpoint that returns information about the currently running Porla
instance. It can be used to determine if Porla needs to be setup.

The `status` field can be either,

 * `ok`
 * `setup`

## Response

```json
{
  "status": "ok"
}
```
