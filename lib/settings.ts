import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export interface Integrations {
  gaMeasurementId: string;
  gscVerificationCode: string;
  headScripts: string;
  bodyScripts: string;
  gtmId: string;
}

export async function getIntegrations(): Promise<Integrations> {
  try {
    const data = await reader.singletons.integrations.read();
    return {
      gaMeasurementId:      data?.gaMeasurementId      ?? "",
      gscVerificationCode:  data?.gscVerificationCode  ?? "",
      headScripts:          data?.headScripts           ?? "",
      bodyScripts:          data?.bodyScripts           ?? "",
      gtmId:                data?.gtmId                 ?? "",
    };
  } catch {
    return {
      gaMeasurementId: "",
      gscVerificationCode: "",
      headScripts: "",
      bodyScripts: "",
      gtmId: "",
    };
  }
}
