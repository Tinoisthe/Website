// Static plan catalogue, copied verbatim from the current site.
// Shaped to be replaced by the Express/MySQL API later.

export type ProductLine = "vps" | "vpc" | "web";
export type StockStatus = "available" | "out-of-stock";
export type Billing = "month" | "year";

export interface PlanSpecs {
  /** Numeric values drive the to-scale spec bars. */
  vcpu: number;
  ramGb: number | null;
  storageGb: number | null;
}

export interface Plan {
  id: string;
  line: ProductLine;
  name: string;
  tagline: string;
  priceAud: number;
  billing: Billing;
  /** "Starts at" prefix shown on the current site. */
  startsAt?: boolean;
  status?: StockStatus;
  popular?: boolean;
  badge?: string;
  cta: string;
  href: string;
  specs: PlanSpecs;
  inherits?: string;
  features: string[];
}

const BILLING = "https://billing.neonnextgeneration.com";
const NET = "1 Gbps Base — Up to 10 Gbps Burst (Low Traffic Periods)";

export const vpsPlans: Plan[] = [
  {
    id: "vps-micro", line: "vps", name: "Micro Tier", tagline: "Entry-level VPS for lightweight workloads",
    priceAud: 5.94, billing: "month", startsAt: true, status: "available", popular: true,
    cta: "Deploy Micro", href: `${BILLING}/products/vps/micro-tier-vps`,
    specs: { vcpu: 1, ramGb: 2, storageGb: 15 },
    features: ["1 vCore", "2 GB DDR4", "15 GB NVMe", NET, "Private Networking", "Unmetered Bandwidth"],
  },
  {
    id: "vps-standard", line: "vps", name: "Standard Tier", tagline: "Balanced performance for growing applications",
    priceAud: 13.03, billing: "month", startsAt: true, status: "available",
    cta: "Deploy Standard", href: `${BILLING}/products/vps/standard-tier-vps`,
    specs: { vcpu: 2, ramGb: 4, storageGb: 30 },
    features: ["2 vCores", "4 GB DDR4", "30 GB NVMe", NET, "Private Networking", "Unmetered Bandwidth"],
  },
  {
    id: "vps-power", line: "vps", name: "Power Tier", tagline: "High-performance VPS for demanding workloads",
    priceAud: 23.17, billing: "month", startsAt: true, status: "available",
    cta: "Deploy Power", href: `${BILLING}/products/vps/power-tier-vps`,
    specs: { vcpu: 4, ramGb: 8, storageGb: 60 },
    features: ["4 vCores", "8 GB DDR4", "60 GB NVMe", NET, "Private Networking", "Unmetered Bandwidth"],
  },
  {
    id: "vps-custom", line: "vps", name: "Custom Tier", tagline: "Build your own server",
    priceAud: 10.13, billing: "month", startsAt: true, status: "available", badge: "Build yours",
    cta: "Configure your plan",
    href: `${BILLING}/products/vps/custom-tier-vps/checkout?plan=35&options[1]=4&options[6]=7&options[22]=23&options[24]=false&config[os]=1`,
    specs: { vcpu: 0, ramGb: null, storageGb: null },
    features: ["Choose your vCPU count", "Select your RAM amount", "Pick your storage size", NET, "Private Networking", "Unmetered Bandwidth", "Personalised Configuration"],
  },
  {
    id: "vps-elite", line: "vps", name: "Elite Tier", tagline: "Premium VPS for production and high-availability workloads",
    priceAud: 38.0, billing: "month", startsAt: true, status: "available",
    cta: "Deploy Elite", href: `${BILLING}/products/vps/elite-tier-vps`,
    specs: { vcpu: 6, ramGb: 16, storageGb: 120 },
    features: ["6 vCores", "16 GB DDR4", "120 GB NVMe", NET, "Private Networking", "Unmetered Bandwidth", "1 USA Location", "Advanced DDoS Protection"],
  },
  {
    id: "vps-ultra", line: "vps", name: "Ultra Tier", tagline: "Maximum dedicated resources for enterprise deployments",
    priceAud: 65.0, billing: "month", startsAt: true, status: "available",
    cta: "Deploy Ultra", href: `${BILLING}/products/vps/ultra-tier-vps`,
    specs: { vcpu: 8, ramGb: 32, storageGb: 240 },
    features: ["8 vCores", "32 GB DDR4", "240 GB NVMe", NET, "Private Networking", "Unmetered Bandwidth", "1 USA Location", "Advanced DDoS Protection", "Priority Infrastructure Support"],
  },
];

