import type { Metadata } from "next";
import { Space_Grotesk, Silkscreen, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navaneeth KRISHNAN P K — UI/UX Designer",
  description:
    "Portfolio of Navaneeth KRISHNAN P K — UI/UX Designer, Digital Marketing Executive & Automation Specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${silkscreen.variable} ${inter.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-full bg-ink-900 font-sans text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
