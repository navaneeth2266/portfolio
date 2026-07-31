import Image from "next/image";
import blobAccent from "@/public/blob-accent.svg";
import PhoneMockup from "./PhoneMockup";
import WaitlistForm from "./WaitlistForm";
import Reveal from "./Reveal";
import { IconLeaf } from "./icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
              <IconLeaf className="h-4 w-4" />
              Zero food waste, by design
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              No more recess queues.
              <br />
              <span className="text-brand-500">No more food waste.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              QueueLess lets students order canteen food during class and pick it up at
              recess — no queue, no guesswork, nothing binned. Canteens cook to real demand
              instead of a hopeful guess.
            </p>

            <div className="mt-8">
              <WaitlistForm id="hero" />
              <p className="mt-3 text-xs text-stone-500">
                Free for students · No spam · Unsubscribe anytime
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center">
            <Image
              src={blobAccent}
              alt=""
              aria-hidden="true"
              fill
              priority
              className="-z-10 scale-125 object-contain opacity-70 blur-2xl"
            />
            <PhoneMockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
