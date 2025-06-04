import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeFit - Entrena y programa tu fitness",
  description: "CodeFit es la plataforma para desarrolladores y amantes del fitness que quieren mejorar su salud y código.",
  keywords: ["fitness", "programación", "CodeFit", "entrenamiento", "software fitness"],
  authors: [{ name: "Izan", url: "https://codefit.es/about" }],
  openGraph: {
    title: "CodeFit - Entrena y programa tu fitness",
    description: "Mejora tu salud con CodeFit.",
    url: "https://codefit.es",
    siteName: "CodeFit",
    images: [
      {
        url: "https://codefit.es/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeFit",
      },
    ],
    locale: "es_ES",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
