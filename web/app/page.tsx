import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bell, ChevronRight, Gift, Github, Headphones, Mail, MessageCircle, Ticket } from "lucide-react";
import { PanelPreview } from "@/components/panel-preview";
import { DeployTerminal } from "@/components/deploy-terminal";
import { PlanBoard } from "@/components/plan-board";
import { SectionHeading } from "@/components/section-heading";
import { fromPrice, landings } from "@/content/landing";
import { contacts, hardware, highlights, infraStats, links, software } from "@/content/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const perkIcons = [Ticket, Bell, Gift, Headphones];
const perks = [
  { title: "Exclusive vouchers", body: "Members-only discount codes and promotions." },
  { title: "Maintenance alerts", body: "Real-time updates before any planned downtime." },
  { title: "Giveaways", body: "Regular server credit and hosting plan giveaways." },
  { title: "Technical support", body: "Direct help from staff and community members." },
];

function PartnerChip({ role, name, note }: { role: string; name: string; note: string }) {
  return (
    <li className="card w-60 shrink-0 !rounded-2xl px-5 py-4">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-violet-glow">{role}</p>
      <p className="mt-1 text-[16px] font-semibold">{name}</p>
      <p className="mt-0.5 text-[13px] text-muted">{note}</p>
    </li>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="wash-hero relative overflow-hidden">
        <div aria-hidden className="hero-grid absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pt-16 pb-24 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pt-24 lg:pb-32">
          <div className="lg:col-span-6">
            <h1 className="h-display text-[clamp(2.3rem,4.5vw,4rem)]">
              Next-gen VPS &amp; <span className="brand-gradient">hosting</span> infrastructure
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-fg-2">
              Experience next-generation infrastructure with blazing-fast NVMe performance, enterprise-grade DDoS protection, global anycast routing, and 24/7 expert support — all at a fraction of hyperscaler pricing.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/vps" className="btn btn-primary h-14 px-7 text-[16px]">
                Deploy VPS <span className="font-normal text-white/75">from AU${fromPrice.vps}/mo</span>
              </Link>
              <Link href="/containers" className="btn btn-ghost h-14 px-7 text-[16px]">
                Deploy VPC <span className="font-normal text-muted">from AU${fromPrice.vpc}</span>
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-baseline gap-2">
                  <dd className="text-[17px] font-bold">{h.value}</dd>
                  <dt className="text-[13px] text-muted">{h.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-6">
            <PanelPreview />
            <DeployTerminal className="relative z-10 mx-auto -mt-10 w-[92%] sm:-mt-16 lg:-mr-6 lg:ml-auto lg:w-[82%]" />
            <p className="mt-3 text-right text-[11px] text-muted lg:-mr-6">Illustrative preview of the hosting panel</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section aria-labelledby="pricing-h" className="wash-pricing relative">
        <div aria-hidden className="divider" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionHeading
            id="pricing-h"
            lead="Simple, transparent"
            accent="pricing"
            sub="No hidden fees. No lock-in contracts. Scale up or down any time on Australian-based infrastructure."
          />
          <div className="mt-12">
            <PlanBoard />
          </div>
          <nav aria-label="Hosting products" className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[15px] font-semibold">
            {landings.map((l) => (
              <Link key={l.path} href={l.path} className="text-fg-2 hover:text-fg">{l.name}</Link>
            ))}
            <Link href="/pricing" className="inline-flex items-center gap-2 text-violet-glow hover:text-fg">
              Compare every plan <ArrowRight aria-hidden className="size-4" />
            </Link>
          </nav>
        </div>
      </section>

      {/* Infrastructure */}
      <section aria-labelledby="infra-h" className="wash-infra relative overflow-hidden">
        <div aria-hidden className="divider" />
        <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8 lg:pt-32">
          <SectionHeading
            id="infra-h"
            lead="World-class"
            accent="infrastructure"
            sub="We don't compromise on hardware. Only the best technology runs under the hood to ensure maximum stability."
          />
        </div>
        <div className="marquee-mask mt-14 space-y-4 overflow-hidden">
          <ul className="marquee flex w-max gap-4" aria-label="Hardware and network partners">
            {[...hardware, ...hardware].map((h, i) => (
              <PartnerChip key={i} {...h} />
            ))}
          </ul>
          <ul className="marquee-reverse flex w-max gap-4" aria-label="Software and platforms">
            {[...software, ...software].map((h, i) => (
              <PartnerChip key={i} {...h} />
            ))}
          </ul>
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-14 pb-24 sm:px-6 lg:px-8 lg:pb-32">
          <dl className="card grid grid-cols-2 divide-border !rounded-3xl sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
            {infraStats.map((s) => (
              <div key={s.label} className="px-6 py-7 text-center">
                <dd className="tnum text-[32px] font-bold tracking-tight">{s.value}</dd>
                <dt className="mt-1 text-[13px] text-muted">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Community */}
      <section aria-labelledby="community-h" className="wash-community relative">
        <div aria-hidden className="divider" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <SectionHeading
              id="community-h"
              align="left"
              lead="Join the"
              accent="community"
              sub="Exclusive vouchers, maintenance updates, giveaways and direct technical help from staff and members, all in one place."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {perks.map((p, i) => {
                const Icon = perkIcons[i];
                return (
                  <li key={p.title} className="flex gap-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green/12 text-green">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold">{p.title}</p>
                      <p className="mt-0.5 text-[14px] text-muted">{p.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={links.discord} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <MessageCircle aria-hidden className="size-4" /> Join Discord
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Github aria-hidden className="size-4" /> View on GitHub
              </a>
            </div>
            <p className="mt-4 text-[13px] text-muted">Need help? Open a support ticket in Discord.</p>
          </div>

          <figure className="card mx-auto w-full max-w-md overflow-hidden !rounded-3xl" aria-label="Our Discord server">
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <span className="flex size-10 items-center justify-center rounded-xl bg-violet/15">
                <Image src="/brand/logo.png" alt="" width={26} height={26} className="size-[26px]" />
              </span>
              <div>
                <p className="text-[15px] font-semibold">NeonNextGen</p>
                <p className="text-[12px] text-muted">Community server</p>
              </div>
            </div>
            <ul className="p-2">
              {["announcements", "general", "support-tickets", "vps-chat", "giveaways"].map((c, i) => (
                <li key={c} className={`rounded-lg px-3.5 py-2.5 font-mono text-[13px] ${i === 1 ? "bg-raised-2 text-fg" : "text-muted"}`}>
                  <span className="text-violet-glow"># </span>{c}
                </li>
              ))}
            </ul>
            <figcaption className="flex items-center justify-between border-t border-border px-5 py-3.5 text-[12px]">
              <span className="text-muted">Invite link</span>
              <a href={links.discord} target="_blank" rel="noopener noreferrer" className="font-mono text-violet-glow hover:text-fg">discord.gg/TCyUSF3dbH</a>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-h" className="wash-contact relative">
        <div aria-hidden className="divider" />
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <SectionHeading
              id="contact-h"
              align="left"
              lead="Get in"
              accent="touch"
              sub="Have a question, need support, or want to discuss hosting? We're a digital-first team: reach the right department by email, or join our Discord for instant help."
            />
            <a href="mailto:contact@neonnextgeneration.com" className="btn btn-primary mt-8">
              <Mail aria-hidden className="size-4" /> Email us
            </a>
            <p className="mt-4 text-[14px] text-muted">
              contact@neonnextgeneration.com · We aim to respond within 5 business days.
            </p>
          </div>
          <div className="card overflow-hidden !rounded-3xl">
            <p className="border-b border-border px-6 py-4 text-[15px] font-semibold">Contact directory</p>
            <ul>
              {contacts.map((c) => (
                <li key={c.email}>
                  <a href={`mailto:${c.email}`} className="group flex items-center justify-between gap-4 border-b border-border px-6 py-3.5 transition-colors last:border-0 hover:bg-violet/8">
                    <span>
                      <span className="block text-[12px] font-medium text-muted">{c.dept}</span>
                      <span className="block text-[14px] text-fg">{c.email.split("@")[0]}@<wbr />{c.email.split("@")[1]}</span>
                    </span>
                    <ChevronRight aria-hidden className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-violet-glow" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="flex flex-col gap-1 border-t border-border bg-bg/40 px-6 py-3 text-[12px] text-muted sm:flex-row sm:justify-between">
              <span>Digital-first · No phone · No walk-ins</span>
              <span className="tnum">ABN 86 686 080 704</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
