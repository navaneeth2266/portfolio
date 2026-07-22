"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#showcase", label: "Showcase" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const scrollToTarget = () => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    };
    // Closing the mobile menu triggers a height animation that fights the
    // smooth-scroll if both run at once, so let it finish collapsing first.
    if (open) {
      setOpen(false);
      window.setTimeout(scrollToTarget, 320);
    } else {
      scrollToTarget();
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink-950/85 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="font-pixel text-lg tracking-wide text-bubblegum"
        >
          NK<span className="text-lime">.</span>
        </a>

        <ul className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative font-sans text-sm uppercase tracking-widest text-cream-dim transition-colors hover:text-cream"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-lime transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 sm:hidden"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="h-0.5 w-6 bg-cream"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="h-0.5 w-6 bg-cream"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="h-0.5 w-6 bg-cream"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-ink-950/95 backdrop-blur-md sm:hidden"
          >
            {links.map((link) => (
              <li key={link.href} className="border-t border-ink-700/60">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-6 py-4 text-sm uppercase tracking-widest text-cream-dim"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
