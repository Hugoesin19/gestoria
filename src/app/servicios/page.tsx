"use client";

import { motion } from "framer-motion";
import {
  Calculator, Users, FileText, Scale,
  Rocket, Globe, Car, Building2, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Grain from "@/components/Grain";
import SectionHeading from "@/components/SectionHeading";
import { fadeUpItem } from "@/lib/motion";
import StaggerGrid from "@/components/StaggerGrid";
import { site } from "@/lib/site";

const allServices = [
  {
    icon: Calculator,
    title: "Fiscal y Tributario",
    desc: "Presentación de impuestos (IVA, IRPF, IS), planificación fiscal y respuesta a requerimientos.",
  },
  {
    icon: Users,
    title: "Laboral y RRHH",
    desc: "Gestión de nóminas, seguros sociales, contratos, despidos y tramitación de bajas.",
  },
  {
    icon: FileText,
    title: "Contabilidad",
    desc: "Llevanza de libros oficiales, legalización en el Registro y análisis de balances.",
  },
  {
    icon: Rocket,
    title: "Emprendedores",
    desc: "Alta de autónomos o constitución de sociedades. Te acompañamos desde el primer día.",
  },
  {
    icon: Globe,
    title: "Extranjería",
    desc: "Permisos de residencia, nacionalidad, arraigo y visados.",
  },
  {
    icon: Car,
    title: "Tráfico y Transportes",
    desc: "Transferencias, matriculaciones, tarjetas de transporte y recursos de multas.",
  },
  {
    icon: Scale,
    title: "Jurídico Mercantil",
    desc: "Redacción de contratos, actas de juntas y modificaciones estatutarias.",
  },
  {
    icon: Building2,
    title: "Herencias",
    desc: "Liquidación del impuesto de sucesiones, plusvalías municipales y gestión notarial.",
  },
];

export default function ServiciosPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="relative bg-sand-warm pt-28 md:pt-36 pb-16 md:pb-20 border-b border-olive/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff55_2px,transparent_2px)] [background-size:26px_26px]" />
          <div className="absolute -right-20 top-10 w-64 h-64 bg-olive/10 rounded-full blur-3xl" />
          <Grain opacity="opacity-[0.07]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SectionHeading
              titleAs="h1"
              eyebrow="Áreas de práctica"
              title={`Servicios de gestoría en ${site.city}`}
              description="Cubrimos todas las áreas clave para que empresas y autónomos operen con total seguridad."
            />
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <StaggerGrid
            trigger="mount"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
          >
            {allServices.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUpItem}
                className="card-rich p-6 md:p-7 h-full"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-olive/12 to-olive/5 rounded-xl flex items-center justify-center text-olive mb-5 border border-olive/10">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-olive-dark mb-2">{service.title}</h3>
                <p className="text-olive-dark/65 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-16 md:pb-20 px-4">
        <div className="max-w-4xl mx-auto relative bg-olive-dark rounded-2xl p-8 md:p-12 text-center overflow-hidden border border-olive/20 shadow-2xl shadow-olive-dark/20">
          <Grain opacity="opacity-[0.1]" />
          <div className="absolute inset-0 bg-[radial-gradient(#fafaf508_1px,transparent_1px)] [background-size:18px_18px]" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Necesitas algo específico?
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Si tu trámite no aparece en la lista, cuéntanoslo. Resolvemos casos difíciles a diario.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-sand text-olive-dark px-8 py-3.5 rounded-lg font-bold hover:bg-white transition-colors"
            >
              Consultar mi caso
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
