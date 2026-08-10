# `mmdb.lookup`

Performs a lookup against the configured MMDB file with the given values. This
is not used by Porla internally but is purely for the web UI if it wants to do
IP lookups.

:::info

Porla does not do any processing of the response format. The value for each
result is dependent on how the result from the MMDB lookup is formatted.

All Porla does is converting it from the MMDB structure to a JSON value.

:::

## Request

```json
{
  "values": [
    "8.8.8.8"
  ]
}
```

## Response

```json
{
  "results": {
    "8.8.8.8": unknown
  }
}
```
