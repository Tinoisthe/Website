// Keyword landing pages for each product line (/vps, /web-hosting, /containers).
// Every claim here is restated from the existing site copy or derived from
// content/plans.ts; nothing new is promised. FAQ answers use the same inline
// markup as content/faq.ts: **bold** and [label](href).

import { formatAud, vpcPlans, vpsPlans, webAnnualPlans, webMonthlyPlans, type Plan, type ProductLine } from "./plans";
import { links } from "./site";

export interface LandingFaq { q: string; a: string[]; steps?: string[] }

export interface Landing {
  line: ProductLine;
  path: string;
  /** <title> (the site template appends the brand). */
  title: string;
  description: string;
  keywords: string[];
  /** Breadcrumb and nav label. */
  name: string;
  h1: { lead: string; accent: string };
  lede: string;
  plans: Plan[];
  /** Optional second set (web hosting's annual plans). */
  extraPlans?: { heading: string; plans: Plan[] };
  intro: { heading: { lead: string; accent: string }; body: string[] };
  included: { title: string; body: string }[];
  useCases: string[];
  faq: LandingFaq[];
}

const from = (plans: Plan[]) => formatAud(Math.min(...plans.filter((p) => p.priceAud > 0).map((p) => p.priceAud)));

const buySteps = (what: string) => [
  `Pick a ${what} plan on this page and click its button.`,
  `Check out on the [billing portal](${links.billing}) with Stripe, PayPal or any major card.`,
  `After purchase, click **“Login Control Panel”** on your [billing dashboard](${links.account}) to manage it.`,
];

const vpsFrom = from(vpsPlans);
const customVps = vpsPlans.find((p) => p.id === "vps-custom")!;

export const vpsLanding: Landing = {
  line: "vps",
  path: "/vps",
  title: `Buy VPS Hosting from AU$${vpsFrom}/mo`,
  description: `Buy a VPS from AU$${vpsFrom}/month: virtual private servers with full root access, NVMe storage, up to 10Gbps burst networking and unmetered bandwidth. No lock-in contracts.`,
  keywords: ["VPS", "buy VPS", "VPS hosting", "cheap VPS", "virtual private server", "VPS server", "VPS Australia", "custom VPS", "NVMe VPS", "Linux VPS"],
  name: "VPS hosting",
  h1: { lead: "VPS hosting", accent: `from AU$${vpsFrom}/mo` },
  lede: "Your own virtual private server with full root access, NVMe storage and burst networking. Scale up or down any time, with no lock-in contracts.",
  plans: vpsPlans,
  intro: {
    heading: { lead: "What is a", accent: "VPS?" },
    body: [
      "A VPS (virtual private server) is a virtual machine with its own allocation of CPU, RAM and storage. Unlike shared hosting, nothing you run competes with other customers' sites, and you get full root access to install and configure whatever your project needs.",
      `Every Neon Next Generation VPS runs on NVMe storage with a 1 Gbps base connection that bursts up to 10 Gbps in low-traffic periods, private networking and unmetered bandwidth. Start on the Micro Tier at AU$${vpsFrom}/month, or build your own server on the Custom Tier from AU$${formatAud(customVps.priceAud)}/month.`,
    ],
  },
  included: [
    { title: "Full root access", body: "A virtual private server that is yours to configure, from the OS up." },
    { title: "NVMe storage", body: "Every tier runs on NVMe drives, from 15 GB on Micro to 240 GB on Ultra." },
    { title: "Up to 10 Gbps burst", body: "1 Gbps base with bursts up to 10 Gbps in low-traffic periods." },
    { title: "Unmetered bandwidth", body: "Plus private networking on every VPS tier." },
    { title: "Custom builds", body: "Choose your own vCPU count, RAM and storage on the Custom Tier." },
    { title: "No lock-in", body: "Monthly billing in 13 currencies. Cancel from the billing portal whenever you like." },
  ],
  useCases: ["Web apps and APIs", "Discord and Telegram bots", "Game servers", "Databases", "Dev and staging environments", "Self-hosted tools"],
  faq: [
    { q: "How do I buy a VPS?", a: ["Buying a VPS takes a few minutes:"], steps: buySteps("VPS") },
    { q: "How much does a VPS cost?", a: [`VPS plans start at **AU$${vpsFrom}/month** for the Micro Tier (1 vCore, 2 GB DDR4, 15 GB NVMe). The Custom Tier starts at **AU$${formatAud(customVps.priceAud)}/month** and lets you choose your own resources. Prices are in AUD and you can pay in 13 currencies at checkout.`] },
    { q: "Can I build a custom VPS?", a: ["Yes. The **Custom Tier** lets you choose your vCPU count, RAM amount and storage size, with the same networking as every other tier: 1 Gbps base, up to 10 Gbps burst, private networking and unmetered bandwidth."] },
    { q: "Is there a contract?", a: ["No. VPS plans are billed monthly with no lock-in contract. Scale up or down, or cancel from the billing portal, whenever you like."] },
    { q: "What is the difference between a VPS and a container?", a: ["A VPS is a full virtual machine with root access and dedicated resources. Our [Virtual Private Containers](/containers) are lighter, isolated containers for bots, apps and dev environments, starting from a lower price."] },
  ],
};

const webFrom = from(webMonthlyPlans);

