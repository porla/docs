# `porla_sessions`

Access sessions and their torrents.

## Exports

### <code>count(): number</code>

<Since>v1.0</Since>

Returns the number of loaded sessions in Porla. If a session fails to load for
some reason, it will not be included in this count.


### <code>default(): [PoSessionHandle](../types/posessionhandle.md) | nil</code>

<Since>v1.0</Since>

Returns the _default_ session - i.e the one marked with `is_default` in the
database. If there is no default session, or if the default session is not
loaded, this function will return nil.


### <code>get(id: number): [PoSessionHandle](../types/posessionhandle.md) | nil</code>

<Since>v1.0</Since>

Gets a session by its id. If the session is not loaded, this function will
return nil.

#### Example

```lua
local sessions = require("porla_sessions")

local some_session = sessions.get(17)

if some_session ~= nil then
    print(some_session.name)
end
```


### <code>list(): [PoSessionsIterator](../types/posessionsiterator.md)</code>

<Since>v1.0</Since>

Returns an iterator to let you loop through all loaded sessions.

#### Example

```lua
local sessions = require("porla_sessions")

for session in sessions.list() do
    print(session.name)
end
```


### <code>metrics(): table</code>

<Since>v1.0</Since>

Returns the available libtorrent session metrics as a table. Each metric has a
field `type` that is either `counter` or `gauge` depending on the metric type.

This can be used in coordination with the `session.stats` event to get metrics
for a specific session.

#### Example

```lua
local sessions = require("porla_sessions")
local metrics  = sessions.metrics()

print(metrics["tracker.num_queued_tracker_announces"].type) -- prints "counter"
```
