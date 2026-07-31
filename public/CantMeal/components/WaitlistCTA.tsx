import WaitlistForm from "./WaitlistForm";
import Reveal from "./Reveal";
import { IconMapPin } from "./icons";

export default function WaitlistCTA() {
  return (
    <section id="waitlist" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="rounded-[2.5rem] bg-ink px-6 py-16 text-center sm:px-16">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
              <IconMapPin className="h-4 w-4" />
              Coming soon to campuses near you
            </span>

            <h2 className="mx-auto mt-6 max-w-xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Be early. For once.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/70">
              QueueLess is getting ready to launch. Join the waitlist and your canteen could
              be next — no more recess sprint, no more binned food.
            </p>

            <div className="mx-auto mt-8 max-w-xl">
              <WaitlistForm id="cta" variant="dark" showCampusField />
            </div>
            <p className="mt-4 text-xs text-white/50">
              We&apos;re rolling out campus by campus — tell us where you study and we&apos;ll
              bring QueueLess there next.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
