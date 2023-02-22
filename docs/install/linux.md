---
sidebar_position: 1
---

# Linux

Porla builds native linux-amd64 binaries for all releases which makes it easy
to run it in Linux environments using something like Systemd.

## Get started

* Download the [latest release binary](https://github.com/porla/porla/releases/latest/download/porla).
* Either run the binary directly, or see below on how to run it as a service.

## Example Systemd unit

```systemd
[Unit]
Description=porla

[Service]
Environment=PORLA_DB=/var/lib/porla/porla.sqlite
ExecStart=/usr/bin/porla
Group=porla
User=porla

[Install]
WantedBy=multi-user.target
```
