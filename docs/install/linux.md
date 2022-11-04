---
sidebar_position: 1
---

# Linux

Porla builds native linux-amd64 binaries for all releases which makes it easy
to run it in Linux environments using something like Systemd.

To get started, just download Porla and put it somewhere safe, like `/usr/bin`.


## Example Systemd unit

```
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
