import { IconClock, IconLeaf, IconUsers } from "./icons";
import Reveal from "./Reveal";

const STATS = [
  {
    icon: IconLeaf,
    value: "~30%",
    label: "of canteen food goes unsold and wasted when kitchens have to guess quantities.",
    accent: "moss" as const,
  },
  {
    icon: IconUsers,
    value: "15–20 min",
    label: "average time students spend queuing during a 20–30 minute recess.",
    accent: "brand" as const,
  },
  {
    icon: IconClock,
    value: "10+ min",
    label: "of class time missed lining up early just to beat the recess rush.",
    accent: "moss" as const,
  },
];

export default function StatsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              The problem
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Recess shouldn&apos;t feel like a race.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <Reveal key={stat.value} delay={index * 100}>
              <div className="h-full rounded-3xl border border-stone-200 bg-white p-8 transition-shadow hover:shadow-lg">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                    stat.accent === "brand" ? "bg-brand-50 text-brand-600" : "bg-moss-50 text-moss-600"
                  }`}
                >
                  <stat.icon className="h-5 w-5" />
                </span>
                <p className="mt-5 font-display text-4xl font-bold tracking-tight text-ink">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-stone-400">
          Illustrative figures based on typical campus canteen operations.
        </p>
      </div>
    </section>
  );
}
