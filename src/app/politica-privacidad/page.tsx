import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";
import { legal } from "@/lib/legal";
import { createPageMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/seo-pages";

const seo = pageSeo.privacidad;

export const metadata: Metadata = createPageMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  noIndex: seo.noIndex,
});

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPage title="Política de Privacidad">
      <LegalSection title="1. Responsable del tratamiento">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Responsable:</strong> {legal.ownerName}
          </li>
          <li>
            <strong>NIF/CIF:</strong> {legal.taxId}
          </li>
          <li>
            <strong>Domicilio:</strong> {legal.address}, {legal.postalCode} {legal.city},{" "}
            {legal.province}
          </li>
          <li>
            <strong>Correo electrónico de contacto:</strong>{" "}
            <a href={`mailto:${legal.contactEmail}`} className="text-olive hover:underline">
              {legal.contactEmail}
            </a>
          </li>
          <li>
            <strong>Correo para derechos de privacidad:</strong>{" "}
            <a href={`mailto:${legal.privacyEmail}`} className="text-olive hover:underline">
              {legal.privacyEmail}
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Finalidad del tratamiento">
        <p>Tratamos sus datos personales para las siguientes finalidades:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>
            <strong>Formulario de contacto:</strong> gestionar y dar respuesta a las consultas,
            solicitudes de información o de cita enviadas a través del sitio web.
          </li>
          <li>
            <strong>Comunicaciones por email o teléfono:</strong> atender las solicitudes que nos
            dirija por los medios de contacto publicados.
          </li>
        </ul>
        <p className="mt-3">
          Le rogamos que no incluya en el formulario datos especialmente protegidos (salud, ideología,
          etc.) ni datos de terceros sin contar con legitimación para ello.
        </p>
      </LegalSection>

      <LegalSection title="3. Legitimación">
        <p>
          La base legal para el tratamiento de los datos enviados a través del formulario de contacto
          es el <strong>consentimiento expreso</strong> del interesado, manifestado al marcar la casilla
          de aceptación de esta política antes de enviar el mensaje.
        </p>
        <p>
          En el caso de comunicaciones iniciadas por teléfono o correo electrónico por su parte, la
          base legal será la ejecución de medidas precontractuales o el interés legítimo en atender su
          solicitud.
        </p>
      </LegalSection>

      <LegalSection title="4. Conservación de los datos">
        <p>{legal.dataRetention}</p>
        <p className="mt-3">
          Este sitio web <strong>no dispone de base de datos propia</strong> para almacenar los
          mensajes del formulario. Los datos se reciben en nuestro correo electrónico corporativo y
          se gestionan conforme a nuestra política interna de conservación documental.
        </p>
      </LegalSection>

      <LegalSection title="5. Destinatarios y encargados del tratamiento">
        <p>
          Sus datos <strong>no se cederán a terceros</strong>, salvo obligación legal o cuando sea
          necesario para la prestación del servicio solicitado.
        </p>
        <p className="mt-3">
          Para el funcionamiento del sitio web y la gestión del correo electrónico, contamos con los
          siguientes proveedores de servicios (encargados del tratamiento):
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>
            <strong>Alojamiento web:</strong> {legal.processors.hostingProvider} (
            {legal.processors.hostingLocation}).{" "}
            {legal.processors.hostingPrivacyUrl && (
              <a
                href={legal.processors.hostingPrivacyUrl}
                className="text-olive hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de privacidad del proveedor
              </a>
            )}
          </li>
          <li>
            <strong>Correo electrónico:</strong> {legal.processors.emailProvider}
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Transferencias internacionales">
        <p>{legal.processors.internationalTransfers}</p>
      </LegalSection>

      <LegalSection title="7. Derechos del interesado">
        <p>
          Puede ejercer los siguientes derechos en relación con sus datos personales: acceso,
          rectificación, supresión, oposición, limitación del tratamiento y portabilidad (cuando
          proceda).
        </p>
        <p className="mt-3">
          Para ejercerlos, envíe un correo electrónico a{" "}
          <a href={`mailto:${legal.privacyEmail}`} className="text-olive hover:underline">
            {legal.privacyEmail}
          </a>
          , adjuntando copia de su DNI o documento equivalente, e indicando el derecho que desea
          ejercer.
        </p>
        <p className="mt-3">
          Si considera que el tratamiento no se ajusta a la normativa, puede presentar una reclamación
          ante la Agencia Española de Protección de Datos (
          <a
            href="https://www.aepd.es"
            className="text-olive hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aepd.es
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="8. Registros técnicos (logs)">
        <p>
          El servidor de alojamiento puede registrar de forma automática la dirección IP, fecha y hora
          de acceso, URL solicitada y datos técnicos del navegador, con fines de seguridad,
          mantenimiento y diagnóstico de incidencias. Estos registros se conservan durante el tiempo
          estrictamente necesario para dichas finalidades.
        </p>
      </LegalSection>

      <LegalSection title="9. Seguridad">
        <p>
          {legal.ownerName} adopta las medidas técnicas y organizativas razonables para proteger los
          datos personales contra acceso no autorizado, pérdida o alteración, en función de la
          naturaleza de los datos y los riesgos del tratamiento.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
