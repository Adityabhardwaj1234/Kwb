import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "../styles/custom.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Kawachi Infratech - Engineering Infrastructure for the Future",
  description:
    "Leading construction & infrastructure development company delivering innovative, scalable, and sustainable engineering solutions across India's public and private sectors.",
  keywords:
    "construction, infrastructure, engineering, building, development, Delhi, India",
  authors: [{ name: "Kawachi Infratech Private Limited" }],
  creator: "Kawachi Infratech",
  publisher: "Kawachi Infratech",
  robots: "index, follow",
  metadataBase: new URL("https://adityabhardwaj1234.github.io/KawachiWeb/"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://adityabhardwaj1234.github.io/KawachiWeb/",
    siteName: "Kawachi Infratech",
    title: "Kawachi Infratech - Engineering Infrastructure for the Future",
    description:
      "Leading construction & infrastructure development company delivering innovative, scalable, and sustainable engineering solutions.",
    images: [
      {
        url: "/Kawachi_logo_design4.jpg",
        width: 1200,
        height: 630,
        alt: "Kawachi Infratech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kawachi Infratech - Engineering Infrastructure for the Future",
    description:
      "Leading construction & infrastructure development company delivering innovative, scalable, and sustainable engineering solutions.",
    images: ["/Kawachi_logo_design4.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: "#00ffff",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}
