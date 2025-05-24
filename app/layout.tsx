import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "P2P Intelligence - AI-Powered Crypto Trading Platform",
  description: "Find profitable P2P trades across 8+ exchanges with AI risk scoring and automated terms analysis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}