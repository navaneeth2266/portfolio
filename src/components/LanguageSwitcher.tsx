"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { languages } from "@/lib/languages";

// Google Translate remembers the chosen language in this cookie ("/en/fr").
const COOKIE_NAME = "googtrans";

const noopSubscribe = () => () => {};

function readCookieCode(): string {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=/[^/]*/([^;]+)`));
  return match ? decodeURIComponent(match[1]) : "en";
}

// The cookie can sit on the host or any parent domain, so expire every variant.
function clearCookie() {
  const expired = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  document.cookie = expired;
  const parts = location.hostname.split(".");
  for (let i = 0; i < parts.length - 1; i++) {
    document.cookie = `${expired}; domain=.${parts.slice(i).join(".")}`;
  }
}

function chooseLanguage(code: string) {
  // The widget can't switch back to the original page, so English clears the cookie and reloads.
  if (code === "en") {
    clearCookie();
    location.reload();
    return;
  }

  const combo = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
  if (combo) {
    combo.value = code;
    combo.dispatchEvent(new Event("change"));
  } else {
    // Widget hasn't loaded yet: set the cookie so it translates as soon as it does.
    document.cookie = `${COOKIE_NAME}=/en/${code}; path=/`;
    location.reload();
  }
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // "en" while rendering on the server, then whatever the cookie says on the client.
  const cookieCode = useSyncExternalStore(noopSubscribe, readCookieCode, () => "en");
  const current = picked ?? cookieCode;
  const currentLanguage = languages.find((l) => l.code === current) ?? languages[0];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    // translate="no": the language names must stay in their own language
    <div ref={rootRef} translate="no" className="notranslate relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${currentLanguage.name}. Change language`}
        onClick={() => setOpen((o) => !o)}
        className="flex cursor-pointer items-center gap-1.5 font-pixel text-xs uppercase tracking-widest text-cream-dim transition-colors hover:text-lime"
      >
        <GlobeIcon className="size-4" />
        {currentLanguage.code.split("-")[0]}
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Choose a language"
          className="absolute right-0 top-full z-50 mt-3 max-h-80 w-56 overflow-y-auto rounded-xl border border-lime/40 bg-[#1C0245] p-1 shadow-[6px_6px_0_rgba(0,0,0,0.45)]"
        >
          {languages.map((language) => {
            const selected = language.code === currentLanguage.code;
            return (
              <li key={language.code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    setPicked(language.code);
                    setOpen(false);
                    chooseLanguage(language.code);
                  }}
                  className={`flex w-full cursor-pointer items-baseline justify-between gap-3 rounded-lg px-3 py-2 text-left font-poppins text-sm transition-colors hover:bg-lime/10 ${
                    selected ? "text-lime" : "text-cream"
                  }`}
                >
                  <span>{language.label}</span>
                  <span className="text-xs text-cream-dim/70">{language.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
