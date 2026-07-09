import { defineComponent, h } from "@henosis/platform-mock";

export default defineComponent({
  outputs: h.object({
    api: h.url(),
    port: h.number(),
  }),
  build: () => {
    throw new Error("D21 render excerpt verification failure");
  },
});
