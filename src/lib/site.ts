/** Datos genéricos de la gestoría — sustituir por los reales cuando estén disponibles */
export const site = {
  name: "Gestoría Esclapez",
  tagline: "Tu tranquilidad, nuestra prioridad.",
  description:
    "Asesoramiento fiscal, laboral y contable para autónomos y empresas. Trato cercano y profesional.",
  /** Título SEO de la home (incluir ciudad cuando la tengas) */
  seoTitle: "Gestoría Esclapez | Gestoría en Ciudad — Fiscal, Laboral y Contable",
  /** Descripción SEO (máx. ~155 caracteres recomendado) */
  seoDescription:
    "Gestoría en Ciudad con más de 25 años de experiencia. Asesoría fiscal, laboral, contable y trámites para autónomos y empresas. Pide cita.",
  keywords: [
    "gestoría",
    "gestoría Ciudad",
    "asesoría fiscal",
    "asesoría laboral",
    "contabilidad autónomos",
    "gestor administrativo",
    "trámites empresa",
    "nóminas",
    "declaración de la renta",
    "alta autónomo",
  ],
  phone: "+34900000000",
  phoneDisplay: "900 000 000",
  email: "info@gestoriaesclapez.com",
  address: "C/ Ejemplo, 12",
  city: "Ciudad",
  postalCode: "00000",
  province: "Provincia",
  country: "ES",
  /** Coordenadas para Google Maps / schema (sustituir cuando las tengas) */
  geo: {
    latitude: 0,
    longitude: 0,
  },
  since: "2000",
  hours: "Lunes a Viernes, 9:00 – 14:00 y 16:00 – 19:00",
  /** Horario estructurado para schema.org */
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "14:00",
    },
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "16:00",
      closes: "19:00",
    },
  ],
  legalName: "Gestoría Esclapez S.L.",
  clients: "+500",
  /** Redes sociales — dejar "" si no aplica */
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  /** Servicios principales (schema.org + SEO) */
  services: [
    "Asesoría fiscal y tributaria",
    "Gestión laboral y nóminas",
    "Contabilidad empresas y autónomos",
    "Alta de autónomos y constitución de sociedades",
    "Extranjería y trámites administrativos",
    "Tráfico y transportes",
    "Jurídico mercantil",
    "Herencias y sucesiones",
  ],
} as const;
