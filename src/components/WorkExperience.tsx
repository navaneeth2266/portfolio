import Float from "./Float";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Camera from "./doodles/Camera";
import GloveFlower from "./doodles/GloveFlower";
import GridPatch from "./GridPatch";

const roles = [
  {
    title: "Digital Marketing Executive",
    company: "Lindeavecmathew",
    color: "text-lime",
    body: "Directed full cycle digital marketing and Meta ad strategies for international tour packages to Uzbekistan Oman and France. Managed all daily marketing operations from creating high performing social media content to developing optimized landing pages consistently driving audience engagement and sustained conversion growth",
  },
  {
    title: "Multimedia & UI Design",
    color: "text-bubblegum",
    body: "Multimedia & UI/UX Design: Produced and edited high quality multimedia content utilizing Adobe Premiere Pro driving digital engagement.

",
  },
  {
    title: "Workflow Automation",
    color: "text-lime",
    body: "Developed Custom Automation Tools: Engineered Python scripts to streamline core company operations, drastically reducing time spent on repetitive manual tasks.\n\nOptimized Business Workflows: Built and deployed internal tools for automated hotel voucher generation, real-time flight fare tracking, and metadata management, improving overall operational efficiency.",
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
              <h3 className={`font-display text-2xl uppercase tracking-wide sm:text-3xl hollow-purple-text ${role.color}`}>
                {role.title}
              </h3>
              {role.company && (
                <p className="mt-1 font-pixel text-xs tracking-wide text-cream-dim/70">
                  {role.company}
                </p>
              )}
              <p className="mt-3 max-w-md whitespace-pre-wrap text-base leading-relaxed text-cream-dim">
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
