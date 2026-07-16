import { defineComponent, output, value } from "@henosis/core";
import { emitObject, emitServicePair } from "@henosis/platform-k8s";

export default defineComponent({
  name: "service-a",
  config: {
    image: value.string().default(
      "ghcr.io/henosis-playground/service-a@sha256:f5903cb0423e3ddc53d4820c7d8e06171d11875c06cbe13b6be53726dcca3826",
    ),
  },
  outputs: {
    api: output.static(value.url()),
    port: output.static(value.number()),
  },
  build(ctx) {
    emitObject(ctx, "service-a-namespace", {
      apiVersion: "v1",
      kind: "Namespace",
      metadata: { name: "service-a" },
    });
    const service = emitServicePair(ctx, "api", {
      namespace: "service-a",
      image: ctx.config.image.value,
      targetPort: 3000,
      servicePort: 443,
      resources: {
        requests: { cpu: "100m", memory: "128Mi" },
        limits: { cpu: "500m", memory: "512Mi" },
      },
    });

    return {
      api: `https://${service.host}/api/v3/healthz`,
      port: service.port,
    };
  },
});
