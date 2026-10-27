/**
 * Server-side Spotify helper for the "Now playing" card.
 *
 * Spotify only exposes a listener's current / recently played track through its
 * Web API with that user's OAuth authorization, so a profile URL alone isn't
 * enough. Until the three variables below are set, the card shows a link to the
 * Spotify profile instead (see `spotifyProfileUrl` in `lib/site.ts`).
 *
 * One-time setup:
 *  1. Create an app at https://developer.spotify.com/dashboard and add a
 *     redirect URI such as http://127.0.0.1:3000/callback.
 *  2. Open this URL in a browser while logged in as the account you want to show
 *     (fill in CLIENT_ID and the URL-encoded redirect URI), approve, and copy
 *     the `code` from the address you're redirected to:
 *     https://accounts.spotify.com/authorize?response_type=code&client_id=CLIENT_ID&scope=user-read-currently-playing%20user-read-recently-played&redirect_uri=REDIRECT_URI
 *  3. Exchange the code for a refresh token (POST https://accounts.spotify.com/api/token with
 *     grant_type=authorization_code, code, redirect_uri, and HTTP Basic auth of
 *     CLIENT_ID:CLIENT_SECRET) and keep the `refresh_token` from the response.
 *  4. Put these in `.env.local` (and in your hosting provider's environment settings):
 *       SPOTIFY_CLIENT_ID=...
 *       SPOTIFY_CLIENT_SECRET=...
 *       SPOTIFY_REFRESH_TOKEN=...
 *
 * These are secrets: never commit them or expose them to the browser. They are
 * only read here, on the server.
 */

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const CURRENTLY_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_URL = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

export type SpotifyTrack = {
  title: string;
  artist: string;
  album: string;
  image: string | null;
  url: string;
  isPlaying: boolean;
};

export type SpotifyStatus = { configured: false } | { configured: true; track: SpotifyTrack | null };

type ApiTrack = {
  name: string;
  artists: { name: string }[];
  album: { name: string; images: { url: string; width: number }[] };
  external_urls: { spotify: string };
};

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(clientId: string, clientSecret: string, refreshToken: string) {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) return cachedToken.value;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refreshToken }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Spotify token request failed (${res.status})`);

  const data = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = { value: data.access_token, expiresAt: Date.now() + data.expires_in * 1000 };
  return data.access_token;
}

function toTrack(item: ApiTrack, isPlaying: boolean): SpotifyTrack {
  // Smallest cover that's still sharp at ~80px (2x), falling back to the largest.
  const images = [...item.album.images].sort((a, b) => a.width - b.width);
  const image = images.find((i) => i.width >= 160) ?? images.at(-1);

  return {
    title: item.name,
    artist: item.artists.map((a) => a.name).join(", "),
    album: item.album.name,
    image: image?.url ?? null,
    url: item.external_urls.spotify,
    isPlaying,
  };
}

export async function getSpotifyStatus(): Promise<SpotifyStatus> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) return { configured: false };

  const token = await getAccessToken(clientId, clientSecret, refreshToken);
  const headers = { Authorization: `Bearer ${token}` };

  // 200 = a player session exists, 204 = nothing active.
  const current = await fetch(CURRENTLY_PLAYING_URL, { headers, cache: "no-store" });
  if (current.status === 200) {
    const data = (await current.json()) as {
      is_playing: boolean;
      currently_playing_type: string;
      item: ApiTrack | null;
    };
    if (data.is_playing && data.currently_playing_type === "track" && data.item) {
      return { configured: true, track: toTrack(data.item, true) };
    }
  } else if (current.status !== 204) {
    throw new Error(`Spotify currently-playing request failed (${current.status})`);
  }

  const recent = await fetch(RECENTLY_PLAYED_URL, { headers, cache: "no-store" });
  if (!recent.ok) throw new Error(`Spotify recently-played request failed (${recent.status})`);

  const { items } = (await recent.json()) as { items: { track: ApiTrack }[] };
  return { configured: true, track: items[0] ? toTrack(items[0].track, false) : null };
}
