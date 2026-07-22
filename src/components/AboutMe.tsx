import Float from "./Float";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Camera from "./doodles/Camera";

export default function AboutMe() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading lines={["ABOUT", "ME"]} />

          <Reveal delay={0.15} className="mt-10 max-w-xl">
            <p className="text-lg leading-relaxed text-cream-dim">
              Hello, I&apos;m Navaneeth Krishnan P K, a UI/UX Designer dedicated to crafting digital experiences that feel effortless. My primary focus is on transforming complex user journeys into clean, intuitive interfaces using Figma. I approach design with a logical mindset, seamlessly blending visual aesthetics with user-centered functionality. While my core passion is interface design, I also leverage my skills in multimedia campaigns and Python scripting to streamline workflows and bring polished, cohesive ideas to life.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 max-w-xl border-l-2 border-lime/60 pl-6">
            <p className="text-base leading-relaxed text-cream-dim/90">
              When I&apos;m off the clock, I like to keep things hands-on. You&apos;ll
              usually find me wrenching on my motorcycle, planning my next
              camping trip, or unwinding with video games and indie rock.
            </p>
          </Reveal>
        </div>

        <div className="relative hidden items-center justify-center md:flex">
          <Float duration={6} range={16}>
            <Camera className="w-64 lg:w-80" />
          </Float>
        </div>
      </div>
    </section>
  );
}
