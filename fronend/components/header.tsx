"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / scrollHeight) * 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    setIsMounted(true);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How it Works" },
    { href: "#stats", label: "Statistics" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), 0 0 40px rgba(147, 51, 234, 0.4); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        @keyframes slide-in-top {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-in-top {
          animation: slide-in-top 0.6s ease-out;
        }
        @keyframes shimmer-fast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer-fast {
          animation: shimmer-fast 0.8s ease-in-out;
        }
      `}</style>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      } relative overflow-hidden ${isMounted ? 'animate-slide-in-top' : ''}`}>
      
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Interactive Background Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`,
          transition: 'background 0.1s ease-out'
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 transform group-hover:rotate-6 shadow-lg group-hover:shadow-blue-500/25 animate-pulse-glow relative overflow-hidden">
              <svg className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              {/* Inner shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer-fast"></span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 relative">
                ShortLink
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500"></span>
              </h1>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 group-hover:translate-x-1 transition-transform">URL Shortener</p>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300 group-hover:scale-110"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 relative">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 relative group overflow-hidden backdrop-blur-sm ${
                  hoveredNav === item.href 
                    ? 'text-white bg-gradient-to-r from-blue-600/30 to-purple-600/30 shadow-lg shadow-blue-500/25' 
                    : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10'
                }`}
                onClick={() => setActiveSection(item.href)}
                onMouseEnter={() => setHoveredNav(item.href)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Gradient underline */}
                <span className={`absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300 ${
                  hoveredNav === item.href ? 'w-3/4 left-1/8' : 'group-hover:w-1/2 group-hover:left-1/4'
                }`}></span>
                
                {/* Enhanced shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 animate-shimmer-fast"></span>
                
                {/* Border glow */}
                <span className={`absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-400/30 transition-all duration-300 ${
                  hoveredNav === item.href ? 'border-blue-400/50' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 rounded-xl transition-all duration-300 relative overflow-hidden group backdrop-blur-sm border border-white/10 hover:border-blue-400/30"
            >
              <Link href="/login" className="relative z-10 flex items-center gap-2">
                Sign In
                <span className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
              </Link>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 animate-shimmer-fast"></span>
            </Button>
            <Button 
              asChild 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 relative overflow-hidden group animate-pulse-glow"
            >
              <Link href="/signup" className="relative z-10 flex items-center gap-2">
                Get Started Free
                <span className="w-2 h-2 bg-white rounded-full opacity-80 animate-ping"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 animate-shimmer-fast"></span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 rounded-xl transition-all duration-300 relative group overflow-hidden backdrop-blur-sm border border-white/10 hover:border-blue-400/30"
          >
            {isMenuOpen ? 
              <X className="w-6 h-6 transition-all duration-300 transform rotate-180 group-hover:scale-110" /> : 
              <Menu className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
            }
            {/* Animated dots */}
            <div className="absolute -top-1 -right-1 flex space-x-1">
              <span className="w-1 h-1 bg-blue-400 rounded-full animate-ping"></span>
              <span className="w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-100"></span>
              <span className="w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-200"></span>
            </div>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 animate-shimmer-fast"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden animate-in slide-in-from-top duration-500 relative">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
            {/* Floating particles in mobile menu */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1.5 + Math.random() * 1.5}s`
                  }}
                />
              ))}
            </div>
            
            <nav className="flex flex-col p-5 space-y-2 relative z-10">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-5 py-4 text-sm font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 rounded-xl transition-all duration-300 relative group overflow-hidden backdrop-blur-sm border border-white/5 hover:border-blue-400/30"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {item.label}
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"></span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 animate-shimmer-fast"></span>
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-5 border-t border-white/10">
                <Button 
                  variant="ghost" 
                  className="w-full text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 justify-start rounded-xl transition-all duration-300 relative group overflow-hidden backdrop-blur-sm border border-white/10 hover:border-blue-400/30"
                >
                  <Link href="/login" className="relative z-10 flex items-center gap-3">
                    Sign In
                    <span className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
                  </Link>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 animate-shimmer-fast"></span>
                </Button>
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 justify-start relative group overflow-hidden animate-pulse-glow"
                >
                  <Link href="/signup" className="relative z-10 flex items-center gap-3">
                    Get Started Free
                    <span className="w-2 h-2 bg-white rounded-full opacity-80 animate-ping"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 animate-shimmer-fast"></span>
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}</div>
      </div>
    </header>
    
    {/* Spacer to prevent content from being hidden behind fixed header */}
    <div className="h-20"></div>
  </>;
}