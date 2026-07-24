"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GridPatch from "./GridPatch";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const posters = [
  { src: "/posters/France National Day.png", title: "Fête Nationale", tag: "14 Juillet" },
  { src: "/posters/Music festival.png", title: "Fête de la Musique", tag: "21 Juin" },
  { src: "/posters/Yoga Day.png", title: "Journée du Yoga", tag: "21 Juin" },
  { src: "/posters/Holi.jpg", title: "Joyeux Holi", tag: "Festival" },
  { src: "/posters/Kerala.jpg", title: "Ayurvedic Wellness", tag: "Health" },
  { src: "/posters/Attukal Pongala.jpg", title: "Attukal Pongala", tag: "Festival" },
];

const tilts = [-4, 3, -2, 4, -3, 2];

export default function Showcase() {
  return (
    <section id="showcase" className="relative scroll-mt-24 overflow-hidden py-28">
      <GridPatch corner="bottom-left" className="bottom-0 left-0 h-96 w-96" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading lines={["POSTER", "GALLERY"]} />

        <Reveal delay={0.12} className="mt-6 max-w-xl">
          <p className="text-lg leading-relaxed text-cream-dim">
            A quick look at some banners, including festival greetings and promotional posts made for actual campaigns.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posters.map((poster, i) => (
            <motion.div
              key={poster.src}
              initial={{ opacity: 0, y: 40, rotate: tilts[i] * 1.6 }}
              whileInView={{ opacity: 1, y: 0, rotate: tilts[i] }}
              whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-ink-950 shadow-[8px_8px_0_rgba(0,0,0,0.45)]"
            >
              <Image
                src={encodeURI(poster.src)}
                alt={poster.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="inline-block rounded-full bg-lime px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink-950">
                  {poster.tag}
                </span>
                <p className="mt-2 font-display text-xl uppercase leading-none tracking-wide text-cream">
                  {poster.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
