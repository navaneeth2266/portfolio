import type { Metadata } from "next";
import { Anton, Silkscreen, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
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
  title: "Navaneeth Krishnan P K — UI/UX Designer",
  description:
    "Portfolio of Navaneeth Krishnan P K — UI/UX Designer, Digital Marketing Executive & Automation Specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${silkscreen.variable} ${inter.variable}`}
    >
      <body className="min-h-full bg-ink-900 font-sans text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
