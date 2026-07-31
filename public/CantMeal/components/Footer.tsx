const PRODUCT_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#for-canteens", label: "For canteens" },
  { href: "#waitlist", label: "Join waitlist" },
];

const COMPANY_LINKS = [
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500 text-xs font-bold text-white">
              Q
            </span>
            <span className="font-display text-base font-bold text-ink">QueueLess</span>
          </div>
          <p className="mt-3 text-sm text-stone-500">No queues. No waste. Just food.</p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:gap-16">
          <div>
            <p className="text-sm font-semibold text-ink">Product</p>
            <ul className="mt-3 flex flex-col gap-2">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-stone-500 hover:text-brand-600">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Company</p>
            <ul className="mt-3 flex flex-col gap-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-stone-500 hover:text-brand-600">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-stone-200 pt-6 text-xs text-stone-400">
        © {new Date().getFullYear()} QueueLess. A portfolio project — not affiliated with any
        campus (yet).
      </div>
    </footer>
  );
}
