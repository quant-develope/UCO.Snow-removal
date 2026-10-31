# UCO Snow Removal

Snow removal website for UCO Construction Group, deployed as the Cloudflare Worker
`uco-snow-removal` (https://uco-snow-removal.unknwn-creation.workers.dev) from `main`.

- `npm run build` renders `src/pages.mjs` into `dist/`.
- Site settings (phone, email, address, services, photos): `src/config.mjs`.
- Leads from the "Get a free quote" popup go to `POST /api/lead` (`functions/api/lead.js`):
  Telegram (`TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID` worker secrets) and Toronto CRM
  through the `CRM` service binding (`crm-toronto1`, entrypoint `SiteLeads`).
- After a tap on a phone number the visitor lands on `/you-may-be-interested/` (partners page).
