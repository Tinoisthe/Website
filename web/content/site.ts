// Company facts, links and page copy carried over from the current site.

export const company = {
  name: "Neon Next Generation",
  legalName: "Neon Next Generation PTY LTD",
  abn: "86 686 080 704",
  founded: 2024,
  region: "SYD-01",
};

export const links = {
  billing: "https://billing.neonnextgeneration.com/",
  account: "https://billing.neonnextgeneration.com/account",
  panel: "https://hosting.neonnextgeneration.com/",
  docs: "https://documentations.neonnextgeneration.com/",
  discord: "https://discord.gg/TCyUSF3dbH",
  github: "https://github.com/NeonNexGenPTY",
  tiktok: "https://tiktok.com/@neon.next.generat",
  trustpilot: "https://www.trustpilot.com/review/neonnextgeneration.com",
  hostingArtisan: "https://hostingartisan.com/providers/web-hosting/neon-next-generation-pty-ltd?ref=badge",
  bytarch: "https://bytarch.com",
};

export const announcement = "VPN coming soon";

// Product pages lead the nav so they get the strongest internal links.
// Roadmap and FAQ stay in the footer.
export const nav = [
  { label: "VPS", href: "/vps" },
  { label: "Web hosting", href: "/web-hosting" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const highlights = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "10Gbps", label: "Network" },
  { value: "24/7", label: "Support" },
  { value: "NVMe", label: "Storage" },
];

export const infraStats = [
  { value: "3+", label: "Partners" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "Gen 4", label: "NVMe Storage" },
  { value: "10Tbps", label: "DDoS Protection" },
  { value: "10Gbps", label: "Dual 10Gbps bandwidth uplink" },
];

export const hardware = [
  { role: "Processor", name: "Intel® Xeon®", note: "Enterprise grade computing." },
  { role: "Storage", name: "Samsung NVMe", note: "Ultra-fast Gen 4 SSD." },
  { role: "Infrastructure", name: "OVHcloud", note: "Global anti-DDoS." },
  { role: "Datacenter", name: "GalaxyGate", note: "Premium facilities." },
  { role: "Network", name: "HostHatch", note: "High capacity network." },
  { role: "Billing", name: "Paymenter", note: "Automated billing gateway." },
  { role: "Security", name: "Cloudflare", note: "Edge network protection." },
];

export const software = [
  { role: "OS", name: "Ubuntu Server", note: "Stable Linux environment." },
  { role: "OS", name: "Debian", note: "Robust OS foundation." },
  { role: "OS", name: "Windows 10/11", note: "Graphical operating systems." },
  { role: "Panel", name: "Pterodactyl", note: "Server management platform." },
  { role: "Container", name: "Docker", note: "Isolated environments." },
  { role: "Panel", name: "Enhance", note: "Web hosting platform." },
];

export const communityPerks = [
  { title: "Exclusive vouchers", body: "Members-only discount codes and promotions." },
  { title: "Maintenance alerts", body: "Real-time updates before any planned downtime." },
  { title: "Giveaways", body: "Regular server credit and hosting plan giveaways." },
  { title: "Technical support", body: "Direct help from staff and community members." },
];

export const contacts = [
  { dept: "General inquiries", email: "info@neonnextgeneration.com" },
  { dept: "Legal / contracts", email: "contact@neonnextgeneration.com" },
  { dept: "Billing & refunds", email: "billing@neonnextgeneration.com" },
  { dept: "Privacy & data rights", email: "privacy@neonnextgeneration.com" },
  { dept: "DMCA & copyright", email: "dmca@neonnextgeneration.com" },
  { dept: "Advertising", email: "ads@neonnextgeneration.com" },
  { dept: "Careers & HR", email: "human.resources@neonnextgeneration.com" },
];

export const team = [
  { name: "Tyson Sunderland", role: "Founder & CEO", quote: "Setting the strategic vision for NeonNextGeneration aligning product, infrastructure, and business growth to build hosting that actually performs." },
  { name: "Joshua Kelly", role: "Head of Operations", quote: "Managing day to day operations keeping infrastructure running, teams aligned, and customers served without interruption." },
  { name: "Hamad Almarri", role: "Chief Financial Officer", quote: "Overseeing financial strategy budgeting, forecasting, and resource allocation to fuel sustainable growth." },
];

