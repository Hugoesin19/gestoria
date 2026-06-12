import type { Variants } from "framer-motion";

/** Contenedor: los hijos aparecen en orden del DOM (1 → N) */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const fadeUpItem: Variants = {
  // opacity: 1 en hidden → si falla la animación, el contenido sigue visible
  hidden: { opacity: 1, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
