export const constructMollieWebhookUrl = (
  providerId: string,
  webhookUrlPrefix?: string
) => {
  if (!webhookUrlPrefix) return undefined;

  return `${webhookUrlPrefix}/hooks/payment/${providerId}_mollie`;
};
