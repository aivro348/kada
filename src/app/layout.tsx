import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KADA GWRS | Kuppam Area Development Authority",
  description: "Official Groundwater Resource System (GWRS) and Hydrology Analysis Portal for the Kuppam Area Development Authority (KADA), Government of Andhra Pradesh.",
  keywords: ["KADA", "GWRS", "Kuppam Area Development Authority", "Groundwater Resource System", "Andhra Pradesh Groundwater", "Hydrology Observatory", "Kuppam", "Water Conservation"],
  authors: [{ name: "Government of Andhra Pradesh" }],
  openGraph: {
    title: "KADA GWRS - Groundwater Resource System",
    description: "Official Groundwater & Hydrology Analysis Portal for the Kuppam Area Development Authority (KADA).",
    url: "https://kada-gwrs.ap.gov.in",
    siteName: "KADA GWRS",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "KADA GWRS Dashboard",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KADA GWRS | Kuppam Area Development Authority",
    description: "Official Groundwater & Hydrology Analysis Portal for KADA.",
    images: ["/images/banner.jpg"],
  },
  verification: {
    google: "fMOtionmmpbeQQTZbWYWk6_fzHjET2ucJDs6g3-Rm2g",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${inter.variable} antialiased font-sans`}
      >
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
