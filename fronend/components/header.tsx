import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How it Works" },
    { href: "#stats", label: "Statistics" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ShortLink
              </h1>
              <p className="text-xs text-gray-400">URL Shortener</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl">
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
                <Button variant="ghost" className="w-full text-gray-300 hover:text-white hover:bg-white/10 justify-start">
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl justify-start">
                  <Link href="/signup">Get Started Free</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}