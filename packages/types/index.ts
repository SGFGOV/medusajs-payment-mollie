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
/** support for  
 * alma applepay bacs bancomatpay bancontact banktransfer belfius blik creditcard directdebit eps giftcard ideal kbc mybank paypal paysafecard pointofsale przelewy24 satispay trustly twint
 * 
 * 
 * 
*/
export const PaymentProviderKeys = {
  MOLLIE: "mollie",
  BAN_CONTACT: "mollie-bancontact",
  ALMA: "mollie-alma",
  APPLE_PAY: "mollie-applepay",
  BACS: "mollie-bacs",
  BANCOMAT_PAY: "mollie-bancomatpay",
  BANCONTACT: "mollie-bancontact",
  BANK_TRANSFER: "mollie-banktransfer",
  BELFIUS: "mollie-belfius",
  BLIK: "mollie-blik",
  CREDIT_CARD: "mollie-creditcard",
  DIRECT_DEBIT: "mollie-directdebit",
  EPS: "mollie-eps",
  GIFT_CARD: "mollie-giftcard",
  IDEAL: "mollie-ideal",
  KBC: "mollie-kbc",
  MY_BANK: "mollie-mybank",
  PAYPAL: "mollie-paypal",
  PAYSAFECARD: "mollie-paysafecard",
  POINT_OF_SALE: "mollie-pointofsale",
  PRZELEWY24: "mollie-przelewy24",
  SATISPAY: "mollie-satispay",
  TRUSTLY: "mollie-trustly",
  TWINT: "mollie-twint",
  
};

export type PaymentContextExtra = {
  redirectUrl?: string;
  paymentDescription?: string;
  method?: PaymentMethod;
};
