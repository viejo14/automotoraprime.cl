import type { Metadata, Viewport } from "next";
import { Geist, Manrope } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Automotora en Puerto Montt | Automotora Prime",
    template: "%s | Automotora Prime",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "automotive",
  keywords: [
    "automotora Puerto Montt",
    "autos usados Puerto Montt",
    "venta de vehículos Puerto Montt",
    "financiamiento automotriz Puerto Montt",
    "Automotora Prime",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: siteConfig.name,
    title: "Automotora en Puerto Montt | Automotora Prime",
    description: siteConfig.description,
    images: [
      {
        url: "/automotora-prime-hero.webp",
        width: 1672,
        height: 941,
        alt: "Automotora Prime en Puerto Montt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotora en Puerto Montt | Automotora Prime",
    description: siteConfig.description,
    images: ["/automotora-prime-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#061f2b",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${geist.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
