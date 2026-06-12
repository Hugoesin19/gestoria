"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import Grain from "@/components/Grain";

export default function CallToAction() {
  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[300px] bg-olive/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-olive-dark rounded-2xl overflow-hidden shadow-2xl shadow-olive-dark/25 border border-olive/20"
        >
          <Grain opacity="opacity-[0.12]" />
          <div className="absolute inset-0 bg-[radial-gradient(#fafaf508_1px,transparent_1px)] [background-size:18px_18px]" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-olive/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-sand/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />

          <div className="relative p-8 md:p-14 text-center">
            <p className="text-sand/70 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Estamos para ayudarte
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              ¿Necesitas asesoramiento?
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-9 max-w-xl mx-auto leading-relaxed">
              Pásate por nuestra oficina, llámanos o solicita cita. Estaremos encantados de atenderte.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-sand text-olive-dark px-8 py-3.5 rounded-xl font-bold hover:bg-white transition-all shadow-lg w-full sm:w-auto hover:-translate-y-0.5"
              >
                Solicitar cita
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white/5 text-white px-8 py-3.5 rounded-xl font-bold border border-white/25 hover:bg-white/10 hover:border-white/40 transition-all w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
