import MollieBase from "../core/mollie-base";
import { type MollieOptions, PaymentProviderKeys } from "../types";

class MollieApplePayProviderService extends MollieBase {
  static identifier = PaymentProviderKeys.APPLEPAY;

  constructor(_, options: MollieOptions) {
    super(_, options);
  }
}

export default MollieApplePayProviderService;
