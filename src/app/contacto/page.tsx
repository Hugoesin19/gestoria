"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Grain from "@/components/Grain";
import { legal } from "@/lib/legal";
import { site } from "@/lib/site";

const contactItems = [
  {
    icon: MapPin,
    title: "Oficina",
    text: `${legal.address}\n${legal.postalCode} ${legal.city}, ${legal.province}`,
  },
  {
    icon: Phone,
    title: "Teléfono",
    text: site.phoneDisplay,
    href: `tel:${site.phone}`,
  },
  {
    icon: Mail,
    title: "Email",
    text: legal.contactEmail,
    href: `mailto:${legal.contactEmail}`,
  },
  {
    icon: Clock,
    title: "Horario",
    text: legal.hours,
  },
];

export default function ContactoPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="relative bg-sand-warm pt-28 md:pt-36 pb-12 md:pb-16 border-b border-olive/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff55_2px,transparent_2px)] [background-size:26px_26px]" />
          <Grain opacity="opacity-[0.06]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-olive-dark mb-4">Contacto</h1>
            <p className="text-base md:text-lg text-olive-dark/75 max-w-2xl mx-auto leading-relaxed">
              Pásate por nuestra oficina, llámanos o escríbenos. Te responderemos lo antes posible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="card-rich p-6 md:p-8"
          >
            <h2 className="text-xl md:text-2xl font-bold text-olive-dark mb-2">
              Envíanos un mensaje
            </h2>
            <p className="text-olive-dark/60 text-sm mb-6">
              Cuéntanos tu consulta y te responderemos a la mayor brevedad.
            </p>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="space-y-4"
          >
            {contactItems.map(({ icon: Icon, title, text, href }) => (
              <div
                key={title}
                className="flex gap-4 bg-white p-5 rounded-xl border border-olive/10 shadow-sm"
              >
                <div className="w-11 h-11 bg-olive/10 rounded-xl flex items-center justify-center text-olive shrink-0">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-olive-dark mb-1 text-sm">{title}</h3>
                  {href ? (
                    <a
                      href={href}
                      className="text-olive-dark/70 text-sm hover:text-olive transition-colors break-all"
                    >
                      {text}
                    </a>
                  ) : (
                    <p className="text-olive-dark/70 text-sm whitespace-pre-line leading-relaxed">
                      {text}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="aspect-video bg-gradient-to-br from-sand-warm/80 to-olive/5 rounded-xl border border-olive/12 flex flex-col items-center justify-center text-center p-6">
              <MapPin size={32} className="text-olive/40 mb-2" strokeWidth={1.5} />
              <p className="text-olive-dark/45 text-sm">
                Espacio reservado para mapa de ubicación
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
