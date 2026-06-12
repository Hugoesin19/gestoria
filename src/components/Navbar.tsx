"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Sobre Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-header/97 backdrop-blur-md shadow-md border-b border-olive/15"
            : "bg-header/95 backdrop-blur-sm border-b border-olive/12"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl md:text-2xl font-bold text-olive-dark tracking-tight font-heading">
                Gestoría <span className="text-olive">Esclapez</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-olive-dark/80 hover:text-olive font-medium text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-2 text-olive-dark font-semibold text-sm border-l border-olive/15 pl-6 hover:text-olive transition-colors"
              >
                <Phone size={16} className="text-olive" />
                {site.phoneDisplay}
              </a>

              <Link href="/contacto">
                <button className="bg-olive text-white px-5 py-2.5 rounded-lg hover:bg-olive-dark transition-colors text-sm font-bold">
                  Pedir cita
                </button>
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <a
                href={`tel:${site.phone}`}
                className="w-10 h-10 rounded-lg bg-olive/10 flex items-center justify-center text-olive"
                aria-label="Llamar"
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-olive-dark p-2 hover:bg-olive/10 rounded-lg transition-colors"
                aria-label="Menú"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-header border-t border-olive/12 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-olive-dark hover:bg-olive/10 rounded-lg font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href="/contacto" className="block px-2 pt-2" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-olive text-white py-3 rounded-lg font-bold">
                    Pedir cita
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="h-16 md:h-20" />
    </>
  );
}
