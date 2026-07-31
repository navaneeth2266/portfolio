import { IconChefHat, IconCheckCircle, IconSmartphone, IconTrendingUp } from "./icons";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: IconSmartphone,
    title: "Order during class",
    body: "Open QueueLess between periods, browse today's menu, and place your order in under a minute.",
  },
  {
    icon: IconTrendingUp,
    title: "Canteen sees live demand",
    body: "Your order lands on the canteen's live dashboard the moment you pay — no guesswork, no printed sheets.",
  },
  {
    icon: IconChefHat,
    title: "Food prepped to order",
    body: "The kitchen cooks exactly what's been ordered, timed to be fresh right as recess starts.",
  },
  {
    icon: IconCheckCircle,
    title: "Pickup at recess, no queue",
    body: "Walk up to the no-queue counter, grab your named order, and get back to your day in minutes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-stone-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              How it works
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              From class to counter in four steps.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          <div
            className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-stone-200 md:block"
            aria-hidden="true"
          />

          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 100}>
              <div className="relative flex flex-col items-start md:items-center md:text-center">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-500 bg-white text-brand-600">
                  <step.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-brand-500">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