export const webLanding: Landing = {
  line: "web",
  path: "/web-hosting",
  title: `Web Hosting from AU$${webFrom}/mo · WordPress & Email`,
  description: `Managed web hosting from AU$${webFrom}/month with NVMe storage, email accounts, domain slots, databases, WordPress and Node.js. Free website migration. Save with annual billing.`,
  keywords: ["web hosting", "hosting", "website hosting", "WordPress hosting", "cheap web hosting", "web hosting Australia", "email hosting", "Node.js hosting", "shared hosting"],
  name: "Web hosting",
  h1: { lead: "Web hosting", accent: `from AU$${webFrom}/mo` },
  lede: "Managed shared hosting with email, domains, databases, WordPress and Node.js on NVMe storage. Free migration from your current host.",
  plans: webMonthlyPlans,
  extraPlans: { heading: "Annual web hosting plans", plans: webAnnualPlans },
  intro: {
    heading: { lead: "Hosting for", accent: "your website" },
    body: [
      "Web hosting is the simplest way to put a website online: we run and maintain the server, and you get a control panel with everything a site needs, including email accounts, domain slots and databases.",
      `Plans start at AU$${webFrom}/month on NVMe storage, from personal sites on the Basic Plan up to agency workloads on the Ultra and Power plans. Annual billing saves up to 17%, and new customers get free website migration.`,
    ],
  },
  included: [
    { title: "WordPress & Node.js", body: "Host WordPress sites and Node.js apps from the same panel." },
    { title: "Email & domains", body: "Email accounts and domain slots on every plan, unlimited email from Basic up." },
    { title: "NVMe storage", body: "From 20 GB on Basic to 500 GB on the Power Plan." },
    { title: "Free migration", body: "Our team moves your files, databases and domain configuration for you." },
    { title: "Free SSL", body: "SSL certificates, firewalls and regular security updates included." },
    { title: "Save with annual billing", body: "Pay yearly and save up to 17%." },
  ],
  useCases: ["Business websites", "WordPress blogs", "Online portfolios", "Node.js apps", "Agency client sites", "Email for your domain"],
  faq: [
    { q: "How do I buy web hosting?", a: ["Getting your site online takes a few minutes:"], steps: buySteps("web hosting") },
    { q: "Do you provide website migration?", a: ["Yes — we offer **free website migration** for new customers. Our technical support team will help transfer your website from your current host, including files, databases and domain configuration."] },
    { q: "Can I host WordPress?", a: ["Yes. Web hosting plans support WordPress and Node.js, and the annual Basic Plan is WordPress optimised."] },
    { q: "Is annual billing cheaper?", a: ["Yes. Annual web hosting plans save up to 17% compared with paying monthly."] },
    { q: "Do I need a VPS instead?", a: ["If you need root access, custom software or dedicated resources, choose a [VPS](/vps). For websites, email and WordPress, web hosting is simpler and cheaper."] },
  ],
};

const vpcFrom = from(vpcPlans);

export const vpcLanding: Landing = {
  line: "vpc",
  path: "/containers",
  title: `Container & Bot Hosting from AU$${vpcFrom}/mo`,
  description: `Virtual Private Containers from AU$${vpcFrom}/month: lightweight isolated containers for Discord bots, apps and dev environments with NVMe storage and databases.`,
  keywords: ["container hosting", "Docker hosting", "bot hosting", "Discord bot hosting", "cheap server", "app hosting", "virtual private container", "VPC hosting"],
  name: "Container hosting",
  h1: { lead: "Container hosting", accent: `from AU$${vpcFrom}/mo` },
  lede: "Virtual Private Containers: lightweight, isolated environments for bots, apps and dev projects.",
  plans: vpcPlans,
  intro: {
    heading: { lead: "What is a", accent: "Virtual Private Container?" },
    body: [
      "A Virtual Private Container (VPC) is an isolated environment with its own vCPU, RAM and NVMe storage. Containers are lighter than a full virtual machine, so you get a dependable place to run a bot, an app or a test environment at a fraction of the cost of a VPS.",
      `Plans start at AU$${vpcFrom}/month on the Starter plan and go up to the Pro plan with unmetered bandwidth, private networking, unlimited databases and DDoS protection. Container plans currently run from one USA location.`,
    ],
  },
  included: [
    { title: "From AU$" + vpcFrom, body: "The lowest-cost way to keep a project online around the clock." },
    { title: "NVMe storage", body: "Add storage at +$3 per 10 GB on Starter and Basic." },
    { title: "Databases", body: "From 1 database slot on Starter to unlimited on Pro." },
    { title: "Isolated", body: "Each container runs in its own isolated environment." },
    { title: "Pro extras", body: "Unmetered bandwidth, private networking and DDoS protection on Pro." },
    { title: "Dedicated IP add-on", body: "Add a dedicated IP to Pro for $5 AUD a month." },
  ],
  useCases: ["Discord bots", "Telegram bots", "Small APIs", "Scheduled jobs", "Dev environments", "Testing and personal projects"],
  faq: [
    { q: "How do I buy a container?", a: ["Getting started takes a few minutes:"], steps: buySteps("container") },
    { q: "Container or VPS?", a: ["Containers are the cheapest way to run a bot, small app or dev environment. If you need full root access or more resources, choose a [VPS](/vps)."] },
    { q: "Can I host a Discord bot?", a: ["Yes. Bots, small apps and development environments are exactly what containers are built for. The Starter plan is great for testing and small personal projects."] },
    { q: "Where are containers hosted?", a: ["Container plans currently list **1 USA location**."] },
  ],
};

export const landings: Landing[] = [vpsLanding, webLanding, vpcLanding];

/** Lowest paid price per line, for titles and descriptions elsewhere. */
export const fromPrice: Record<ProductLine, string> = { vps: vpsFrom, vpc: vpcFrom, web: webFrom };
