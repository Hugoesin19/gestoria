import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";
import { legal } from "@/lib/legal";
import { createPageMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/seo-pages";

const seo = pageSeo.avisoLegal;

export const metadata: Metadata = createPageMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  noIndex: seo.noIndex,
});

export default function AvisoLegalPage() {
  const fullAddress = `${legal.address}, ${legal.postalCode} ${legal.city}, ${legal.province}`;

  return (
    <LegalPage title="Aviso Legal">
      <LegalSection title="1. Datos identificativos del titular">
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos
          del titular de este sitio web:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>
            <strong>Titular:</strong> {legal.ownerName}
          </li>
          <li>
            <strong>{legal.entityType === "sl" ? "CIF" : "NIF"}:</strong> {legal.taxId}
          </li>
          {legal.tradeName && (
            <li>
              <strong>Nombre comercial:</strong> {legal.tradeName}
            </li>
          )}
          <li>
            <strong>Domicilio:</strong> {fullAddress}
          </li>
          <li>
            <strong>Correo electrónico:</strong>{" "}
            <a href={`mailto:${legal.contactEmail}`} className="text-olive hover:underline">
              {legal.contactEmail}
            </a>
          </li>
          <li>
            <strong>Teléfono:</strong> {legal.phone}
          </li>
        </ul>
      </LegalSection>

      {legal.entityType === "sl" && legal.mercantileRegistry.city && (
        <LegalSection title="2. Datos registrales">
          <p>Inscrita en el Registro Mercantil de {legal.mercantileRegistry.city}:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Tomo: {legal.mercantileRegistry.volume}</li>
            <li>Folio: {legal.mercantileRegistry.folio}</li>
            <li>Sección: {legal.mercantileRegistry.section}</li>
            <li>Hoja: {legal.mercantileRegistry.sheet}</li>
            <li>Inscripción: {legal.mercantileRegistry.inscription}</li>
          </ul>
        </LegalSection>
      )}

      {legal.regulatedProfession.enabled && (
        <LegalSection
          title={
            legal.entityType === "sl" ? "3. Profesión regulada" : "2. Profesión regulada"
          }
        >
          <p>
            La actividad desarrollada está sujeta a normativa de profesión regulada. Datos de
            colegiación:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Colegio profesional:</strong> {legal.regulatedProfession.college}
            </li>
            <li>
              <strong>Número de colegiado:</strong> {legal.regulatedProfession.memberNumber}
            </li>
            <li>
              <strong>Título:</strong> {legal.regulatedProfession.degree} (
              {legal.regulatedProfession.degreeCountry})
            </li>
            <li>
              <strong>Normas profesionales:</strong>{" "}
              <a
                href={legal.regulatedProfession.statutesUrl}
                className="text-olive hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar estatutos y normas del colegio
              </a>
            </li>
          </ul>
        </LegalSection>
      )}

      <LegalSection title="Objeto del sitio web">
        <p>{legal.websitePurpose}</p>
      </LegalSection>

      <LegalSection title="Condiciones de uso">
        <p>
          El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación
          de las presentes condiciones. El usuario se compromete a hacer un uso adecuado de los
          contenidos y servicios ofrecidos, absteniéndose de emplearlos para actividades ilícitas o
          contrarias a la buena fe.
        </p>
      </LegalSection>

      <LegalSection title="Propiedad intelectual">
        <p>
          Los contenidos de este sitio web (textos, imágenes, logotipos, diseño y código) son
          propiedad de {legal.ownerName} o de terceros con licencia, y están protegidos por la
          legislación española e internacional en materia de propiedad intelectual e industrial.
          Queda prohibida su reproducción, distribución o comunicación pública sin autorización
          expresa.
        </p>
      </LegalSection>

      <LegalSection title="Enlaces externos">
        <p>
          Este sitio web puede contener enlaces a páginas de terceros. {legal.ownerName} no se hace
          responsable del contenido, políticas de privacidad ni prácticas de sitios ajenos. El
          acceso a enlaces externos es responsabilidad exclusiva del usuario.
        </p>
      </LegalSection>

      <LegalSection title="Limitación de responsabilidad">
        <p>
          {legal.ownerName} no garantiza la ausencia de errores en el acceso al sitio web ni en su
          contenido, aunque adoptará las medidas oportunas para evitarlos, corregirlos o
          actualizarlos. La información publicada tiene carácter orientativo y no constituye
          asesoramiento profesional individualizado salvo contratación expresa del servicio.
        </p>
      </LegalSection>

      <LegalSection title="Legislación aplicable y jurisdicción">
        <p>
          Las relaciones derivadas del uso de este sitio web se regirán por la legislación española.
          Para la resolución de controversias, las partes se someten a los Juzgados y Tribunales de{" "}
          {legal.jurisdiction}, salvo que la normativa de consumidores y usuarios disponga otra cosa.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
