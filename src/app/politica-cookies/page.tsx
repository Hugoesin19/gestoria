import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";
import { legal } from "@/lib/legal";
import { createPageMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/seo-pages";

const seo = pageSeo.cookies;

export const metadata: Metadata = createPageMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  noIndex: seo.noIndex,
});

export default function PoliticaCookiesPage() {
  return (
    <LegalPage title="Política de Cookies">
      <LegalSection title="1. ¿Qué son las cookies?">
        <p>
          Las cookies son pequeños archivos que se almacenan en su dispositivo al visitar un sitio
          web. Permiten, entre otras cosas, almacenar y recuperar información sobre sus hábitos de
          navegación o reconocerle como usuario.
        </p>
      </LegalSection>

      <LegalSection title="2. ¿Qué cookies utiliza este sitio web?">
        <p>
          Este sitio web utiliza únicamente cookies <strong>técnicas y estrictamente necesarias</strong>{" "}
          para su correcto funcionamiento. No utilizamos cookies de publicidad ni de análisis de
          comportamiento, salvo que se indique lo contrario en una actualización de esta política.
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border border-olive/15 rounded-lg overflow-hidden">
            <thead className="bg-olive/10">
              <tr>
                <th className="text-left p-3 font-semibold text-olive-dark">Cookie / tecnología</th>
                <th className="text-left p-3 font-semibold text-olive-dark">Tipo</th>
                <th className="text-left p-3 font-semibold text-olive-dark">Finalidad</th>
                <th className="text-left p-3 font-semibold text-olive-dark">Duración</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-olive/10">
              <tr>
                <td className="p-3">Cookies de sesión del servidor / CDN</td>
                <td className="p-3">Técnica</td>
                <td className="p-3">Garantizar la seguridad, el equilibrio de carga y el acceso al sitio</td>
                <td className="p-3">Sesión / según proveedor</td>
              </tr>
            </tbody>
          </table>
        </div>

        {legal.cookies.usesAnalytics && (
          <div className="mt-6 p-4 bg-olive/5 border border-olive/15 rounded-lg">
            <p className="font-semibold text-olive-dark mb-2">Cookies de analítica</p>
            <p>
              Utilizamos {legal.cookies.analyticsProvider} para analizar el uso del sitio web. Puede
              consultar más información en la política del proveedor:{" "}
              {legal.cookies.analyticsPrivacyUrl && (
                <a
                  href={legal.cookies.analyticsPrivacyUrl}
                  className="text-olive hover:underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {legal.cookies.analyticsPrivacyUrl}
                </a>
              )}
            </p>
            <p className="mt-2 text-sm">
              En ese caso, se solicitará su consentimiento previo mediante el banner de cookies.
            </p>
          </div>
        )}
      </LegalSection>

      <LegalSection title="3. ¿Necesita dar su consentimiento?">
        <p>
          Las cookies técnicas estrictamente necesarias no requieren consentimiento previo conforme a
          la normativa vigente. Si en el futuro se incorporan cookies de analítica o publicidad, se
          solicitará su consentimiento expreso antes de su instalación.
        </p>
      </LegalSection>

      <LegalSection title="4. Cómo gestionar o eliminar cookies">
        <p>
          Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la
          configuración de las opciones de su navegador:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              className="text-olive hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
              className="text-olive hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              className="text-olive hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              className="text-olive hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p className="mt-3">
          Tenga en cuenta que deshabilitar cookies técnicas puede afectar al correcto funcionamiento
          del sitio web.
        </p>
      </LegalSection>

      <LegalSection title="5. Más información">
        <p>
          Para cualquier consulta sobre el uso de cookies, puede contactar en{" "}
          <a href={`mailto:${legal.privacyEmail}`} className="text-olive hover:underline">
            {legal.privacyEmail}
          </a>
          . Consulte también nuestra{" "}
          <a href="/politica-privacidad" className="text-olive hover:underline">
            Política de Privacidad
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
