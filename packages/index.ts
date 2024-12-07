import { ModuleProvider, Modules } from "@medusajs/framework/utils";
import { MollieProviderService } from "./services";

const services = [MollieProviderService];

export default ModuleProvider(Modules.PAYMENT, {
  services,
});