export const pillars = [
  { title: "Australian based", body: "Headquartered in Australia, serving clients worldwide with low-latency infrastructure and local support." },
  { title: "High performance", body: "Custom-tuned servers optimized for web hosting, development, and enterprise workloads." },
  { title: "Employee well-being", body: "We prioritize our team's well-being so they can deliver exceptional service to you." },
];

export const values = [
  { title: "Precision engineering", body: "Every server node is manually tuned for specific hosting and development workloads." },
  { title: "Ironclad security", body: "Layered protection that detects and absorbs attacks before they reach your infrastructure." },
  { title: "Zero compromise", body: "“Good enough” has never been in our vocabulary. We push limits relentlessly." },
  { title: "Community first", body: "We started as hosting professionals and developers. Every decision is made with our clients in mind." },
  { title: "Full-stack ownership", body: "We own the hardware, software, and support infrastructure. No middlemen, no excuses." },
  { title: "Low-latency everywhere", body: "Strategically placed nodes across SEA, Australia, and beyond for minimal lag worldwide." },
];

export type RoadmapStatus = "completed" | "in-progress" | "planned";
export const roadmap: { group: string; status: RoadmapStatus; items: { title: string; body: string; points: string[] }[] }[] = [
  {
    group: "Shipped", status: "completed", items: [
      { title: "Billing improvements", body: "Expanded currency support in the billing panel. Makes pricing clearer and easier for customers in their local currency.", points: ["Supported currencies: AUD, USD, EUR, JPY, GBP, CAD, CHF, CNY, HKD, NZD, INR, PHP, BZD"] },
      { title: "Custom VPS options", body: "More configurable VPS options for users with expanded server customization features.", points: ["Granular resource configuration", "Expanded server customization features"] },
      { title: "API rework", body: "API fully reworked for better performance, improved stability, and future feature readiness.", points: ["Better performance across all endpoints", "Improved stability and reliability", "Ready for future feature integrations"] },
      { title: "Server location & IP options", body: "Initial server region and networking options integrated into the checkout flow.", points: ["Select primary active data center location (additional locations TBA)", "IPv4 address configuration at checkout and options upgrades", "IPv6 support options (TBA)"] },
      { title: "HDD backup servers", body: "Deploying dedicated high-capacity HDD storage node infrastructure for secure data retention.", points: ["High-density HDD storage infrastructure", "Dedicated offsite backup nodes", "Cost-effective long-term data storage"] },
      { title: "Automated backups", body: "Adding automated backups with improved backup reliability and restore process.", points: ["Scheduled automatic backups", "Improved backup reliability", "Faster and more reliable restore process"] },
      { title: "Billing magic link login", body: "Enter your email and we'll send you a login link.", points: ["Passwordless authentication flow", "Secure, single-use login links sent via email"] },
    ],
  },
  {
    group: "Building now", status: "in-progress", items: [
      { title: "Rescue mode", body: "VPS rescue mode for recovery access. Tools for fixing boot or system issues.", points: ["Boot recovery access", "System issue diagnostic tools"] },
    ],
  },
  {
    group: "Up next", status: "planned", items: [
      { title: "VPS IP management", body: "Advanced IP management features for VPS services.", points: ["Optional IP change on VPS restart", "Self-service IP changes from the billing panel", "Automatic IP rotation every 20–30 days (optional)"] },
      { title: "Additional global regions", body: "Better global coverage and performance with new data center locations.", points: ["Expanded geographic reach", "Lower latency for more regions", "Improved global performance"] },
    ],
  },
];

export const legalDocs = [
  { slug: "terms", label: "Terms of Service" },
  { slug: "privacy", label: "Privacy Policy" },
  { slug: "fair-use", label: "Fair Use Policy" },
  { slug: "dmca", label: "DMCA & Copyright" },
  { slug: "sla", label: "Service Level Agreement" },
  { slug: "refunds", label: "Refund Policy" },
] as const;
