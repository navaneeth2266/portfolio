"use client";

import { useEffect, useState } from "react";
import type { SpotifyStatus } from "@/lib/spotify";
import { spotifyProfileUrl } from "@/lib/site";
import SpotifyIcon from "./SpotifyIcon";

const POLL_MS = 45_000;

function Equalizer() {
  return (
    <span aria-hidden="true" className="flex h-3 items-end gap-0.5">
      {[0, 0.25, 0.5].map((delay) => (
        <span
          key={delay}
          className="eq-bar h-full w-0.5 rounded-full bg-lime"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </span>
  );
}

const rowClass = "flex items-center gap-4 border-l-2 border-lime/60 pl-6";
const coverClass = "size-16 shrink-0 rounded-md";
const labelClass = "flex items-center gap-2 font-pixel text-xs tracking-wide text-lime";

export default function NowPlaying() {
  // undefined = still loading; null = request failed
  const [status, setStatus] = useState<SpotifyStatus | null | undefined>(undefined);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      if (document.hidden) return;
      try {
        const res = await fetch("/api/spotify", { signal: controller.signal });
        if (!res.ok) throw new Error(String(res.status));
        setStatus((await res.json()) as SpotifyStatus);
      } catch (error) {
        if ((error as Error).name !== "AbortError") setStatus((prev) => prev ?? null);
      }
    };

    load();
    const timer = window.setInterval(load, POLL_MS);
    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, []);

  const track = status && status.configured ? status.track : null;

  return (
    <div aria-live="polite">
      {status === undefined ? (
        <div className={`${rowClass} animate-pulse`} aria-label="Loading Spotify">
          <div className={`${coverClass} bg-ink-800`} />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-24 rounded bg-ink-800" />
            <div className="h-4 w-48 rounded bg-ink-800" />
            <div className="h-3 w-32 rounded bg-ink-800" />
          </div>
        </div>
      ) : track ? (
        <a href={track.url} target="_blank" rel="noopener noreferrer" className={`group ${rowClass}`}>
          {track.image ? (
            // eslint-disable-next-line @next/next/no-img-element -- remote Spotify CDN cover, no next/image config needed
            <img
              src={track.image}
              alt={`${track.album} album cover`}
              width={64}
              height={64}
              className={`${coverClass} object-cover`}
            />
          ) : (
            <div className={`${coverClass} bg-ink-800`} />
          )}
          <div className="min-w-0 flex-1">
            <p className={labelClass}>
              {track.isPlaying ? <Equalizer /> : <SpotifyIcon className="size-3.5" />}
              {track.isPlaying ? "NOW PLAYING" : "RECENTLY PLAYED"}
            </p>
            <p className="mt-1 truncate font-display text-lg font-bold text-cream transition-colors group-hover:text-lime">
              {track.title}
            </p>
            <p className="truncate font-poppins text-sm text-cream-dim">{track.artist}</p>
          </div>
        </a>
      ) : (
        <a href={spotifyProfileUrl} target="_blank" rel="noopener noreferrer" className={`group ${rowClass}`}>
          <div className={`${coverClass} flex items-center justify-center bg-ink-800 text-lime`}>
            <SpotifyIcon className="size-8" />
          </div>
          <div className="min-w-0 flex-1">
            <p className={labelClass}>ON SPOTIFY</p>
            <p className="mt-1 font-display text-lg font-bold leading-snug text-cream transition-colors group-hover:text-lime">
              See what I&apos;m listening to
            </p>
            <p className="font-poppins text-sm text-cream-dim">Open my profile</p>
          </div>
        </a>
      )}
    </div>
  );
}
