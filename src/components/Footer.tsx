import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

const empresaLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/nosotros" },
  { label: "Pedir Cita", href: "/contacto" },
];

const servicioLinks = ["Fiscal y Contable", "Laboral", "Jurídico", "Extranjería"];

export default function Footer() {
  return (
    <footer className="relative z-30 isolate overflow-hidden bg-olive-dark text-white pt-14 pb-8 text-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-8 mb-12">
          <div className="min-w-0">
            <span className="text-xl font-bold tracking-tight mb-4 block font-heading">
              Gestoría <span className="text-olive-light">Esclapez</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              {site.description}
            </p>
            {(site.social.facebook || site.social.instagram) && (
              <div className="flex gap-3">
                {site.social.facebook && (
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-olive transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                )}
                {site.social.instagram && (
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-olive transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="min-w-0">
            <h3 className="font-bold mb-4 text-sand uppercase tracking-wider text-xs">Servicios</h3>
            <ul className="space-y-2.5 text-gray-400">
              {servicioLinks.map((item) => (
                <li key={item}>
                  <Link href="/servicios" className="hover:text-sand transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="font-bold mb-4 text-sand uppercase tracking-wider text-xs">Empresa</h3>
            <ul className="space-y-2.5 text-gray-400">
              {empresaLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-sand transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="font-bold mb-4 text-sand uppercase tracking-wider text-xs">Contacto</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="text-olive-light shrink-0 mt-0.5" size={18} />
                <span>
                  {site.address}
                  <br />
                  {site.postalCode} {site.city}
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-olive-light shrink-0" size={18} />
                <a href={`tel:${site.phone}`} className="hover:text-sand transition-colors">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-olive-light shrink-0" size={18} />
                <a href={`mailto:${site.email}`} className="hover:text-sand transition-colors">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {site.legalName}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/aviso-legal" className="hover:text-sand transition-colors">
              Aviso Legal
            </Link>
            <Link href="/politica-privacidad" className="hover:text-sand transition-colors">
              Privacidad
            </Link>
            <Link href="/politica-cookies" className="hover:text-sand transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
