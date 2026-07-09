import { defineComponent, envName, h } from "@henosis/platform-mock";

export default defineComponent({
  outputs: h.object({
    apiUrl: h.url(),
    port: h.number(),
  }),
  build: (_ctx, env) => ({
    apiUrl: `https://service-a-${envName(env)}.henosis.example/api/v2/healthz`,
    port: 443,
  }),
});
