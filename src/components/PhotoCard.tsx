"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EyesHeadphones from "./doodles/EyesHeadphones";

export default function PhotoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-sm sm:max-w-md"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-4 border-ink-950 shadow-[10px_10px_0_rgba(0,0,0,0.55)]">
        <Image
          src="/portrait.jpg"
          alt="Navaneeth Krishnan P K"
          fill
          priority
          sizes="(min-width: 640px) 420px, 90vw"
          className="object-cover object-top"
        />
      </div>

      <motion.div
        className="absolute -right-8 -top-10 w-28 sm:w-36"
        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <EyesHeadphones />
      </motion.div>
    </motion.div>
  );
}
