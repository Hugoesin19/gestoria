"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { staggerContainer } from "@/lib/motion";

type Props = {
  className?: string;
  children: React.ReactNode;
  /** "mount" = al abrir la página; "scroll" = al hacer scroll hasta la sección */
  trigger?: "mount" | "scroll";
};

function isElementInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export default function StaggerGrid({ className, children, trigger = "scroll" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.01 });
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    if (trigger === "mount") {
      setVisible(true);
      return;
    }

    if (inView) {
      setVisible(true);
    }
  }, [trigger, inView, reducedMotion]);

  // Respaldo: en navegación client-side whileInView/useInView a veces no dispara
  useEffect(() => {
    if (reducedMotion || visible) return;

    const el = ref.current;
    if (!el) return;

    const revealIfVisible = () => {
      if (isElementInViewport(el)) {
        setVisible(true);
      }
    };

    revealIfVisible();
    const raf = requestAnimationFrame(revealIfVisible);
    const timer = setTimeout(revealIfVisible, 200);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [reducedMotion, visible, trigger]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
