import { defineComponent, envName, h } from "@henosis/platform-mock";

export default defineComponent({
  outputs: h.object({
  }),
  build: (_ctx, env) => ({
    api: `https://service-a-${envName(env)}.henosis.example/api/v2/healthz`,
  }),
});
