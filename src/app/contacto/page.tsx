"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { legal } from "@/lib/legal";

export default function ContactoPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="bg-sand-warm pt-28 md:pt-36 pb-14 md:pb-16 border-b border-olive/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-olive-dark mb-4">Contacto</h1>
            <p className="text-base md:text-lg text-olive-dark/75 max-w-2xl mx-auto">
              Pásate por nuestra oficina, llámanos o escríbenos. Te responderemos lo antes posible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-xl p-6 md:p-8 border border-olive/10 shadow-sm"
          >
            <h2 className="text-xl font-bold text-olive-dark mb-6">Envíanos un mensaje</h2>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: MapPin,
                title: "Oficina",
                text: `${legal.address}\n${legal.postalCode} ${legal.city}, ${legal.province}`,
              },
              {
                icon: Phone,
                title: "Teléfono",
                text: legal.phone,
                href: `tel:${legal.phone.replace(/\s/g, "")}`,
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
            ].map(({ icon: Icon, title, text, href }) => (
              <div
                key={title}
                className="flex gap-4 bg-white p-5 md:p-6 rounded-xl border border-olive/10"
              >
                <div className="w-11 h-11 bg-olive/10 rounded-lg flex items-center justify-center text-olive shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-olive-dark mb-1">{title}</h3>
                  {href ? (
                    <a
                      href={href}
                      className="text-olive-dark/70 text-sm hover:text-olive transition-colors"
                    >
                      {text}
                    </a>
                  ) : (
                    <p className="text-olive-dark/70 text-sm whitespace-pre-line">{text}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="aspect-video bg-olive/5 rounded-xl border border-olive/15 border-dashed flex items-center justify-center text-olive-dark/40 text-sm p-6 text-center">
              Espacio reservado para mapa de ubicación
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
