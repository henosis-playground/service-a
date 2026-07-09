import { defineComponent, envName, h } from "@henosis/platform-mock";

export default defineComponent({
  outputs: h.object({
    api: h.url(),
    port: h.number(),
    test: h.string(),
  }),
  build: (_ctx, env) => ({
    api: `https://service-a-${envName(env)}.henosis.example/api/v2/healthz`,
    port: 443,
    test: "hi",
  }),
});
