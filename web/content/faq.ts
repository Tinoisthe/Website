// FAQ copied from the current site. Answers use a tiny inline markup:
// **bold** and [label](href).

export interface FaqItem { q: string; a: string[]; steps?: string[]; after?: string[] }
export interface FaqGroup { id: string; title: string; note?: string; items: FaqItem[] }

export const faq: FaqGroup[] = [
  {
    id: "hosting", title: "Hosting services", items: [
      { q: "What hosting plans do you offer?", a: ["We offer a range of hosting plans from **Free** to **Enterprise** level, designed to meet different needs and budgets. All plans include NVMe storage, DDoS protection, and a 99.9% uptime guarantee.", "Visit our [pricing section](/pricing) to see detailed specifications for each plan."] },
      { q: "Do you provide website migration assistance?", a: ["Yes — we offer **free website migration** for new customers. Our technical support team will help transfer your website from your current host to our servers, including files, databases, and domain configuration. Contact our support team to get started."] },
      { q: "What security features are included?", a: ["All hosting plans include DDoS protection, free SSL certificates, advanced firewalls, and regular security updates. Higher-tier plans offer enhanced security suites with advanced monitoring and dedicated support.", "Check our [pricing section](/pricing) for a full security feature breakdown per plan."] },
      { q: "What is your refund policy?", a: ["We offer a satisfaction guarantee for our hosting services. Please review our [Terms of Service](/legal/terms) and [Privacy Policy](/legal/privacy) for detailed information about refunds and service guarantees."] },
    ],
  },
  {
    id: "general", title: "General", items: [
      {
        q: "How do I get started?", a: ["Getting started is easy!"],
        steps: [
          "Visit [hosting.neonnextgeneration.com](https://hosting.neonnextgeneration.com/) and choose a plan.",
          "Complete your purchase through the billing portal.",
          "After purchase, click **“Login Control Panel”** on your [billing dashboard](https://billing.neonnextgeneration.com/account).",
          "Use our built-in setup guides or reach out to 24/7 support for help.",
        ],
      },
      { q: "What payment methods do you accept?", a: ["We accept **Stripe**, **PayPal**, and all major credit cards via our [billing platform](https://billing.neonnextgeneration.com/). All payments are processed securely through encrypted connections."] },
      {
        q: "How can I contact support?", a: ["Our support team is available **24/7** through multiple channels:"],
        steps: [
          "Technical issues: [support@neonnextgeneration.com](mailto:support@neonnextgeneration.com)",
          "Billing inquiries: [billing@neonnextgeneration.com](mailto:billing@neonnextgeneration.com)",
          "Real-time help: Join our [Discord community](https://discord.gg/TCyUSF3dbH)",
        ],
        after: ["Average response time is **within 24 hours**."],
      },
      {
        q: "How do I reset my password on the hosting portal?", a: ["To reset your hosting panel password, first access the panel through your billing dashboard (see “How do I get started?” above).", "Steps to reset your password:"],
        steps: [
          "Go to your [services page](https://billing.neonnextgeneration.com/account) and select your active service.",
          "Click the **“Login Control Panel”** button.",
          "Navigate to **Profile Settings**.",
          "Update your password from the profile settings page.",
        ],
        after: ["**First time resetting?** Request a manual reset by providing account proof via our [Discord server](https://discord.gg/TCyUSF3dbH)."],
      },
    ],
  },
  {
    id: "vpn", title: "VPN services", note: "Coming soon", items: [
      { q: "What is a VPN and why do I need one?", a: ["A VPN (Virtual Private Network) creates a secure, encrypted connection between your device and the internet. It protects your online privacy by masking your IP address, encrypts your data, and allows you to bypass geo-restrictions. Our VPN service ensures your internet activity remains private and secure, especially on public Wi-Fi networks."] },
      { q: "How fast is your VPN service?", a: ["Our VPN service is optimised for speed with a global server network and advanced protocols. Most users experience minimal speed reduction (typically 10–20%) compared to their regular internet connection. Speed depends on your base connection, server location, and network congestion."] },
      { q: "Do you log user activity?", a: ["No — we maintain a strict **no-logs policy**. We do not store, monitor, or share any information about your online activities, browsing history, or connection destinations. Only minimal operational data (server load, uptime) is collected for service stability and performance monitoring."] },
      { q: "Which devices are supported?", a: ["Our VPN service currently supports **Windows** machines. Android support is coming soon. You can connect up to **5 devices simultaneously** with a single account. An easy-to-use Windows app is available for download."] },
    ],
  },
];