export const vpcPlans: Plan[] = [
  {
    id: "vpc-starter", line: "vpc", name: "Starter", tagline: "Great for testing and small personal projects",
    priceAud: 1.5, billing: "month", cta: "Choose Starter", href: `${BILLING}/products/vpc/starter`,
    specs: { vcpu: 1, ramGb: 2.5, storageGb: 3 },
    features: ["1 vCPU @ 2.4 GHz", "2.5 GB DDR4 RAM", "3 GB NVMe Storage", "50 GB Bandwidth", "Shared IP", "1 Database Slot", "1 USA Location", "Storage Upgrade: +$3 per 10 GB"],
  },
  {
    id: "vpc-basic", line: "vpc", name: "Basic", tagline: "Ideal for small apps and development environments",
    priceAud: 4.0, billing: "month", cta: "Choose Basic", href: `${BILLING}/products/vpc/basic`,
    specs: { vcpu: 2, ramGb: 4, storageGb: 10 },
    features: ["2 vCPU @ 2.4 GHz", "4 GB DDR4 RAM", "10 GB NVMe Storage", "200 GB Bandwidth", "Shared IP", "3 Database Slots", "1 USA Location", "Storage Upgrade: +$3 per 10 GB"],
  },
  {
    id: "vpc-pro", line: "vpc", name: "Pro", tagline: "Production-ready containers for serious workloads",
    priceAud: 9.0, billing: "month", popular: true, cta: "Choose Pro", href: `${BILLING}/products/vpc/pro`,
    specs: { vcpu: 4, ramGb: 8, storageGb: 25 },
    features: ["4 vCPU @ 2.4 GHz", "8 GB DDR4 RAM", "25 GB NVMe Storage", "Unmetered Bandwidth", "Private Networking", "Unlimited Databases", "1 USA Location", "DDoS Protection", "Optional Add-on: Dedicated IP: $5 AUD / month"],
  },
];

const HP = `${BILLING}/products/hosting-plans`;

export const webMonthlyPlans: Plan[] = [
  {
    id: "web-free", line: "web", name: "Free Plan", tagline: "Get started with basic hosting at no cost",
    priceAud: 0, billing: "month", startsAt: true, status: "out-of-stock",
    cta: "Get started free", href: `${HP}/free-plan`, specs: { vcpu: 1, ramGb: 2, storageGb: 5 },
    features: ["1 vCPU @ 2.3GHz (shared)", "2 GB DDR4 RAM", "5 GB NVMe Storage", "1 Email Account", "1 Domain Slot", "1 Database", "1TB Bandwidth limit", "SSH Access", "Wordpress access", "Node.js Access"],
  },
  {
    id: "web-basic", line: "web", name: "Basic Plan", tagline: "Perfect for individuals and starter websites",
    priceAud: 5.07, billing: "month", startsAt: true, status: "available",
    cta: "Choose Basic", href: `${HP}/basic-plan`, specs: { vcpu: 3, ramGb: 5, storageGb: 20 },
    features: ["3 vCPU @ 3.8 GHz (shared)", "5 GB DDR4 RAM", "20 GB NVMe Storage", "Unlimited Email Accounts", "3 Domain Slots", "Unlimited Databases", "Unlimited Bandwidth", "Basic Support", "Optional Add-on: Dedicated IP: $5 AUD / month"],
  },
  {
    id: "web-pro", line: "web", name: "Pro Plan", tagline: "Ideal for growing businesses and developers",
    priceAud: 8.12, billing: "month", startsAt: true, status: "out-of-stock", popular: true,
    cta: "Choose Pro", href: `${HP}/pro-plan`, specs: { vcpu: 4, ramGb: 8, storageGb: 30 },
    inherits: "Everything in the Basic Plan, plus:",
    features: ["4 vCPU @ 3.8 GHz (shared)", "8 GB DDR4 RAM", "30 GB NVMe Storage", "8 Domain Slots", "Priority Support", "Early Developer Features", "VPN Access Included", "Optional Add-on: Dedicated IP: $5 AUD / month"],
  },
  {
    id: "web-enterprise", line: "web", name: "Enterprise Plan", tagline: "For high-traffic sites and advanced workloads",
    priceAud: 15.21, billing: "month", startsAt: true, status: "available",
    cta: "Choose Enterprise", href: `${HP}/enterprise-plan`, specs: { vcpu: 5, ramGb: 10, storageGb: 100 },
    inherits: "Everything in the Pro Plan, plus:",
    features: ["5 vCPU @ 3.8 GHz (shared)", "10 GB DDR4 RAM", "100 GB NVMe Storage", "Unlimited Domain Slots", "24/7 Dedicated Support", "Advanced Security", "Optional Add-on: Dedicated IP: $5 AUD / month"],
  },
  {
    id: "web-ultra", line: "web", name: "Ultra Plan", tagline: "Ultimate solution for agencies and corporate use",
    priceAud: 30.42, billing: "month", startsAt: true, status: "out-of-stock",
    cta: "Choose Ultra", href: `${HP}/ultra-plan`, specs: { vcpu: 6, ramGb: 15, storageGb: 200 },
    inherits: "Everything in Enterprise Plan, plus:",
    features: ["6 vCPU @ 3.8 GHz (shared)", "15 GB DDR4 RAM", "200 GB NVMe Storage", "Unlimited Email Accounts", "Unlimited Domain Slots", "Advanced Security Suite", "Free Optional Add-on: Dedicated IP"],
  },
  {
    id: "web-power", line: "web", name: "Power Plan", tagline: "Maximum shared performance for demanding workloads",
    priceAud: 50.71, billing: "month", startsAt: true, status: "out-of-stock",
    cta: "Choose Power", href: `${HP}/power-plan`, specs: { vcpu: 8, ramGb: null, storageGb: 500 },
    features: ["8 vCPU @ 3.8 GHz (shared)", "Unmetered RAM usage (shared)", "500 GB NVMe Storage", "Unlimited Email Accounts", "Unlimited Domain Slots", "24/7 Dedicated Support", "Advanced Security", "Free Optional Add-on: Dedicated IP"],
  },
];

