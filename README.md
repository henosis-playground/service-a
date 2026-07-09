# service-a

Lifecycle verification A.

Tiny dependency-free Node 22 HTTP service for the Henosis PoC.

- `GET /healthz` returns `ok`
- `GET /` returns `{"service":"service-a"}`
- Live verification exercises the chained queue.

Run locally:

```sh
node src/server.js
```
yohohoh
