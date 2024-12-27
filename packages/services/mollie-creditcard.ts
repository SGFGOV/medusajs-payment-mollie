import MollieBase from "../core/mollie-base";
import { type MollieOptions, PaymentProviderKeys } from "../types";

class MollieCreditcardProviderService extends MollieBase {
  static identifier = PaymentProviderKeys.CREDIT_CARD;

  constructor(_, options: MollieOptions) {
    super(_, options);
  }
}

export default MollieCreditcardProviderService;
