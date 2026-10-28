import { hobbies } from "@/lib/hobbies";
import HobbyLink from "./HobbyLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import NowPlaying from "./NowPlaying";
import VinylNotes from "./doodles/VinylNotes";

export default function AboutMe() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading lines={["ABOUT", "ME"]} />

          <Reveal delay={0.15} className="mt-10 max-w-xl">
            <p className="font-poppins text-lg leading-relaxed text-cream-dim">
              Digital Marketing Executive with hands on UI/UX design expertise in Figma. I merge data driven campaign strategy with user centered interface design to help global brands grow their digital presence. Skilled in full funnel social media growth landing page and interface design and cross functional collaboration that turns creative work into measurable engagement and lead generation results for international markets.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 max-w-xl border-l-2 border-lime/60 pl-6">
            <p className="font-poppins text-base leading-relaxed text-cream-dim/90">
              When I&apos;m off the clock, I like to keep things hands-on. You&apos;ll
              usually find me wrenching on my motorcycle, planning my next{" "}
              <HobbyLink href={hobbies.camping.href}>camping trip</HobbyLink>, or
              unwinding with video games and indie rock. I also love to{" "}
              <HobbyLink href={hobbies.crafts.href}>craft things</HobbyLink>,
              paint, and <HobbyLink href={hobbies.drawing.href}>draw designs</HobbyLink>.
            </p>
          </Reveal>

          <Reveal delay={0.45} className="mt-8 max-w-xl">
            <NowPlaying />
          </Reveal>
        </div>

        <div className="relative flex items-center justify-center">
          <VinylNotes className="w-52 sm:w-60 md:w-72 lg:w-96" />
        </div>
      </div>
    </section>
  );
}
