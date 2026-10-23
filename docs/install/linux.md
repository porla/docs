---
sidebar_position: 1
---

# Linux

Porla builds native linux-amd64 binaries for all releases which makes it easy
to run it in Linux environments using something like Systemd.

## Get started

- Download the [latest release binary](https://github.com/porla/porla/releases/latest/download/porla-linux-amd64).
- Either run the binary directly, or see below on how to run it as a service.

## Example Systemd unit

```systemd
[Unit]
Description=porla

[Service]
StateDirectory=porla
Environment=PORLA_STATE_DIR=/var/lib/porla
ExecStart=/usr/bin/porla
User=porla
Group=porla

[Install]
WantedBy=multi-user.target
```

### Notes on ulimit

If you run into issues with Porla crashing when having many sessions, you can try to increase the number of open file descriptors with _ulimit_, such as,

```sh
ulimit -n 102400
```
