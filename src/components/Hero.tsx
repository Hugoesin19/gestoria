"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import Grain from "@/components/Grain";

export default function Hero() {
  const years = new Date().getFullYear() - Number(site.since);

  return (
    <section className="relative bg-cream overflow-hidden">
      {/* Ambiente: manchas estáticas (sin animación orbital) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-olive/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-[360px] h-[360px] bg-sand-warm/60 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-olive-light/20 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#556b2f0a_1px,transparent_1px)] [background-size:22px_22px]" />
        <Grain />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-14 md:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-olive-dark leading-[1.12] mb-6">
              <span className="sr-only">
                {site.name} — Gestoría en {site.city}.{" "}
              </span>
              Tu tranquilidad,{" "}
              <span className="text-olive italic relative">
                nuestra prioridad.
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-olive/10 -z-10 rounded-sm" />
              </span>
            </h1>

            <p className="text-base md:text-lg text-olive-dark/75 leading-relaxed mb-8 max-w-xl border-l-[3px] border-olive/30 pl-5">
              En {site.name} llevamos más de {years} años acompañando a autónomos y empresas.
              Asesoramiento fiscal, laboral y contable con un trato cercano y de confianza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-xl font-bold text-base hover:bg-olive-dark transition-all shadow-lg shadow-olive/20 hover:shadow-olive/30 hover:-translate-y-0.5"
              >
                Solicitar cita
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white/90 text-olive-dark px-7 py-3.5 rounded-xl font-bold text-base border border-olive/20 hover:border-olive/35 hover:bg-white transition-all shadow-sm"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="relative lg:pl-4"
          >
            {/* Marco decorativo desplazado */}
            <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-olive/15 hidden sm:block" />

            <div className="photo-frame aspect-[4/3] bg-gradient-to-br from-sand-warm via-cream to-olive/5 flex flex-col items-center justify-center text-center p-8 relative">
              <Grain opacity="opacity-[0.12]" />
              <div className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-olive mb-4 shadow-md border border-olive/10 relative z-10">
                <Building2 size={40} strokeWidth={1.5} />
              </div>
              <p className="text-olive-dark/55 text-sm font-medium relative z-10">
                Espacio reservado para foto de la gestoría
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 -left-3 md:-bottom-6 md:-left-6 bg-olive text-white px-5 py-4 rounded-xl shadow-xl border border-white/10"
            >
              <p className="text-2xl font-bold font-heading leading-none">{site.clients}</p>
              <p className="text-sand text-[10px] uppercase tracking-widest mt-1">
                Clientes confían en nosotros
              </p>
            </motion.div>

            <div className="absolute -top-4 right-6 bg-white px-4 py-2 rounded-lg shadow-md border border-olive/10 text-xs font-semibold text-olive-dark hidden md:block">
              +{years} años de experiencia
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
