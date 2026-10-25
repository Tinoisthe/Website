import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { webLanding as data } from "@/content/landing";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(data.title, data.description, data.path, "website", data.keywords);

export default function Page() {
  return <LandingPage data={data} />;
}
