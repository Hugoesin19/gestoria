/** Datos de la gestoría — completar dirección y teléfono reales cuando estén disponibles */
export const site = {
  name: "Gestoría Esclapez",
  tagline: "Tu tranquilidad, nuestra prioridad.",
  description:
    "Asesoramiento fiscal, laboral y contable para autónomos y empresas en Alicante. Trato cercano y profesional.",
  /** Ciudad principal para SEO y comunicación */
  city: "Alicante",
  /** Localidad donde está la oficina */
  locality: "San Vicente del Raspeig",
  province: "Alicante",
  region: "Comunidad Valenciana",
  seoTitle: "Gestoría Esclapez | Gestoría en Alicante — Fiscal, Laboral y Contable",
  seoDescription:
    "Gestoría en Alicante y San Vicente del Raspeig. Asesoría fiscal, laboral, contable y trámites para autónomos y empresas. Trato cercano y profesional.",
  keywords: [
    "gestoría Alicante",
    "gestoría San Vicente del Raspeig",
    "gestor administrativo Alicante",
    "asesoría fiscal Alicante",
    "asesoría laboral",
    "contabilidad autónomos",
    "gestor administrativo",
    "trámites empresa",
    "nóminas",
    "declaración de la renta",
    "alta autónomo",
    "gestoría Campo de Alicante",
  ],
  phone: "+34900000000",
  phoneDisplay: "900 000 000",
  email: "info@gestoriaesclapez.com",
  /** Sustituir por la dirección real de la oficina */
  address: "C/ Ejemplo, 12",
  postalCode: "03690",
  country: "ES",
  geo: {
    latitude: 38.3964,
    longitude: -0.5255,
  },
  hours: "Lunes a Viernes, 9:00 – 14:00 y 16:00 – 19:00",
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
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
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
