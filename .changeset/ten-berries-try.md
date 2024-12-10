---
"medusajs-payment-mollie": minor
---

Refactor Mollie payment provider and webhook handling

- Renamed `id` to `providerId` in `MollieOptions` for consistency with other payment providers.
- Updated error messages to provide more clarity about missing options (`apiKey`, `providerId`).
- Refactored `MollieProviderService` constructor to use `MollieOptions` type.
- Updated `constructMollieWebhookUrl` to include both `providerId` and `identifier` for constructing the correct webhook URL.
