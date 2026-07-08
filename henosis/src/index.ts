import { defineComponent, envName, h } from "@henosis/platform-mock";

export default defineComponent({
  outputs: h.object({
    api_url: h.url(),
  }),
  build: (_ctx, env) => ({
    api_url: `https://service-a-${envName(env)}.henosis.example`,
  }),
});
