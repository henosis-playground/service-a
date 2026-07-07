import { defineComponent } from "@henosis/sdk";

export default defineComponent("service-a", {
  binding: (b) => ({
    api: b.httpUrl(),
  }),
  build: (ctx) => {
    const db = ctx.postgres("main", { previews: "clone" });
    ctx.service({
      image: ctx.image,
      port: 8080,
      env: { DATABASE_URL: db.url },
    });
  },
});
