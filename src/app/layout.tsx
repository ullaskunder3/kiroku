import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiroku.xyz"),
  title: "Kiroku: Minimalist Living Library",
  description: "A minimalist, high-speed living library for writing, organization, and ideas.",
  authors: [{ name: "Ullas Kunder", url: "http://ullaskunder.com/" }],
  creator: "Ullas Kunder",
  publisher: "Ullas Kunder",
  icons: {
    icon: "/ullaskunder.svg",
    shortcut: "/ullaskunder.svg",
    apple: "/ullaskunder.svg",
  },
  openGraph: {
    title: "Kiroku: Minimalist Living Library",
    description: "A minimalist, high-speed living library combining fluid editing with operational stability.",
    url: "https://kiroku.xyz",
    siteName: "Kiroku",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kiroku: Minimalist Living Library",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiroku: Minimalist Living Library",
    description: "A minimalist, high-speed living library combining fluid editing with operational stability.",
    creator: "@ullaskunder",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f8f8f6] text-[#20221f]">
        {children}
      </body>
    </html>
  );
}
