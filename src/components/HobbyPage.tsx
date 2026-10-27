import Image from "next/image";
import Link from "next/link";
import { hobbies, type Hobby } from "@/lib/hobbies";
import Footer from "./Footer";
import GridPatch from "./GridPatch";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function HobbyPage({ hobby }: { hobby: Hobby }) {
  const others = Object.values(hobbies).filter((h) => h.href !== hobby.href);

  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="font-pixel text-lg tracking-wide text-bubblegum">
          NK<span className="text-lime">.</span>
        </Link>
        <Link
          href="/#about"
          className="group relative font-pixel text-sm tracking-wide text-cream-dim transition-colors hover:text-lime"
        >
          ← Back to portfolio
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-lime transition-all duration-300 group-hover:w-full" />
        </Link>
      </header>

      <main className="relative overflow-hidden pb-28 pt-16">
        <GridPatch corner="top-right" className="right-0 top-0 h-96 w-96" />

        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading lines={hobby.lines} />

          <Reveal delay={0.15} className="mt-10 max-w-xl border-l-2 border-lime/60 pl-6">
            <p className="font-poppins text-lg leading-relaxed text-cream-dim">
              {hobby.intro}
            </p>
          </Reveal>

          {hobby.gallery.length > 0 ? (
            <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {hobby.gallery.map((photo) => (
                <Reveal key={photo.src}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-ink-950 shadow-[8px_8px_0_rgba(0,0,0,0.45)]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={0.3} className="mt-14 max-w-xl">
              <div className="flex aspect-video items-center justify-center rounded-2xl border-2 border-dashed border-cream-dim/30 font-pixel text-sm tracking-wide text-cream-dim/70">
                Photos coming soon
              </div>
            </Reveal>
          )}

          <Reveal delay={0.2} className="mt-20">
            <p className="font-pixel text-xs uppercase tracking-widest text-cream-dim/60">
              More off the clock
            </p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
              {others.map((other) => (
                <Link
                  key={other.href}
                  href={other.href}
                  className="group relative font-pixel text-sm tracking-wide text-cream-dim transition-colors hover:text-lime"
                >
                  {other.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-lime transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
