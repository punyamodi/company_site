# AppForge AI — Company Site

> Full-service digital agency. We design and build websites, web apps, mobile apps, AI agents, customer chatbots, and everything in between — from first pixel to production.

🌐 **Live:** [https://AppForge-AI.github.io/Company-Site/](https://AppForge-AI.github.io/Company-Site/)

---

## Repository Structure

This monorepo contains the main marketing hub and all product sub-sites, each a standalone Next.js app.

| Directory | Description | Live URL |
|-----------|-------------|----------|
| [`main-hub/`](./main-hub) | Main company website — home, services, work, about, enterprise, contact | `/` |
| [`InferGate-site/`](./InferGate-site) | **InferGate** — AI inference gateway product site | `/infergate` |
| [`Converse-site/`](./Converse-site) | **Converse** — conversational AI / customer chatbot product site | `/converse` |
| [`HaloDesk-site/`](./HaloDesk-site) | **HaloDesk** — AI-powered support desk product site | `/halodesk` |
| [`genie-site/`](./genie-site) | **Genie** — AI assistant product site | `/genie` |
| [`forge-site/`](./forge-site) | **Forge** — custom enterprise AI solutions product site | `/forge` |

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Primitives:** Radix UI (select sites)
- **Icons:** Lucide React
- **Deployment:** GitHub Pages via GitHub Actions

---

## Local Development

Each sub-site is an independent Next.js project. Navigate into the desired directory and run:

```bash
npm install
npm run dev
```

Default dev ports:

| Site | Port |
|------|------|
| `main-hub` | 3000 |
| `InferGate-site` | 3005 |
| `Converse-site` | 3005 |
| `HaloDesk-site` | 3005 |
| `genie-site` | 3005 |
| `forge-site` | 3006 |

---

## Deployment

The site is automatically built and deployed to GitHub Pages on every push to `main` via the [deploy workflow](./.github/workflows/deploy.yml).

**How it works:**
1. Each sub-site is built with `next build` (static export via `next.config`)
2. Outputs are assembled into a single `dist/` directory
3. `dist/` is deployed to GitHub Pages using `actions/deploy-pages@v4`

**Base paths used in production:**

| Site | Base Path |
|------|-----------|
| Main Hub | `/Company-Site` |
| InferGate | `/Company-Site/infergate` |
| Converse | `/Company-Site/converse` |
| HaloDesk | `/Company-Site/halodesk` |
| Genie | `/Company-Site/genie` |
| Forge | `/Company-Site/forge` |

To trigger a manual deploy, go to **Actions → Build & Deploy to GitHub Pages → Run workflow**.

---

## Pages (Main Hub)

| Route | Page |
|-------|------|
| `/` | Home |
| `/work` | Portfolio / Work |
| `/services` | Services |
| `/about` | About |
| `/enterprise` | Enterprise Solutions |
| `/contact` | Contact |

---

## GitHub Pages Setup

To enable GitHub Pages for this repository:

1. Go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow handles the rest

---

## License

© AppForge AI. All rights reserved.
