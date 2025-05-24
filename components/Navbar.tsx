// src/components/layout/Navbar.tsx (or components/layout/Navbar.tsx based on your structure)
"use client"; // VERY IMPORTANT: For useState and document access

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming this path is correct based on your alias
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle"; // Assumes theme-toggle.tsx is in the same directory

// Consider using Next/Link for internal navigation for SPA behavior if these sections are not on the same page
// For same-page anchor links, buttons are fine.
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
    // This function will only work if the target elements are rendered on the current page.
    // For multi-page navigation, you would use Next.js <Link> component.
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("hero")}> {/* Assuming you have a hero section with id="hero" */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-md font-bold text-lg">
            P2P
          </div>
          <span className="font-semibold text-lg">Intelligence</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8"> {/* Increased spacing a bit */}
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
        <div className="hidden md:flex items-center space-x-2 sm:space-x-4"> {/* Adjusted spacing */}
          <ThemeToggle />
          {/* Consider Next/Link for Sign In if it's a different page */}
          <Button variant="ghost" size="sm"> 
            Sign In
          </Button>
          {/* Consider Next/Link for Start Free Trial if it's a different page */}
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            Start Free Trial
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon" // Using "icon" size for better semantics if it's just an icon
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
                className="block w-full text-left py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors" // Slightly larger text for mobile
              >
                {item.label}
              </button>
            ))}
            <div className="border-t pt-4 space-y-2">
              <Button variant="ghost" size="default" className="w-full justify-start"> {/* Default size and justify-start for consistency */}
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
