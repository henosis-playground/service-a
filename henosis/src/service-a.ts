import { defineComponent, output, value } from "@henosis/core";
import { emitObject, emitServicePair } from "@henosis/platform-k8s";

export default defineComponent({
  name: "service-a",
  outputs: {
    api: output.static(value.url()),
    port: output.static(value.number()),
    test: output.static(value.string()),
  },
  build(context) {
    emitObject(context, "service-a-namespace", {
      apiVersion: "v1",
      kind: "Namespace",
      metadata: { name: "service-a" },
    });
    const service = emitServicePair(context, "api", {
      namespace: "service-a",
      image: "service-a:latest",
      targetPort: 3000,
      servicePort: 443,
      replicas: 1,
      resources: {
        requests: { cpu: "100m", memory: "128Mi" },
        limits: { cpu: "500m", memory: "512Mi" },
      },
    });

    return {
      api: `https://${service.host}/api/v3/healthz`,
      port: service.port,
      test: "hi",
    };
  },
});
