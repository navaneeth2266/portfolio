import type { Metadata } from "next";
import { Chakra_Petch, Silkscreen, Inter, Poppins } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${chakraPetch.variable} ${silkscreen.variable} ${inter.variable} ${poppins.variable}`}
    >
      <body className="min-h-full bg-ink-900 font-sans text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
