"use client";

import { motion } from "framer-motion";
import { Calculator, Scale, Users, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Grain from "@/components/Grain";
import { fadeUpItem } from "@/lib/motion";
import StaggerGrid from "@/components/StaggerGrid";

const services = [
  {
    icon: Calculator,
    title: "Asesoría Fiscal",
    desc: "Presentación de impuestos, planificación fiscal y respuesta a requerimientos de Hacienda.",
    num: "01",
  },
  {
    icon: Users,
    title: "Gestión Laboral",
    desc: "Nóminas, contratos, altas y bajas en la Seguridad Social. Todo lo relacionado con tus empleados.",
    num: "02",
  },
  {
    icon: FileText,
    title: "Contabilidad",
    desc: "Libros contables al día y análisis de balances para una visión clara de tu negocio.",
    num: "03",
  },
  {
    icon: Scale,
    title: "Jurídico Mercantil",
    desc: "Constitución de empresas, herencias y trámites legales para proteger tus intereses.",
    num: "04",
  },
];

export default function ServicesHome() {
  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden isolate">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-72 h-72 bg-olive/5 rounded-full blur-3xl" />
        <Grain />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Áreas de trabajo"
          title="Nuestros servicios"
          description="Cubrimos todas las áreas clave para que autónomos y empresas operen con seguridad."
        />

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUpItem}
              className="card-rich p-6 md:p-7 group"
            >
              <span className="absolute top-4 right-5 text-4xl font-heading font-bold text-olive/8 group-hover:text-olive/12 transition-colors">
                {service.num}
              </span>
              <div className="w-12 h-12 bg-gradient-to-br from-olive/12 to-olive/5 rounded-xl flex items-center justify-center text-olive mb-5 border border-olive/10">
                <service.icon className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-olive-dark mb-2 pr-8">{service.title}</h3>
              <p className="text-olive-dark/65 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </StaggerGrid>

        <div className="text-center mt-12">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 bg-olive/8 hover:bg-olive/12 text-olive-dark font-bold px-6 py-3 rounded-xl border border-olive/15 transition-all hover:-translate-y-0.5"
          >
            Ver todos los servicios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
