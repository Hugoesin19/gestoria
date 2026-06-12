"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Grain from "@/components/Grain";
import { fadeUpItem } from "@/lib/motion";
import StaggerGrid from "@/components/StaggerGrid";

const features = [
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
    desc: "No eres un número en un sistema. Somos tu gestoría de confianza, como las de toda la vida.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-sand-warm relative overflow-hidden isolate">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff55_2px,transparent_2px)] [background-size:26px_26px]" />
        <div className="absolute -left-20 bottom-0 w-80 h-80 bg-olive/8 rounded-full blur-3xl" />
        <Grain opacity="opacity-[0.08]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Nuestra forma de trabajar"
          title="Por qué elegirnos"
          description="La experiencia de una gestoría tradicional, con la comodidad que necesitas hoy."
        />

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUpItem}
              className="relative bg-cream/95 backdrop-blur-sm p-7 md:p-8 rounded-2xl border border-white/60 shadow-lg shadow-olive/5 overflow-hidden group hover:shadow-xl hover:shadow-olive/10 transition-shadow"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-olive/5 group-hover:bg-olive/8 transition-colors" />
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-olive mb-5 shadow-sm border border-olive/10 group-hover:scale-105 transition-transform">
                <feature.icon className="w-7 h-7" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-olive-dark mb-2">{feature.title}</h3>
              <p className="text-olive-dark/65 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
