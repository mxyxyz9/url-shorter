import { Github, Twitter, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/mxyxyz9/url-shorter',
      icon: Github,
      color: 'hover:text-purple-400'
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
      color: 'hover:text-cyan-400'
    },
    {
      name: 'Email',
      href: 'mailto:contact@shortlink.com',
      icon: Mail,
      color: 'hover:text-red-400'
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
    <footer className="w-full bg-black backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-gray-700">
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
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transform your long, complex URLs into clean, shareable links. Our advanced URL shortener 
              provides analytics, custom domains, and enterprise-grade security for all your link management needs.
            </p>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 ${link.color}`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-6 bg-white/5 rounded-2xl border border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">1M+</div>
            <div className="text-sm text-gray-400">Links Shortened</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">500K+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">50M+</div>
            <div className="text-sm text-gray-400">Clicks Tracked</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <p className="text-sm">
                © {currentYear} ShortLink. All rights reserved.
              </p>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <p className="text-sm">Made with love</p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
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