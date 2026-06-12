import type { Metadata } from "next";
import { site } from "./site";

/** URL canónica del sitio — configurar NEXT_PUBLIC_SITE_URL en producción */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return "https://www.gestoriaesclapez.com";
}

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (path === "/" || path === "") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageSeoOptions = {
  title: string;
  description: string;
  path: string;
  /** Palabras clave adicionales para esta página */
  keywords?: string[];
  /** Por defecto indexable; usar en páginas que no deban posicionarse */
  noIndex?: boolean;
  /** Imagen OG específica (ruta absoluta o relativa al dominio) */
  ogImage?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
  ogImage,
}: PageSeoOptions): Metadata {
  const url = absoluteUrl(path);
  const image = ogImage ?? absoluteUrl("/opengraph-image");

  return {
    title,
    description,
    keywords: [...site.keywords, ...keywords],
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      siteName: site.name,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: site.seoTitle,
    template: `%s | ${site.name}`,
  },
  description: site.seoDescription,
  keywords: [...site.keywords],
  authors: [{ name: site.legalName, url: getSiteUrl() }],
  creator: site.name,
  publisher: site.legalName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "business",
  alternates: {
    canonical: "/",
    languages: { "es-ES": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: getSiteUrl(),
    siteName: site.name,
    title: site.seoTitle,
    description: site.seoDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — Gestoría en ${site.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.seoDescription,
    images: ["/opengraph-image"],
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

/** Rutas indexables incluidas en el sitemap */
export const indexableRoutes: {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/servicios", priority: 0.9, changeFrequency: "monthly" },
  { path: "/nosotros", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contacto", priority: 0.9, changeFrequency: "monthly" },
];

function openingHoursSpecification() {
  return site.openingHours.map(({ days, opens, closes }) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: days,
    opens,
    closes,
  }));
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    postalCode: site.postalCode,
    addressRegion: site.province,
    addressCountry: site.country,
  };
}

/** Schema global: negocio local + organización + sitio web */
export function getGlobalJsonLd() {
  const url = getSiteUrl();
  const sameAs = [site.social.facebook, site.social.instagram, site.social.linkedin].filter(
    Boolean,
  );

  const localBusiness: Record<string, unknown> = {
    "@type": "AccountingService",
    "@id": `${url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url,
    telephone: site.phone,
    email: site.email,
    image: absoluteUrl("/opengraph-image"),
    description: site.description,
    priceRange: "€€",
    foundingDate: site.since,
    address: postalAddress(),
    areaServed: {
      "@type": "City",
      name: site.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: site.province,
      },
    },
    openingHoursSpecification: openingHoursSpecification(),
    knowsAbout: site.services,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de gestoría",
      itemListElement: site.services.map((name, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: { "@type": "Service", name },
      })),
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  if (site.geo.latitude && site.geo.longitude) {
    localBusiness.geo = {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusiness,
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: site.name,
        description: site.seoDescription,
        publisher: { "@id": `${url}/#organization` },
        inLanguage: "es-ES",
      },
    ],
  };
}

export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
