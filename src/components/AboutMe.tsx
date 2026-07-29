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
              Hello I&apos;m Navaneeth Krishnan P K. I&apos;m a UI/UX Designer focused on turning complex user journeys into clean intuitive interfaces. I design with a logical mindset that puts users first while balancing visual craft with functional clarity in every interface I build in Figma. Alongside design I bring hands on experience in digital marketing execution and workflow automation using Python. This gives me a practical lens on how design decisions translate into real business outcomes.
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
