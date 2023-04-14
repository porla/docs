# `Cron`

The `Cron` trigger schedules a workflow based on a cron expression.

The expression supports a _seconds_ field to allow for sub-minute resolution
scheduling of workflows. The general form is the following (with _years_ being)
optional:

```
<seconds> <minutes> <hours> <days of month> <months> <days of week> <years>
```

## Configuration

 * `expression` - a string with the cron expression to use as the schedule for
   this workflow.

## Usage

```lua
local Cron = require "porla.triggers.Cron"
```

### Example

```lua
Cron:new{
  expression = "*/5 * * * * *"
}
```
