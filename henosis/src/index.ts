import { defineComponent, h } from "@henosis/platform-mock";

export default defineComponent({
  outputs: h.object({
    api: h.url(),
  }),
  build: (_ctx, env) => ({
    api: `https://service-a-${env.id}.henosis.example`,
  }),
});
