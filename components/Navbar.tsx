// src/components/layout/Navbar.tsx
"use client"; // VERY IMPORTANT: For useState and document access

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Standardized path
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle"; // Assumes theme-toggle.tsx is in this same directory (src/components/layout/)
// If using Next.js Link for navigation to other pages, import it:
// import Link from "next/link";

const navItems = [
  { label: "Features", sectionId: "features" },
  { label: "About", sectionId: "about" },
  { label: "Pricing", sectionId: "pricing" },
  { label: "FAQ", sectionId: "faq" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset for fixed navbar if necessary
      // const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
      // const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      // const offsetPosition = elementPosition - navbarHeight - 20; // 20px extra padding

      // window.scrollTo({
      //   top: offsetPosition,
      //   behavior: "smooth",
      // });
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo - Make it scroll to top or hero section */}
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => {
            // Option 1: Scroll to a specific "hero" section
            // scrollToSection("hero"); 
            // Option 2: Scroll to top of the page
            if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
          }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-md font-bold text-lg">
            P2P
          </div>
          <span className="font-semibold text-lg">Intelligence</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
          <ThemeToggle />
          {/* If Sign In goes to a different page, use <Link href="/signin"><Button>...</Button></Link> */}
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          {/* If Start Free Trial goes to a different page, use Link */}
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            Start Free Trial
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="block w-full text-left py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="border-t pt-4 space-y-2">
              <Button variant="ghost" size="default" className="w-full justify-start">
                Sign In
              </Button>
              <Button size="default" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
