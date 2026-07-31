# QueueLess

A landing page for a campus food pre-ordering concept: students order from the canteen
during class and pick up at recess, so canteens cook to real demand instead of a guess.

This is a portfolio piece — single page, no backend, static/mock data only.

> **Naming:** "QueueLess" is a placeholder. A few alternatives are noted as a comment in
> [`app/layout.tsx`](app/layout.tsx) (`Recess`, `QueueZero`, `TrayAhead`, `MessLess`) —
> see the [Naming](#naming) section below for the reasoning.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [Tailwind CSS](https://tailwindcss.com) 4 (CSS-first config, no `tailwind.config.js`)
- TypeScript
- `next/font` (Google Fonts) for typography, `next/image` for the one illustration asset
- No backend — the waitlist forms are fully client-side and simulate a success state

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production build: `npm run build && npm start`.

Requires Node 18.18+ (Next.js 16 requirement).

## Project structure

```
app/
  layout.tsx      Fonts, metadata, root HTML shell
  page.tsx         Composes all sections in order
  globals.css      Tailwind import + theme tokens (@theme) + keyframes
  icon.svg         Favicon (Next's file-based icon convention)
components/
  Navbar.tsx        Sticky nav, mobile menu
  Hero.tsx          Headline, waitlist form, visual
  PhoneMockup.tsx   Hand-built "order screen" UI for the hero
  StatsSection.tsx  3 problem-framing stat cards
  HowItWorks.tsx    4-step timeline
  DualAudience.tsx  Students vs. canteens split
  WaitlistCTA.tsx   Repeated email capture, dark section
  Footer.tsx
  WaitlistForm.tsx  Shared form: email (+ optional campus) input, fake-submit success state
  Reveal.tsx        Lightweight scroll-entrance animation (IntersectionObserver, no library)
  icons.tsx         Small inline SVG icon set (no icon library dependency)
public/
  blob-accent.svg   Decorative gradient illustration behind the hero visual
```

## Design notes

- **Color:** a coral/tangerine accent (`brand`, `#FF5630` at 500) paired with a moss green
  (`moss`) for the canteen/sustainability side, on a warm cream background (`paper`,
  `#FFFCF7`) with a near-black ink (`ink`, `#15130F`) instead of pure black. Deliberately not
  indigo/blue. Both scales are defined in `app/globals.css` via Tailwind v4's `@theme` block.
- **Type:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) for headings
  (`font-display`), [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
  for body text (`font-sans`) — loaded via `next/font/google` and wired into the Tailwind
  theme with `@theme inline` so the utility classes reference next/font's CSS variables.
- **Hero visual:** the phone mockup is hand-built HTML/CSS (it's UI, not an image), so
  `next/image` is used for the one thing that actually is an image — the decorative blob
  gradient behind it (`public/blob-accent.svg`, statically imported).
- **Animation:** entrance effects use a small `Reveal` wrapper (IntersectionObserver +
  Tailwind transitions) instead of a library, and respect `prefers-reduced-motion`.
- **Currency:** the phone mockup menu uses ₹ (INR) as a placeholder, in keeping with
  "canteen"/"recess" phrasing — trivial to change in `components/PhoneMockup.tsx`.
- **Stats:** the numbers in `StatsSection.tsx` are illustrative placeholders (labeled as
  such on the page), not sourced claims — swap in real numbers if you have them.

## Naming

"QueueLess" works (descriptive, unambiguous) but is a little generic. Alternatives worth
considering, roughly ranked:

1. **Recess** — names the exact moment of pickup; short and easy to say out loud.
2. **QueueZero** — bundles both payoffs (no queue, no waste) into one word.
3. **TrayAhead** — literal "order ahead" + canteen tray; reads as an app name.
4. **MessLess** — pun on "mess" (common term for a campus dining hall) + less
   queuing/waste. Memorable, but "messy" is an easy misread.

## Known limitations

- Waitlist forms are non-functional by design — submitting sets local state to show a
  confirmation message, there's no email collection or storage.
- All content (menu items, stats, copy) is placeholder/mock data.
- No test suite — this is a static marketing page with no business logic to test.
