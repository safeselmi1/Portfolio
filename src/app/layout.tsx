import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, Outfit } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Safé Selmi — Full-Stack Software Engineer",
  description:
    "I build modern SaaS applications with Next.js, TypeScript, Node.js and AI-assisted development.",
  openGraph: {
    title: "Safé Selmi — Full-Stack Software Engineer",
    description:
      "I build modern SaaS applications with Next.js, TypeScript, Node.js and AI-assisted development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${dmSerif.variable} ${dmMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
