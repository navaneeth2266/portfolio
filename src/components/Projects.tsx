import Float from "./Float";
import PosterCard from "./PosterCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import EyesHeadphones from "./doodles/EyesHeadphones";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Float
          className="mb-6 w-16 text-lime"
          duration={4}
          range={6}
          rotateRange={10}
        >
          <svg viewBox="0 0 40 32" fill="currentColor">
            <path d="M0 20C0 8.95 7.16 2.24 16.8 0l2.4 5.4C12.6 7.4 9.6 11 9.2 16H18v16H0V20Zm22 0C22 8.95 29.16 2.24 38.8 0l2.4 5.4C34.6 7.4 31.6 11 31.2 16H40v16H22V20Z" />
          </svg>
        </Float>

        <SectionHeading lines={["MY", "PROJECT"]} />

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:justify-start sm:gap-6 lg:gap-4">
          <PosterCard
            rotate={-8}
            theme="light"
            eyebrow="Faygo Strawberry"
            eyebrowColor="var(--color-tangerine)"
            headline="UI Front Page"
            delay={0}
            image={{
              src: "/projects/faygo-strawberry.png",
              alt: "Faygo Strawberry hero landing page design",
            }}
            footer={
              <div className="flex flex-wrap gap-1.5">
                {["UI/UX", "Framer Motion", "Branding"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-cream/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cream"
                  >
                    {t}
                  </span>
                ))}
              </div>
            }
          />

          <PosterCard
            rotate={3}
            theme="dark"
            eyebrow="Bannerjee"
            eyebrowColor="var(--color-lime)"
            headline="For All Your Marketing Needs"
            delay={0.12}
            className="sm:-translate-y-4"
            footer={
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-10 flex-1 rounded-md bg-cream/10"
                  />
                ))}
              </div>
            }
          />

          <PosterCard
            rotate={-4}
            theme="light"
            eyebrow="Apex Med Tutorial"
            eyebrowColor="var(--color-lime)"
            headline={"Don't Just Memorize. Understand. Apply. Excel."}
            delay={0.24}
            footer={
              <span className="inline-block rounded-full bg-ink-900 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-lime">
                Admissions Open
              </span>
            }
          />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] md:items-center">
          <Float duration={5.5} className="hidden justify-self-end md:block w-28">
            <EyesHeadphones />
          </Float>

          <Reveal delay={0.1} className="max-w-2xl">
            <p className="text-lg leading-relaxed text-cream-dim">
              Bannerjee is my personal design initiative dedicated to creating high quality banners and posters. Using Figma I transform concepts into bold and effective graphics driven by strong typography. Whether crafting digital marketing materials or print ready layouts this project serves as a showcase for my approach to visual storytelling and professional digital art.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
