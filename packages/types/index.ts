import { PaymentMethod } from "@mollie/api-client";

export interface MollieOptions {
  /**
   * The ID assigned to the payment provider in `medusa-config.ts`.
   * This ID will be used to construct the webhook URL for receiving events from the Mollie API.
   */
  providerId: string;

  /**
   * The Mollie API key, which starts with either `'test_'` or `'live_'`.
   */
  apiKey: string;

  /**
   * A default description to be used for the payment intent if no description is provided in the context.
   */
  paymentDescription?: string;

  /**
   * The base URL for the webhook. This will be used to construct the complete webhook URL for Mollie events.
   * For example:
   *   webhookUrl: `https://example.com`
   *   providerId: `mollie`
   * The final callback URL will be: `https://example.com/hooks/payment/mollie_mollie`
   *
   * The `webhookUrl` should always point to the domain where the Medusa backend is deployed.
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
