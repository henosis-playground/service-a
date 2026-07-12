# service-a

Tiny dependency-free Node 22 HTTP service for the Henosis PoC.

- `GET /healthz` returns `ok`
- `GET /` returns `{"service":"service-a"}`
- Live verification exercises the chained queue.

Run locally:

```sh
node src/server.js
```
yohohoh

Live e2e marker: gated merge happy path (2026-07-10).
The live runner is verified against the D23 platform image.

Live flip legacy-path verification: 2026-07-12.
Core preview push advancement verified on the same live PR.
