import { Award, Clock, MapPin, Users } from "lucide-react";
import { site } from "@/lib/site";
import Grain from "@/components/Grain";

const items = [
  {
    icon: Award,
    label: `Desde ${site.since}`,
    sub: "Experiencia al servicio del cliente",
  },
  {
    icon: MapPin,
    label: site.city,
    sub: `${site.province}, España`,
  },
  {
    icon: Users,
    label: site.clients,
    sub: "Clientes atendidos",
  },
  {
    icon: Clock,
    label: "Horario de oficina",
    sub: site.hours,
  },
];

export default function TrustBar() {
  return (
    <section className="relative isolate overflow-hidden bg-white border-y border-olive/10 shadow-[0_8px_30px_rgba(59,75,33,0.06)] z-10">
      <Grain opacity="opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 md:py-11 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {items.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-olive/15 to-olive/5 flex items-center justify-center text-olive shrink-0 border border-olive/10 shadow-sm">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-olive-dark text-sm md:text-base">{label}</p>
                <p className="text-olive-dark/55 text-xs md:text-sm mt-0.5 leading-snug">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
