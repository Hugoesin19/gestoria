import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesHome from "@/components/ServicesHome";
import WhyUs from "@/components/WhyUs";
import CallToAction from "@/components/CallToAction";
import { createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: site.seoTitle,
    description: site.seoDescription,
    path: "/",
    keywords: [`gestoría ${site.city}`, "asesoría fiscal laboral contable"],
  }),
  title: { absolute: site.seoTitle },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <TrustBar />
      <ServicesHome />
      <WhyUs />
      <CallToAction />
    </main>
  );
}
