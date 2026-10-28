"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

const ngoUrl = "https://www.etindia.org/";

export default function VolunteeringLink({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.showModal();

    // Keep the page from scrolling behind the popup.
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="hobby-link cursor-pointer"
      >
        {children}
      </button>

      {/* Portalled because a <dialog> can't sit inside the paragraph this link lives in */}
      {open &&
        createPortal(
          <dialog
            ref={dialogRef}
            aria-labelledby={titleId}
            onClose={() => setOpen(false)}
            // Only the backdrop is the dialog element itself; the padded panel inside catches the rest
            onClick={(e) => {
              if (e.target === e.currentTarget) e.currentTarget.close();
            }}
            className="volunteer-dialog m-auto w-[min(92vw,30rem)] rounded-2xl border-2 border-lime/60 bg-[#1C0245] p-0 text-cream shadow-[8px_8px_0_rgba(0,0,0,0.55)] backdrop:bg-black/60 backdrop:backdrop-blur-sm"
          >
            <div className="relative p-8">
              <button
                type="button"
                aria-label="Close"
                onClick={() => dialogRef.current?.close()}
                className="absolute right-4 top-4 flex size-8 cursor-pointer items-center justify-center rounded-full font-pixel text-lg leading-none text-cream-dim transition-colors hover:text-lime"
              >
                ×
              </button>

              <p className="font-pixel text-xs uppercase tracking-widest text-bubblegum">
                Off the clock
              </p>
              <h2
                id={titleId}
                className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-lime"
              >
                Volunteering
              </h2>
              <p className="mt-4 font-poppins text-base leading-relaxed text-cream-dim">
                I volunteer with Empower Tamizhagam, a certified NGO in India working for
                livelihoods, opportunity and dignity across Tamil Nadu.
              </p>

              <a
                href={ngoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-lime px-6 py-3 font-pixel text-sm tracking-wide text-ink-950 transition-transform hover:scale-105"
              >
                Visit etindia.org ↗
              </a>
            </div>
          </dialog>,
          document.body,
        )}
    </>
  );
}
