import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: `Servicios de gestoría en ${site.city}`,
  description: `Asesoría fiscal, laboral, contable, extranjería, tráfico, herencias y jurídico mercantil en ${site.city}. ${site.name}: trato cercano y profesional.`,
  path: "/servicios",
  keywords: [
    "servicios gestoría",
    `gestoría ${site.city}`,
    "asesoría fiscal",
    "gestión laboral",
    "contabilidad empresas",
    "alta autónomo",
    "extranjería",
    "herencias",
  ],
});

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios" },
        ])}
      />
      {children}
    </>
  );
}
