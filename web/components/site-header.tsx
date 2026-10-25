"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { announcement, links, nav } from "@/content/site";

// Keyed by the text, so a new announcement shows again after an old one was dismissed.
const BANNER_KEY = `nng-banner-dismissed:${announcement}`;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    try {
      if (localStorage.getItem(BANNER_KEY)) setBannerOpen(false);
    } catch {}
  }, []);

  function dismissBanner() {
    setBannerOpen(false);
    try {
      localStorage.setItem(BANNER_KEY, "1");
    } catch {}
  }

  return (
    <header className="sticky top-0 z-50 bg-bg/55 backdrop-blur-2xl backdrop-saturate-150">
      {bannerOpen && (
        <div className="relative border-b border-violet/20 bg-[linear-gradient(90deg,rgb(123_47_242/0.18),rgb(155_93_229/0.1),rgb(52_211_153/0.1))]">
          <p className="mx-auto flex max-w-7xl items-center justify-center gap-2.5 px-12 py-2 text-[13px] font-medium text-fg">
            <span aria-hidden className="pulse-dot size-1.5 rounded-full bg-violet-glow" />
            {announcement}.
            <Link href="/faq#vpn" className="text-violet-glow underline decoration-violet-glow/40 hover:text-fg">
              Learn more
            </Link>
          </p>
          <button
            type="button"
            onClick={dismissBanner}
            aria-label="Dismiss announcement"
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1.5 text-muted hover:text-fg"
          >
            <X aria-hidden className="size-4" />
          </button>
        </div>
      )}

      <div className="border-b border-border bg-bg/35">
        <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Neon Next Generation home">
            <Image src="/brand/logo.png" alt="" width={34} height={34} priority className="size-[34px]" />
            <span className="text-[15px] font-bold tracking-tight">Neon Next Generation</span>
          </Link>

          <ul className="mx-auto hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
                      active ? "bg-violet/15 text-fg" : "text-fg-2 hover:text-fg"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <a href={links.account} className="rounded-full px-3.5 py-2 text-[14px] font-medium text-fg-2 hover:text-fg">
              Client login
            </a>
            <Link href="/pricing" className="btn btn-primary h-10 px-5 text-[14px]">
              Get started
            </Link>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex size-10 items-center justify-center rounded-full text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </nav>

        {open && (
          <div id="mobile-nav" className="border-t border-border bg-bg lg:hidden">
            <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block border-b border-border py-3.5 text-lg font-semibold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-3 pt-4 pb-2">
                <a href={links.account} className="btn btn-ghost flex-1">Client login</a>
                <Link href="/pricing" className="btn btn-primary flex-1">Get started</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
