# Kommuri Server

Minimal Express backend for the Kommuri Printers site.

Endpoints:
- `GET /api/features` — returns features from `data/features.json`
- `POST /api/contact` — accepts `{ name, email, phone?, message }` and stores into `data/contacts.json`
- `GET /api/health` — simple health check

Quick start:

```bash
cd server
npm install
npm run dev    # requires nodemon, or `npm start` to run node directly
```

By default the server listens on port 5000. Use `PORT` env var to override.
