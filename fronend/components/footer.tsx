import { Github, Twitter, Linkedin } from 'lucide-react';

import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-950 text-gray-400 text-center border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 md:w-1/3 text-left">
          <h3 className="text-xl font-semibold text-white mb-2">URL Shortener</h3>
          <p className="text-sm">Simplify your links, share with ease. Our URL shortener provides a fast and reliable way to manage your web addresses.</p>
          <p className="text-xs mt-4 opacity-75">© {new Date().getFullYear()} URL Shortener. All rights reserved.</p>
        </div>

        <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0">
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <nav className="flex flex-col space-y-2">
            <a href="#" className="hover:text-blue-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>
        </div>

        <div className="flex flex-col items-center md:w-1/3">
          <h4 className="text-lg font-semibold text-white mb-3">Connect With Us</h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/mxyxyz9/url-shorter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="h-7 w-7" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter className="h-7 w-7" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-7 w-7" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <p className="text-xs mt-4 opacity-75">Built with Next.js and love ❤️</p>
        </div>
      </div>
    </footer>
  );
}