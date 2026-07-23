import Reveal from "./Reveal";

const socials = [
  { label: "Email", href: "mailto:navaneethkrishnanpk02@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/navaneeth___krishnan_/?hl=en" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/navaneeth-krishnan-pk/" },
  { label: "Behance", href: "https://www.behance.net/navaneekrishna159" },
  { label: "GitHub", href: "https://github.com/navaneeth2266" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-ink-700/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="heading-stack text-[clamp(2.5rem,8vw,5.5rem)]">
            LET&apos;S WORK TOGETHER
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="group relative font-pixel text-sm tracking-wide text-cream-dim transition-colors hover:text-lime"
            >
              {s.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-lime transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </Reveal>

        <Reveal
          delay={0.3}
          className="mt-16 flex flex-col gap-4 text-xs uppercase tracking-widest text-cream-dim/60 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>&copy; {new Date().getFullYear()} Navaneeth Krishnan P K</span>
          <a href="#top" className="hover:text-lime">
            Back to top ↑
          </a>
        </Reveal>
      </div>
    </footer>
  );
}
