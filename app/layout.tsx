import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "P2P Intelligence - AI-Powered Crypto Trading Platform",
  description: "Find profitable P2P trades across 8+ exchanges with AI risk scoring and automated terms analysis. Real-time arbitrage opportunities for crypto traders.",
  keywords: ["P2P trading", "crypto arbitrage", "AI trading", "cryptocurrency", "trading intelligence", "risk scoring"],
  authors: [{ name: "P2P Intelligence Team" }],
  creator: "P2P Intelligence",
  publisher: "P2P Intelligence",
  openGraph: {
    title: "P2P Intelligence - AI-Powered Crypto Trading",
    description: "Find profitable P2P trades across 8+ exchanges with AI risk scoring and automated terms analysis.",
    url: "https://p2pintelligence.com",
    siteName: "P2P Intelligence",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "P2P Intelligence - AI-Powered Crypto Trading",
    description: "Find profitable P2P trades across 8+ exchanges with AI risk scoring.",
    creator: "@p2pintelligence",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
