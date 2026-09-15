import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Toor Industries — Veterinary & Equestrian Instruments Manufacturer",
    template: "%s | Toor Industries",
  },
  description:
    "Leading manufacturer and exporter of quality veterinary instruments and equestrian equipment since 1960. Based in Sialkot, Pakistan.",
  keywords: [
    "veterinary instruments",
    "equestrian equipment",
    "horse saddles",
    "veterinary tools",
    "Pakistan manufacturer",
    "Sialkot",
    "livestock equipment",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Toor Industries",
    title: "Toor Industries — Veterinary & Equestrian Instruments Manufacturer",
    description:
      "Leading manufacturer and exporter of quality veterinary instruments and equestrian equipment since 1960.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toor Industries",
    description:
      "Leading manufacturer and exporter of quality veterinary instruments and equestrian equipment since 1960.",
  },
  metadataBase: new URL("https://toorindustries.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
