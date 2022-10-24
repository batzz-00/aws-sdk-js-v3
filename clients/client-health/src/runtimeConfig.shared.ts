// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { HealthClientConfig } from "./HealthClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: HealthClientConfig) => ({
  apiVersion: "2016-08-04",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Health",
  urlParser: config?.urlParser ?? parseUrl,
});
