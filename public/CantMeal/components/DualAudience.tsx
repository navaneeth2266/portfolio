import { IconCheckCircle, IconChefHat, IconGraduationCap } from "./icons";
import Reveal from "./Reveal";

const STUDENT_POINTS = [
  "Skip the recess line entirely",
  "Order ahead during any free period",
  "Pay in-app — no cash, no card fumbling at the counter",
];

const CANTEEN_POINTS = [
  "Know exact demand before you cook anything",
  "Cut food costs and waste from over-prepping",
  "Reduce recess-rush chaos and staff overload",
];

export default function DualAudience() {
  return (
    <section id="for-canteens" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Built for both sides of the counter
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Good for students. Great for canteens.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-brand-100 bg-brand-50 p-8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-600">
                <IconGraduationCap className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">For students</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {STUDENT_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-stone-700">
                    <IconCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-moss-100 bg-moss-50 p-8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-moss-600">
                <IconChefHat className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">For canteens</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {CANTEEN_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-stone-700">
                    <IconCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-moss-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
