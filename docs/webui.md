---
sidebar_position: 2
---

# Web UI

Porla does not currently bundle a web UI in the binary releases, but we do
provide an official one which can be configured separately and is the
recommended way of monitoring Porla.


## Get started

The web UI is a simple static site that can be hosted with nginx, Caddy, or any
other capable web server.

* Download the [latest release archive](https://github.com/porla/web/releases/latest).

* Extract the archive to eg. `/var/www/porla`.
  ```sh
  tar xvf webui-v<VERSION>.tar.gz -C /var/www/porla
  ```
* Set up a web server to serve this directory and also proxy all calls to
  `/api` to the Porla backend (see below).

## Configuration

You can use almost any web server to host the static web UI. Here are some
examples that serves the web UI and also proxies the `/api` correctly.

### Nginx

```
server {
  listen 80;
  root /var/www/porla;

  location / {
    try_files $uri $uri/ $uri.html /index.html;
  }

  location /api {
    proxy_pass http://localhost:1337;
  }
}
```

### Caddy

```
:80 {
        route /api/* {
                reverse_proxy localhost:1337
        }

        route /* {
                root * /var/www/porla
                try_files {path} /
                file_server
        }
}
```
