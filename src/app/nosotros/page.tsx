"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, HeartHandshake, Building2 } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import { fadeUpItem } from "@/lib/motion";
import StaggerGrid from "@/components/StaggerGrid";

const values = [
  {
    icon: Clock,
    title: "Cercanía y dedicación",
    desc: "Conocemos a nuestros clientes por su nombre. Cada caso recibe la atención que merece.",
  },
  {
    icon: ShieldCheck,
    title: "Claridad en todo momento",
    desc: "Te explicamos cada trámite sin tecnicismos. Siempre sabrás en qué punto está tu gestión.",
  },
  {
    icon: HeartHandshake,
    title: "Trato personal",
    desc: "No eres un número en un sistema. Somos tu gestoría de confianza.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="bg-sand-warm pt-28 md:pt-36 pb-14 md:pb-16 border-b border-olive/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-olive-dark mb-5">
                Tu gestoría de confianza
              </h1>
              <p className="text-base md:text-lg text-olive-dark/75 leading-relaxed">
                En {site.name} combinamos la experiencia de una gestoría tradicional con la
                comodidad que necesitas hoy. Acompañamos a autónomos y empresas en {site.city},{" "}
                {site.locality} y alrededores.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="aspect-[4/3] rounded-xl bg-olive/5 border border-olive/15 border-dashed flex flex-col items-center justify-center text-center p-8"
            >
              <Building2 size={48} className="text-olive/40 mb-3" strokeWidth={1.5} />
              <p className="text-olive-dark/40 text-sm">Espacio reservado para foto del equipo</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-olive-dark mb-5">Nuestra historia</h2>
          <p className="text-olive-dark/70 text-base md:text-lg leading-relaxed">
            Nacimos con una idea sencilla: que gestionar un negocio no debería ser complicado.
            Acompañamos a autónomos y empresas en sus trámites fiscales, laborales y
            administrativos, siempre con un trato cercano y transparente.
          </p>
        </div>

        <StaggerGrid className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUpItem}
              className="bg-white p-7 rounded-xl border border-olive/10 shadow-sm text-center"
            >
              <div className="w-14 h-14 bg-olive/10 rounded-xl flex items-center justify-center text-olive mx-auto mb-5">
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-olive-dark mb-2">{value.title}</h3>
              <p className="text-olive-dark/65 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </StaggerGrid>

        <div className="text-center mt-12">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center bg-olive text-white px-8 py-3.5 rounded-lg font-bold hover:bg-olive-dark transition-colors"
          >
            Pide cita con nosotros
          </Link>
        </div>
      </section>
    </main>
  );
}
