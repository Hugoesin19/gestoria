import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const years = new Date().getFullYear() - Number(site.since);

export const metadata: Metadata = createPageMetadata({
  title: `Sobre nosotros — ${years}+ años de experiencia`,
  description: `Conoce ${site.name}, gestoría tradicional en ${site.city} desde ${site.since}. Trato personal, claridad y confianza para autónomos y empresas.`,
  path: "/nosotros",
  keywords: [`gestoría ${site.city}`, "gestoría de confianza", "historia gestoría"],
});

export default function NosotrosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Sobre nosotros", path: "/nosotros" },
        ])}
      />
      {children}
    </>
  );
}
