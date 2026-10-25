# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4 for the public site. Backend will be Node.js/Express with MySQL (replacing the current PHP site and the separate Paymenter billing domain). Phase 1 is frontend only: all plans, prices, stock status and copy live in typed static data files shaped so they can later be swapped for API responses. Other applications (billing, client area) are built only after the owner approves the redesign.

## Users

Primary: developers and self-hosters deploying VPS and containers for apps, bots, game servers and side projects. They compare specs (vCores, RAM, NVMe, bandwidth) and price per resource, and expect a technical, no-nonsense tone.
Secondary: small businesses and individuals buying shared web hosting (WordPress, email, domains), and a Discord community that arrives through vouchers and giveaways.

## Product Purpose

Neon Next Generation PTY LTD (ABN 86 686 080 704) is an Australian, digital-first hosting provider, est. 2024. It rents servers: VPS (Micro, Standard, Power, Custom, Elite, Ultra tiers), Virtual Private Containers (Starter, Basic, Pro), and shared web hosting (Free, Basic, Pro, Enterprise, Ultra, Power, monthly and annual). VPN is coming soon. Success means a visitor finds the right plan quickly, trusts the provider, and clicks through to deploy.

## Positioning

Australian-based infrastructure (SYD-01) at a fraction of hyperscaler pricing: NVMe Gen 4 storage, 10Gbps network uplink, DDoS protection, no lock-in contracts, AUD pricing with multi-currency billing. Small team that owns its stack and talks to customers directly on Discord.

## Operating Context

- Pricing in AUD; billing supports AUD, USD, EUR, JPY, GBP, CAD, CHF, CNY, HKD, NZD, INR, PHP, BZD.
- Purchase currently happens on billing.neonnextgeneration.com (Paymenter); hosting panel at hosting.neonnextgeneration.com; docs at documentations.neonnextgeneration.com. Phase 1 CTAs keep linking to those URLs.
- Support is digital-only: email by department and Discord tickets. No phone, no walk-ins.
- Plans have stock status (Available / Out of Stock) and "Most popular" flags that must be shown as on the current site.

## Capabilities and Constraints

- Keep all current plan specs, prices, stock statuses, roadmap items, FAQ answers, contact addresses and legal text as static content (owner instruction: keep values as they are until approval).
- Public pages: Home, Pricing, About, Roadmap, FAQ, Contact, Terms, Privacy, Fair Use, DMCA, SLA, Refunds.
- Known inconsistencies in source copy (e.g. Home says 99.9% uptime SLA, SLA document says 99.5% target; FAQ lists support@ which is not in the contact directory) are carried over as-is and flagged to the owner, not silently fixed.

## Brand Commitments

- Name: Neon Next Generation / NeonNextGeneration (NNG). The user asked that the design match the name ("neon") and the product (renting cloud servers) and be genuinely attractive.
- **Visual identity is the incumbent one (decided 2026-10-24).** The owner-side reviewer rejected a new visual direction ("Harbour Light Festival") and chose to keep the current site's look, polished: violet brand from the logo (#9b5de5 / #7b2ff2 / #b47aff) with a green secondary (#34d399), near-black ground, Inter, soft violet/green glow washes per section, rounded glassy cards, pill buttons, a hosting-panel mock and a terminal in the hero. Reason given: a paying customer must find it attractive and be able to tell sections apart. Do not replace this identity without the owner asking.
- Logo: fox head mark, `public/brand/logo.png` (blue-to-cyan face, violet outline). Keep it.
- Infrastructure partners named on the current site: Intel Xeon, Samsung NVMe, OVHcloud, GalaxyGate, HostHatch, Paymenter, Cloudflare; software: Ubuntu, Debian, Windows, Pterodactyl, Docker, Enhance. Partner: BytArch.

## Evidence on Hand

- Team: Tyson Sunderland (Founder & CEO), Joshua Kelly (Head of Operations), Hamad Almarri (CFO), with their quotes from the About page.
- External proof links: Trustpilot, HostingArtisan listing, GitHub (NeonNexGenPTY), Discord, TikTok.
- No customer testimonials, customer counts, logos of clients, or benchmarks exist. Do not fabricate any.

## Product Principles

1. Specs and price first: a developer should compare plans without hunting.
2. Honest status: show stock, "coming soon" and roadmap state plainly.
3. Australian and human: a small real team reachable on Discord, not a faceless hyperscaler.
4. Content is data: everything that will come from MySQL later is structured now.

## Accessibility & Inclusion

WCAG 2.2 AA target: readable contrast on a dark theme, keyboard-reachable pricing toggles and FAQ, reduced-motion support.
