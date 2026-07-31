import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Naming note (placeholder): "QueueLess" is the working title. A few
// alternatives that might land better if a rename feels right before
// this ships:
//   - Recess    -> names the exact moment of pickup, easy to say out loud
//   - QueueZero -> bundles both payoffs (no queue, no waste) into one word
//   - TrayAhead -> literal "order ahead" + canteen tray, reads as an app name
//   - MessLess  -> pun on "mess" (common campus term for canteen/dining hall)
//                  + "less" queuing and waste; playful, but "messy" is a risk
// Keeping "QueueLess" for now — descriptive and unambiguous.

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QueueLess — Pre-order campus food, skip the recess queue",
  description:
    "QueueLess lets students order canteen food during class and pick it up at recess — no queue, no guesswork, nothing binned. Canteens cook to real demand instead of a hopeful guess.",
};

export const viewport: Viewport = {
  themeColor: "#fffcf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
