"use client";

import { motion } from "framer-motion";
import GridPatch from "./GridPatch";
import PhotoCard from "./PhotoCard";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <GridPatch corner="top-left" className="left-0 top-0 h-80 w-80" />
      <GridPatch corner="bottom-right" className="bottom-0 right-0 h-96 w-96" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-pixel text-xs tracking-[0.3em] text-lime"
          >
            PORTFOLIO — SAY HELLO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-stack text-[clamp(3rem,10vw,7rem)]"
          >
            <span className="block">UI/UX</span>
            <span className="block">DESIGNER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 font-pixel text-xl tracking-wide text-cream sm:text-2xl"
          >
            NAVANEETH KRISHNAN P K
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <a
              href="mailto:navaneethkrshnanpk02@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-cream-dim/30 bg-ink-950/60 px-5 py-3 text-sm text-cream-dim transition-colors hover:border-lime hover:text-lime"
            >
              navaneethkrshnanpk02@gmail.com
            </a>
          </motion.div>
        </div>

        <PhotoCard />
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-dim"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4v14m0 0l-6-6m6 6l6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>
    </section>
  );
}
