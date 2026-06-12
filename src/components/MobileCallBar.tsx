import { Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-olive-dark border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] safe-area-pb">
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <a
          href={`tel:${site.phone}`}
          className="flex items-center justify-center gap-2 py-4 text-white font-bold text-sm"
        >
          <Phone size={18} />
          Llamar
        </a>
        <Link
          href="/contacto"
          className="flex items-center justify-center py-4 text-sand font-bold text-sm"
        >
          Pedir cita
        </Link>
      </div>
    </div>
  );
}
