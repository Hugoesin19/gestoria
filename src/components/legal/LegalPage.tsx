import Link from "next/link";
import { legal } from "@/lib/legal";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl md:text-2xl font-bold text-olive-dark mb-4 font-heading">
        {title}
      </h2>
      <div className="space-y-3 text-olive-dark/80 text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function LegalPage({ title, children }: Props) {
  return (
    <main className="bg-cream min-h-screen">
      <section className="bg-sand-warm pt-28 md:pt-36 pb-10 border-b border-olive/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-olive text-xs font-bold uppercase tracking-widest mb-3">
            Información legal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-olive-dark font-heading">
            {title}
          </h1>
          <p className="text-olive-dark/60 text-sm mt-4">
            Última actualización:{" "}
            {new Date(legal.lastUpdated).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {children}

        <div className="mt-12 pt-8 border-t border-olive/15 flex flex-wrap gap-4 text-sm">
          <Link href="/aviso-legal" className="text-olive font-semibold hover:underline">
            Aviso Legal
          </Link>
          <Link href="/politica-privacidad" className="text-olive font-semibold hover:underline">
            Política de Privacidad
          </Link>
          <Link href="/politica-cookies" className="text-olive font-semibold hover:underline">
            Política de Cookies
          </Link>
          <Link href="/contacto" className="text-olive font-semibold hover:underline">
            Contacto
          </Link>
        </div>
      </article>
    </main>
  );
}
