"use client";

import { useState, type FormEvent } from "react";
import { IconCheckCircle } from "./icons";

interface WaitlistFormProps {
  id: string;
  variant?: "light" | "dark";
  showCampusField?: boolean;
}

export default function WaitlistForm({
  id,
  variant = "light",
  showCampusField = false,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [campus, setCampus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isDark = variant === "dark";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className={`flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm font-medium ${
          isDark
            ? "border-white/15 bg-white/10 text-white"
            : "border-moss-200 bg-moss-50 text-moss-800"
        }`}
      >
        <IconCheckCircle className={`h-5 w-5 shrink-0 ${isDark ? "text-moss-400" : "text-moss-600"}`} />
        <span>
          You&apos;re on the list! We&apos;ll email <strong>{email}</strong> the moment QueueLess
          lands{campus ? ` at ${campus}` : ""}.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row sm:gap-3">
      <div className="flex flex-1 flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor={`${id}-email`} className="sr-only">
            Email address
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            placeholder="you@campus.edu"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={`w-full rounded-full border px-5 py-3.5 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 ${
              isDark
                ? "border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:bg-white/15"
                : "border-stone-200 bg-white text-ink placeholder:text-stone-400 focus-visible:border-brand-300"
            }`}
          />
        </div>

        {showCampusField && (
          <div className="flex-1">
            <label htmlFor={`${id}-campus`} className="sr-only">
              Your campus (optional)
            </label>
            <input
              id={`${id}-campus`}
              name="campus"
              type="text"
              placeholder="Your campus (optional)"
              value={campus}
              onChange={(event) => setCampus(event.target.value)}
              className={`w-full rounded-full border px-5 py-3.5 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 ${
                isDark
                  ? "border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:bg-white/15"
                  : "border-stone-200 bg-white text-ink placeholder:text-stone-400 focus-visible:border-brand-300"
              }`}
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="cursor-pointer whitespace-nowrap rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        Join waitlist
      </button>
    </form>
  );
}
