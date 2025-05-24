// app/layout.tsx
"use client"; // Add this if ThemeProvider or Navbar have client-side needs not handled by their own "use client"
               // Often, ThemeProvider itself requires "use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar"; // Assuming Navbar.tsx is in components/layout
import { ThemeProvider } from "@/components/layout/theme-provider"; // Assuming you create this

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "P2P Intelligence - AI-Powered Crypto Trading Platform",
  // ... (rest of your metadata is good)
  icons: { // Recommended way for favicons
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head /> {/* Favicons handled by metadata.icons or files in app/ directory */}
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}> {/* Added font-sans and antialiased for typical ShadCN look */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col"> {/* Common wrapper */}
            <Navbar />
            <main className="flex-1"> {/* Ensure main content can grow */}
              {children}
            </main>
            {/* <Footer /> You might add a footer here later */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
