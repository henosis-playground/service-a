import { defineComponent, h } from "@henosis/platform-k8s";

export default defineComponent({
  // Deliberate scenario-B contract break.
  outputs: h.object({
    endpoint: h.url(),
    port: h.number(),
    test: h.string(),
  }),
  borrowForPreview: "dev",
  params: {
    dev: { replicas: 1 },
    prod: {
      replicas: {
        min: 2,
        max: 5,
        targetCpu: 70,
        disruption: { minAvailable: 1 },
      },
    },
    preview: { replicas: 1 },
  },
  build: (ctx, params) => {
    const service = ctx.namespace("service-a").service("api", {
      targetPort: 3000,
      servicePort: 443,
      scheme: "https",
      replicas: params.replicas,
      resources: {
        requests: { cpu: "100m", memory: "128Mi" },
        limits: { cpu: "500m", memory: "512Mi" },
      },
    });

    return {
      endpoint: `${service.url}/api/v2/healthz`,
      port: service.port,
      test: "hi",
    };
  },
});
