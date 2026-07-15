import { describe, expect, it } from "vitest";
import { FakeHost } from "@henosis/core/testing";
import serviceA from "../src/service-a.js";

describe("service-a component", () => {
  it("emits its namespace, deployment, and service", () => {
    const result = new FakeHost(serviceA).run();

    expect(result).toMatchObject({
      status: "complete",
      outputs: {
        api: "https://api.service-a.svc.cluster.local/api/v3/healthz",
        port: 443,
        test: "shared-preview-cycle-1",
      },
      reads: ["image"],
    });
    expect(result.resources.map((resource) => resource.address)).toEqual([
      "k8s/object@1/service-a-namespace",
      "k8s/object@1/api-deployment",
      "k8s/object@1/api-service",
    ]);
  });
});
