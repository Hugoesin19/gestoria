/**
 * Datos legales de la web — sustituir los valores entre corchetes por los reales.
 * Archivo único para Aviso Legal, Privacidad, Cookies y formulario de contacto.
 */
export const legal = {
  /** "sl" = sociedad limitada | "autonomo" = persona física */
  entityType: "sl" as "sl" | "autonomo",

  /** Razón social (SL) o nombre y apellidos completos (autónomo) */
  ownerName: "[Nombre o razón social del titular]",

  /** CIF (SL) o NIF (autónomo) */
  taxId: "[NIF / CIF]",

  /** Nombre comercial si difiere de la razón social */
  tradeName: "Gestoría Esclapez",

  /** Solo si entityType === "sl" — dejar "" si no aplica */
  mercantileRegistry: {
    city: "[Ciudad del Registro Mercantil]",
    volume: "[Tomo]",
    folio: "[Folio]",
    section: "[Sección]",
    sheet: "[Hoja]",
    inscription: "[Datos de inscripción]",
  },

  /** Profesión regulada (gestoría / colegio profesional) */
  regulatedProfession: {
    enabled: true,
    college: "[Colegio Oficial de Gestores Administrativos de ...]",
    memberNumber: "[Número de colegiado]",
    degree: "[Título oficial, ej. Graduado en Gestión Administrativa]",
    degreeCountry: "España",
    statutesUrl: "[https://... estatutos o normas del colegio]",
  },

  /** Email de contacto general (visible en web) */
  contactEmail: "info@gestoriaesclapez.com",

  /** Email para ejercer derechos RGPD (acceso, supresión, etc.) */
  privacyEmail: "[privacidad@gestoriaesclapez.com]",

  /** Dirección física completa */
  address: "[C/ Ejemplo, 12]",
  postalCode: "[00000]",
  city: "[Ciudad]",
  province: "[Provincia]",

  phone: "[900 000 000]",

  hours: "Lunes a Viernes, 9:00 – 14:00 y 16:00 – 19:00",

  /** Finalidad del sitio web (LSSI) */
  websitePurpose:
    "Ofrecer información sobre los servicios de asesoramiento fiscal, laboral, contable y administrativo, y facilitar el contacto con los interesados.",

  /** Tribunales competentes */
  jurisdiction: "[Provincia de los tribunales competentes]",

  /** Conservación de datos del formulario (RGPD) */
  dataRetention:
    "Los datos se conservarán en nuestro correo electrónico corporativo durante el tiempo necesario para atender su consulta y, en su caso, durante los plazos legalmente exigidos para la gestión de la relación comercial o contractual. Una vez finalizada la gestión, se procederá a su supresión o bloqueo.",

  /** Proveedores / encargados del tratamiento */
  processors: {
    hostingProvider: "[Nombre del proveedor de hosting, ej. Vercel / Raiola / OVH]",
    hostingLocation: "[Ubicación, ej. Unión Europea / Estados Unidos]",
    hostingPrivacyUrl: "[URL política de privacidad del hosting]",
    emailProvider: "[Proveedor de correo, ej. Google Workspace / Microsoft 365]",
    internationalTransfers:
      "[Si el hosting o correo están fuera de la UE, describir garantías: cláusulas tipo, decisiones de adecuación, etc. Si todo está en la UE, indicar: No se realizan transferencias internacionales de datos.]",
  },

  /** Cookies y analítica */
  cookies: {
    /** Cambiar a true si instalas Google Analytics, Meta Pixel, etc. */
    usesAnalytics: false,
    analyticsProvider: "[Google Analytics / ...]",
    /** URL de la política del proveedor de analítica, si aplica */
    analyticsPrivacyUrl: "",
  },

  /** Fecha de última actualización de los textos legales (YYYY-MM-DD) */
  lastUpdated: "2026-01-01",
} as const;

export type LegalConfig = typeof legal;
