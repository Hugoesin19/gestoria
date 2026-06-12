import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesHome from "@/components/ServicesHome";
import WhyUs from "@/components/WhyUs";
import CallToAction from "@/components/CallToAction";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata, getWebPageJsonLd } from "@/lib/seo";
import { pageSeo } from "@/lib/seo-pages";

const seo = pageSeo.home;

export const metadata: Metadata = {
  ...createPageMetadata({
    title: seo.title,
    description: seo.description,
    path: seo.path,
    keywords: [...seo.keywords],
  }),
  title: { absolute: seo.title },
};

const homeJsonLd = getWebPageJsonLd({
  name: seo.title,
  description: seo.description,
  path: seo.path,
});

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <main className="min-h-screen bg-cream">
        <Hero />
        <TrustBar />
        <ServicesHome />
        <WhyUs />
        <CallToAction />
      </main>
    </>
  );
}
