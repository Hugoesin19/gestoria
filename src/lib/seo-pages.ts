import { site } from "./site";

/** Servicios detallados para schema.org (ItemList en /servicios) */
export const serviciosSchema = [
  {
    name: "Fiscal y Tributario",
    description:
      "Presentación de impuestos (IVA, IRPF, IS), planificación fiscal y respuesta a requerimientos de Hacienda.",
  },
  {
    name: "Laboral y RRHH",
    description:
      "Gestión de nóminas, seguros sociales, contratos, despidos y tramitación de bajas.",
  },
  {
    name: "Contabilidad",
    description:
      "Llevanza de libros oficiales, legalización en el Registro y análisis de balances.",
  },
  {
    name: "Emprendedores",
    description:
      "Alta de autónomos o constitución de sociedades. Acompañamiento desde el primer día.",
  },
  {
    name: "Extranjería",
    description: "Permisos de residencia, nacionalidad, arraigo y visados.",
  },
  {
    name: "Tráfico y Transportes",
    description:
      "Transferencias, matriculaciones, tarjetas de transporte y recursos de multas.",
  },
  {
    name: "Jurídico Mercantil",
    description: "Redacción de contratos, actas de juntas y modificaciones estatutarias.",
  },
  {
    name: "Herencias",
    description:
      "Liquidación del impuesto de sucesiones, plusvalías municipales y gestión notarial.",
  },
] as const;

const loc = `${site.city} y ${site.locality}`;

/** Metadatos optimizados por página (título ≤60 chars, descripción ≤160) */
export const pageSeo = {
  home: {
    title: site.seoTitle,
    description: site.seoDescription,
    path: "/",
    keywords: [
      `gestoría ${site.city}`,
      `gestoría ${site.locality}`,
      "asesoría fiscal laboral contable",
      "gestor administrativo Alicante",
    ],
  },
  servicios: {
    title: `Servicios de gestoría en ${site.city}`,
    description: `Asesoría fiscal, laboral, contable, extranjería, tráfico y herencias en ${loc}. ${site.name}: trato cercano y profesional para autónomos y empresas.`,
    path: "/servicios",
    keywords: [
      "servicios gestoría",
      `gestoría ${site.city}`,
      `gestoría ${site.locality}`,
      `asesoría fiscal ${site.city}`,
      "gestión laboral",
      "contabilidad autónomos",
      "alta autónomo",
      "extranjería",
      "herencias",
    ],
  },
  nosotros: {
    title: `Sobre nosotros — ${site.name}`,
    description: `Conoce ${site.name}, gestoría en ${loc}. Trato personal, claridad y confianza para autónomos y empresas de la zona.`,
    path: "/nosotros",
    keywords: [
      `gestoría ${site.city}`,
      `gestoría de confianza ${site.province}`,
      "gestoría tradicional",
    ],
  },
  contacto: {
    title: `Contacto — Gestoría en ${site.city}`,
    description: `Contacta con ${site.name} en ${site.locality}, ${site.province}. Tel. ${site.phoneDisplay}. Pide cita para asesoría fiscal, laboral y contable en Alicante.`,
    path: "/contacto",
    keywords: [
      `contacto gestoría ${site.city}`,
      `teléfono gestoría ${site.province}`,
      "pedir cita gestoría",
      "cita previa gestor administrativo",
    ],
  },
  avisoLegal: {
    title: "Aviso Legal",
    description: `Aviso legal de ${site.name}, gestoría en ${site.city}. Información del titular, condiciones de uso y legislación aplicable.`,
    path: "/aviso-legal",
    noIndex: true,
  },
  privacidad: {
    title: "Política de Privacidad",
    description: `Política de privacidad y protección de datos de ${site.name} conforme al RGPD.`,
    path: "/politica-privacidad",
    noIndex: true,
  },
  cookies: {
    title: "Política de Cookies",
    description: `Política de cookies de ${site.name}. Uso de cookies técnicas en este sitio web.`,
    path: "/politica-cookies",
    noIndex: true,
  },
} as const;