export const webAnnualPlans: Plan[] = [
  {
    id: "web-basic-yr", line: "web", name: "Basic Plan", tagline: "Perfect for individuals — save with annual billing",
    priceAud: 50, billing: "year", badge: "Save 17%", cta: "Choose Basic", href: `${HP}/basic-plan`,
    specs: { vcpu: 3, ramGb: 7, storageGb: 20 }, inherits: "Everything in Free Plan, plus:",
    features: ["3 vCPU @ 2.4 GHz (shared)", "7 GB DDR4 RAM", "20 GB NVMe Storage", "Unlimited Email Accounts", "3 Domain Slots", "Unlimited Databases", "Unmetered Bandwidth", "Basic Support", "WordPress Optimised"],
  },
  {
    id: "web-pro-yr", line: "web", name: "Pro Plan", tagline: "Ideal for growing businesses — save with annual billing",
    priceAud: 90, billing: "year", badge: "Save 6%", cta: "Choose Pro", href: `${HP}/pro-plan`,
    specs: { vcpu: 4, ramGb: 10, storageGb: 30 }, inherits: "Everything in Basic Plan, plus:",
    features: ["4 vCPU @ 2.4 GHz (shared)", "10 GB DDR4 RAM", "30 GB NVMe Storage", "Unlimited Email Accounts", "8 Domain Slots", "Priority Support", "Early Developer Features", "VPN Access Included", "DDoS Protection (Coming Soon)"],
  },
  {
    id: "web-enterprise-yr", line: "web", name: "Enterprise Plan", tagline: "For large-scale operations — save with annual billing",
    priceAud: 170, billing: "year", popular: true, cta: "Choose Enterprise", href: `${HP}/enterprise-plan`,
    specs: { vcpu: 5, ramGb: 13, storageGb: 100 }, inherits: "Everything in Pro Plan, plus:",
    features: ["5 vCPU @ 2.4 GHz (shared)", "13 GB DDR4 RAM", "100 GB NVMe Storage", "Unlimited Email Accounts", "Unlimited Domain Slots", "24/7 Dedicated Support", "Advanced Security Suite", "Upgrade: +$10 for 5 Extra Slots"],
  },
  {
    id: "web-ultra-yr", line: "web", name: "Ultra Plan", tagline: "Ultimate solution for agencies and corporate businesses",
    priceAud: 300, billing: "year", cta: "Choose Ultra", href: `${HP}/ultra-plan`,
    specs: { vcpu: 0, ramGb: null, storageGb: null }, inherits: "Everything in Enterprise Plan, plus:",
    features: ["Custom NVMe Storage", "Unlimited Email Accounts", "Advanced Security Suite", "Free Optional Add-on: Dedicated IP", "15 Reseller Slots", "15 Customer Slots"],
  },
];

export const lines: Record<ProductLine, { label: string; short: string; blurb: string }> = {
  vps: { label: "VPS Hosting", short: "VPS", blurb: "Your own virtual server with full root access, NVMe storage and burst networking." },
  vpc: { label: "Virtual Private Containers", short: "VPC", blurb: "Lightweight isolated containers for bots, apps and dev environments, from AU$1.50." },
  web: { label: "Web Hosting", short: "Web", blurb: "Managed shared hosting with email, domains, databases, WordPress and Node.js." },
};

/** Ceilings for to-scale spec bars (largest value across the catalogue). */
export const specScale = { vcpu: 8, ramGb: 32, storageGb: 500 };

export function formatAud(n: number) {
  return n.toFixed(2);
}
