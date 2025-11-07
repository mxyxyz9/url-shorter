"use client";

import { Github, Twitter, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
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
    <footer className={`w-full bg-black/50 backdrop-blur-xl border-t border-white/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto px-4 py-16">
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
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-black/30 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-110 ${link.color}`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-300 hover:text-white transition-all duration-200 group text-sm py-1"
                  >
                    <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-300 hover:text-white transition-all duration-200 group text-sm py-1"
                  >
                    <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 bg-black/30 rounded-2xl border border-gray-800">
          <div className="text-center group">
            <div className="text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">1M+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Links Shortened</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">500K+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Active Users</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">99.9%</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Uptime</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">50M+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Clicks Tracked</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <p className="text-xs">
                © {currentYear} ShortLink. All rights reserved.
              </p>
              <Heart className="w-3 h-3 text-red-500 animate-pulse" />
              <p className="text-xs">Made with love</p>
            </div>
            
            <div className="flex items-center space-x-3 text-xs text-gray-400">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                All systems operational
              </span>
              <span>•</span>
              <span>v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}