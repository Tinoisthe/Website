# Neon Next Generation — public site (Phase 1)

Redesign of neonnextgeneration.com in Next.js 15 (App Router, TypeScript, Tailwind v4).
This phase is frontend-only and for owner approval. All plans, prices, stock status and copy are static and taken unchanged from the current PHP site.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

- `app/` — routes: `/`, `/vps`, `/web-hosting`, `/containers` (keyword landing pages), `/pricing` (`?line=vps|vpc|web`), `/about`, `/roadmap`, `/faq`, `/contact`, `/legal/[slug]` (terms, privacy, fair-use, dmca, sla, refunds)
- `components/` — header, footer, hero facade, plan board / rows, page hero, terminal
- `content/plans.ts` — every plan, price, spec and stock flag. **This is the shape the Express/MySQL API should return later.**
- `content/landing.ts` — copy for the three landing pages, restated from existing site facts
- `lib/seo.ts` — page metadata and JSON-LD builders (breadcrumbs, FAQPage, plan Products with AUD offers)
- `content/site.ts`, `content/faq.ts` — company facts, contacts, team, roadmap, FAQ
- `content/legal/*.json` — the six legal documents, converted from the old pages
- `next.config.ts` — 301 redirects from the old `.php` URLs

Buy buttons still go to `billing.neonnextgeneration.com` until the new billing app exists.

## For the owner: copy that needs a decision

Carried over unchanged from the current site; please confirm or correct:

1. Home/FAQ say **99.9% uptime SLA**, while the SLA document targets **99.5%**.
2. FAQ lists **support@neonnextgeneration.com**, which is not in the contact directory.
3. FAQ says "All plans include DDoS protection", but annual Pro lists "DDoS Protection (Coming Soon)".
4. The Free Plan, Pro, Ultra and Power web plans are marked **Out of Stock**, and the current site lists Micro as "Most popular". Is that still right?
5. The deploy terminal ("Server ready in 14s") is shown as an example run. Keep it?
6. The hero chips say "<1ms latency" and "10Gbps throughput", copied from the old hero. The old hero also said 99.99% uptime; I show 99.9% to match the rest of the site, but the SLA document says 99.5%.
7. Positioning says "Australian-based infrastructure", but Elite/Ultra VPS and every container plan list "1 USA Location". Is that right, and should the copy mention it?
8. The hosting panel in the hero is a drawn preview, not a screenshot. A real screenshot of hosting.neonnextgeneration.com would be stronger. Can you provide one?
