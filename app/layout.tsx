// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"; // Renamed for clarity with ShadCN conventions
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar"; // Assuming Navbar.tsx is in src/components/layout/
import { ThemeProvider } from "@/components/layout/theme-provider"; // Assuming you create this

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans", // For ShadCN theming
});

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
    url: "https://p2pintelligence.com", // Replace with your actual domain
    siteName: "P2P Intelligence",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "P2P Intelligence - AI-Powered Crypto Trading",
    description: "Find profitable P2P trades across 8+ exchanges with AI risk scoring.",
    creator: "@p2pintelligence", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: { // Recommended way to handle favicons
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head /> {/* Favicon links are now handled by the metadata.icons object */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable // Apply the font variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col"> {/* Use min-h-dvh for full viewport height */}
            <Navbar />
            <main className="flex-1 py-6 md:py-10"> {/* Added some padding to main */}
              {children}
            </main>
            {/* You could add a <Footer /> component here later */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
