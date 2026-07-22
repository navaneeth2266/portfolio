"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function PosterCard({
  rotate,
  theme,
  eyebrow,
  eyebrowColor,
  headline,
  footer,
  delay = 0,
  className = "",
}: {
  rotate: number;
  theme: "light" | "dark";
  eyebrow: string;
  eyebrowColor: string;
  headline: string;
  footer: ReactNode;
  delay?: number;
  className?: string;
}) {
  const isLight = theme === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotate * 1.6 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex aspect-[3/4] w-64 flex-col justify-between overflow-hidden rounded-2xl border-4 border-ink-950 p-5 shadow-[8px_8px_0_rgba(0,0,0,0.45)] sm:w-72 ${
        isLight ? "bg-cream text-ink-950" : "bg-ink-950 text-cream"
      } ${className}`}
    >
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />

      <span
        className="relative w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
        style={{ backgroundColor: eyebrowColor, color: "#0b1a0e" }}
      >
        {eyebrow}
      </span>

      <p className="relative font-display text-2xl uppercase leading-[0.95] tracking-wide sm:text-3xl">
        {headline}
      </p>

      <div className="relative">{footer}</div>
    </motion.div>
  );
}
