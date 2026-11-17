import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiny Island — Family · Fashion · Style | Pre-orders Open",
  description:
    "Hand-dyed batik for the whole family, shipped across Australia. Pre-orders are open — call or email Tiny Island to place yours.",
  openGraph: {
    title: "Tiny Island — Pre-orders Open",
    description:
      "Hand-dyed batik for the whole family, shipped across Australia. Call or email to place your pre-order.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4efe6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream">{children}</body>
    </html>
  );
}
