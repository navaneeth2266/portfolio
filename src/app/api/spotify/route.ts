import { getSpotifyStatus, type SpotifyStatus } from "@/lib/spotify";

export async function GET() {
  let status: SpotifyStatus;
  try {
    status = await getSpotifyStatus();
  } catch (error) {
    // Don't leak details to the browser; the card falls back to the profile link.
    console.error("[spotify]", error);
    status = { configured: true, track: null };
  }

  return Response.json(status, {
    headers: { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60" },
  });
}
