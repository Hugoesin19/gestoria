import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, createPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: `Contacto y cita previa en ${site.city}`,
  description: `Contacta con ${site.name}: ${site.address}, ${site.city}. Teléfono ${site.phoneDisplay}. Pide cita para asesoría fiscal, laboral y contable.`,
  path: "/contacto",
  keywords: [`contacto gestoría ${site.city}`, "pedir cita gestoría", "teléfono gestoría"],
});

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contacto — ${site.name}`,
  url: absoluteUrl("/contacto"),
  description: `Formulario y datos de contacto de ${site.name} en ${site.city}.`,
  mainEntity: { "@id": `${absoluteUrl("/")}#organization` },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Contacto", path: "/contacto" },
          ]),
          contactPageJsonLd,
        ]}
      />
      {children}
    </>
  );
}
