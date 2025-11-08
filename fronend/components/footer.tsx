"use client";

import { Github, Twitter, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector('footer')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const footer = document.querySelector('footer');
    footer?.addEventListener('mousemove', handleMouseMove);
    return () => footer?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/mxyxyz9/url-shorter',
      icon: Github,
      color: 'hover:text-white hover:bg-gray-800'
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
      color: 'hover:text-white hover:bg-blue-600'
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
      color: 'hover:text-white hover:bg-blue-700'
    },
    {
      name: 'Email',
      href: 'mailto:contact@shortlink.com',
      icon: Mail,
      color: 'hover:text-white hover:bg-red-600'
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'API', href: '#api' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'DMCA', href: '/dmca' }
  ];

  return (
    <footer className={`w-full bg-black/50 backdrop-blur-xl border-t border-white/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} relative overflow-hidden`}>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
      {/* Interactive Background Effect */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-black border-2 border-gray-700 rounded-xl flex items-center justify-center hover:border-white transition-colors duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  ShortLink
                </h3>
                <p className="text-sm text-gray-400">Premium URL Shortening</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-sm">
              Transform your long, complex URLs into clean, shareable links. Our advanced URL shortener 
              provides analytics, custom domains, and enterprise-grade security for all your link management needs.
            </p>
            
            <div className="flex items-center space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-black/30 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${link.color} relative group`}
                  aria-label={link.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <link.icon className="w-5 h-5 text-gray-300 transition-all duration-300 group-hover:text-white" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative group">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name} className="transform transition-all duration-300 hover:translate-x-2">
                  <a
                    href={link.href}
                    className="text-sm py-2 text-gray-400 hover:text-white transition-all duration-200 flex items-center group relative overflow-hidden"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-blue-400" />
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative group">
              Legal
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={link.name} className="transform transition-all duration-300 hover:translate-x-2">
                  <a
                    href={link.href}
                    className="text-sm py-2 text-gray-400 hover:text-white transition-all duration-200 flex items-center group relative overflow-hidden"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-purple-400" />
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 bg-gradient-to-r from-black/40 to-black/20 rounded-2xl border border-gray-800 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
          
          <div 
            className="text-center group relative z-10 p-4 rounded-xl transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredStat(0)}
            onMouseLeave={() => setHoveredStat(null)}
          >
            <div className={`text-3xl font-bold text-white mb-2 transition-all duration-300 ${
              hoveredStat === 0 ? 'scale-125 text-blue-400' : 'group-hover:scale-110'
            }`}>1M+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide transition-colors duration-300 group-hover:text-blue-400">
              Links Shortened
            </div>
          </div>
          
          <div 
            className="text-center group relative z-10 p-4 rounded-xl transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredStat(1)}
            onMouseLeave={() => setHoveredStat(null)}
          >
            <div className={`text-3xl font-bold text-white mb-2 transition-all duration-300 ${
              hoveredStat === 1 ? 'scale-125 text-purple-400' : 'group-hover:scale-110'
            }`}>500K+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide transition-colors duration-300 group-hover:text-purple-400">
              Active Users
            </div>
          </div>
          
          <div 
            className="text-center group relative z-10 p-4 rounded-xl transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredStat(2)}
            onMouseLeave={() => setHoveredStat(null)}
          >
            <div className={`text-3xl font-bold text-white mb-2 transition-all duration-300 ${
              hoveredStat === 2 ? 'scale-125 text-green-400' : 'group-hover:scale-110'
            }`}>99.9%</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide transition-colors duration-300 group-hover:text-green-400">
              Uptime
            </div>
          </div>
          
          <div 
            className="text-center group relative z-10 p-4 rounded-xl transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredStat(3)}
            onMouseLeave={() => setHoveredStat(null)}
          >
            <div className={`text-3xl font-bold text-white mb-2 transition-all duration-300 ${
              hoveredStat === 3 ? 'scale-125 text-pink-400' : 'group-hover:scale-110'
            }`}>50M+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide transition-colors duration-300 group-hover:text-pink-400">
              Clicks Tracked
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full animate-[shimmer_3s_infinite]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 relative z-10">
            <div className="mb-4 md:mb-0 group">
              <span className="transition-all duration-300 group-hover:text-white">© {currentYear} ShortLink.</span>
              <span className="ml-1 transition-all duration-300 group-hover:text-blue-400">All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center group cursor-pointer">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse transition-all duration-300 group-hover:bg-blue-400"></div>
                <span className="transition-all duration-300 group-hover:text-white">All systems operational</span>
              </div>
              <div className="flex items-center group">
                <span className="transition-all duration-300 group-hover:text-white">Made with</span>
                <Heart className="w-3 h-3 mx-1 text-red-400 transition-all duration-300 group-hover:scale-125 group-hover:text-pink-400" />
                <span className="transition-all duration-300 group-hover:text-white">by the ShortLink team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}