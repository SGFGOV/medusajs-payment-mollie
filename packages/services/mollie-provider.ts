import MollieBase from "../core/mollie-base";
import { PaymentProviderKeys } from "../types";

class MollieProviderService extends MollieBase {
  static identifier = PaymentProviderKeys.MOLLIE;

  constructor(_, options) {
    super(_, options);
  }
}

export default MollieProviderService;
