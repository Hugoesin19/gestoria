import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-olive-dark mb-3">Página no encontrada</h1>
        <p className="text-olive-dark/70 mb-8">
          La página que busca no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-olive text-white px-6 py-3 rounded-lg font-bold hover:bg-olive-dark transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
