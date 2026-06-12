import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import {
  createPageMetadata,
  getAboutPageJsonLd,
  getBreadcrumbJsonLd,
  getWebPageJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-pages";

const seo = pageSeo.nosotros;

export const metadata: Metadata = createPageMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  keywords: [...seo.keywords],
});

export default function NosotrosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Sobre nosotros", path: "/nosotros" },
          ]),
          getWebPageJsonLd({
            name: seo.title,
            description: seo.description,
            path: seo.path,
          }),
          getAboutPageJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
