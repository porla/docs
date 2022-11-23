---
sidebar_position: 2
---

# Docker

Docker is the recommended way of running Porla. All our images are based on
Alpine Linux which makes them quite small. By defaulting to Docker it becomes
very easy to run Porla plugins, which are separate Docker images which can be
orchestrated with `docker compose`.

## Getting started

To give Porla a spin, just run the Docker image.

```sh
$ docker run -p 1337:1337 ghcr.io/porla/porla
```

## Mounting volumes

By default, Porla stores its data at `/var/lib/porla`. It is very recommended
to mount a volume at this path.

Also, any downloads will have to be stored somewhere, and it is a good idea to
mount a volume for downloads as well.

```sh
$ docker run -p 1337:1337 -v /host/path:/dl -v /another/path:/var/lib/porla ghcr.io/porla/porla
```

## Using `docker compose`

A better way of managing your Porla instance is by utilizing `docker compose`.
This is the recommended way and if you plan on running any Porla plugins, this
will make it much easier.

This is an example `docker-compose.yaml` file. Refer to the config docs to
learn how to configure Porla properly.

```yaml
version: '3'

services:
  porla:
    image: ghcr.io/porla/porla
    ports:
      - "1337:1337"
    restart: unless-stopped
    volumes:
      - "/host/path:/dl"
      - "/another/path:/var/lib/porla"
```

Run with `docker compose up`.
