"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Float({
  children,
  className = "",
  duration = 5,
  delay = 0,
  range = 14,
  rotateRange = 6,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  range?: number;
  rotateRange?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -range, 0],
        rotate: [0, rotateRange, 0, -rotateRange, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
