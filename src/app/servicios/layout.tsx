import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import {
  createPageMetadata,
  getBreadcrumbJsonLd,
  getServicesItemListJsonLd,
  getWebPageJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-pages";

const seo = pageSeo.servicios;

export const metadata: Metadata = createPageMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  keywords: [...seo.keywords],
});

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
          ]),
          getWebPageJsonLd({
            name: seo.title,
            description: seo.description,
            path: seo.path,
          }),
          getServicesItemListJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
