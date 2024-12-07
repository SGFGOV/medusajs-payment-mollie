import { PaymentMethod } from "@mollie/api-client";

export interface MollieOptions {
  /**
   * id assigned to the payment provider in medusa-config.ts
   * this will be used to construct webhook url for receiving events from Mollie API
   */
  id: string;
  /**
   * The Mollie API key, starting with `'test_'` or `'live_'`.
   */
  apiKey: string;

  /**
   * Set a default description on the intent if the context does not provide one
   */
  paymentDescription?: string;

  /**
   * The webhook url prefix. this will be used to construct the webhookUrl for Mollie events.
   * e.g.
   * webhookUrl: `https://example.com`
   * id: mollie
   * the final callback url will be `https://example.com/hooks/payment/mollie_mollie
   */
  webhookUrl?: string;
}

export const PaymentProviderKeys = {
  MOLLIE: "mollie",
};

export type PaymentContextExtra = {
  redirectUrl?: string;
  paymentDescription?: string;
  method?: PaymentMethod;
};
