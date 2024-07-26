---
sidebar_position: 2
---

# Docker

Each version of Porla is released as a Docker image based on Alpine Linux.


## Getting started

To give Porla a spin, just run the Docker image.

```shell
docker run -p 1337:1337 ghcr.io/porla/porla
```


## Mounting volumes

By default, Porla stores its data at `/var/lib/porla`. It is very recommended
to mount a volume at this path.

Also, any downloads will have to be stored somewhere, and it is a good idea to
mount a volume for downloads as well.

```shell
docker run -d --name porla -p 1337:1337 -v /host/path:/dl -v /another/path:/var/lib/porla --restart=unless-stopped ghcr.io/porla/porla
```


## Using `docker compose`

A better way of managing your Porla instance is by utilizing `docker compose`.

This is an example `docker-compose.yaml` file. Refer to the config docs to
learn how to configure Porla properly.

```yaml
services:
  porla:
    container_name: porla
    image: ghcr.io/porla/porla
    #user : "1000:1000" # Uncomment this line if you want run Porla with a different PUID:PGID
    ports:
      - "1337:1337"
    restart: unless-stopped
    volumes:
      - "/host/path:/dl"
      - "/another/path:/var/lib/porla"
```

Run with `docker compose up`.
