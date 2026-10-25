import type { Metadata } from "next";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { ChevronRight, Mail, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { company, contacts, links } from "@/content/site";

export const metadata: Metadata = pageMeta("Contact", "Reach the right Neon Next Generation department by email, or get instant community help on Discord.", "/contact");

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Contact", path: "/contact" }])} />
      <PageHero
        lead="Get in"
        accent="touch"
        lede="Have a question, need support, or want to discuss hosting? We're a digital-first team: email the right department directly, or join our Discord for instant community help."
      />

      <section className="wash-contact">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="space-y-5 lg:col-span-5">
            <div className="card p-7">
              <span className="flex size-11 items-center justify-center rounded-xl bg-violet/15 text-violet-glow">
                <Mail aria-hidden className="size-5" />
              </span>
              <p className="mt-5 text-[19px] font-bold tracking-tight">Email us</p>
              <a href="mailto:contact@neonnextgeneration.com" className="mt-1 block text-[16px] text-violet-glow hover:text-fg">
                contact@<wbr />neonnextgeneration.com
              </a>
              <p className="mt-2 text-[14px] text-muted">We aim to respond to all enquiries within 5 business days.</p>
              <a href="mailto:contact@neonnextgeneration.com" className="btn btn-primary mt-6 w-full">Send an email</a>
            </div>
            <div className="card p-7">
              <span className="flex size-11 items-center justify-center rounded-xl bg-green/12 text-green">
                <MessageCircle aria-hidden className="size-5" />
              </span>
              <p className="mt-5 text-[19px] font-bold tracking-tight">Need help now?</p>
              <p className="mt-1 text-[14px] text-muted">Open a support ticket in Discord for instant community and staff help.</p>
              <a href={links.discord} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-6 w-full">Join Discord community</a>
            </div>
            <p className="px-2 text-[13px] text-muted">
              {company.legalName} · ABN <span className="tnum">{company.abn}</span> · Digital-first, no phone, no walk-ins
            </p>
          </div>

          <div className="card self-start overflow-hidden !rounded-3xl lg:col-span-7">
            <h2 className="border-b border-border px-6 py-5 text-[17px] font-semibold">Contact directory</h2>
            <ul>
              {contacts.map((c) => (
                <li key={c.email}>
                  <a href={`mailto:${c.email}`} className="group flex items-center justify-between gap-4 border-b border-border px-6 py-4 transition-colors hover:bg-violet/8">
                    <span>
                      <span className="block text-[13px] font-medium text-muted">{c.dept}</span>
                      <span className="block text-[15px] text-fg">{c.email.split("@")[0]}@<wbr />{c.email.split("@")[1]}</span>
                    </span>
                    <ChevronRight aria-hidden className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-violet-glow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
