import Float from "./Float";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Camera from "./doodles/Camera";
import GloveFlower from "./doodles/GloveFlower";
import GridPatch from "./GridPatch";

const roles = [
  {
    title: "Digital Marketing Executive",
    color: "text-lime",
    body: "Ran digital campaigns for destinations like Uzbekistan and Oman. Created marketing content, social media copy, and landing pages using Figma and Canva to drive engagement.",
  },
  {
    title: "Multimedia & UI/UX Design",
    color: "text-bubblegum",
    body: "Produced and edited multimedia content using Adobe Premiere Pro. Designed clean, user-friendly interfaces to improve how customers interact with our platforms.",
  },
  {
    title: "Workflow Automation",
    color: "text-lime",
    body: "Wrote custom Python scripts to automate agency operations. This included a system for generating hotel vouchers, tracking flight fares, and managing metadata to save time on repetitive tasks.",
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="relative scroll-mt-24 overflow-hidden py-28">
      <GridPatch corner="top-right" className="right-0 top-0 h-96 w-96" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-[1fr_1fr] md:items-start">
        <div className="order-2 space-y-14 md:order-1">
          {roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.12}>
              <h3 className={`font-display text-2xl uppercase tracking-wide sm:text-3xl ${role.color}`}>
                {role.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-cream-dim">
                {role.body}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="order-1 relative md:order-2">
          <Float className="absolute -left-4 -top-10 hidden w-24 lg:block" duration={5}>
            <Camera />
          </Float>
          <SectionHeading lines={["WORK", "EXPERIENCE"]} align="right" />
          <Float
            className="absolute -bottom-16 right-4 hidden w-28 lg:block"
            duration={6}
            delay={1}
          >
            <GloveFlower />
          </Float>
        </div>
      </div>
    </section>
  );
}
