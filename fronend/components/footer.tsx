import { Github, Twitter, Linkedin } from 'lucide-react';

import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-900 text-gray-300 text-center border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">© {new Date().getFullYear()} URL Shortener. All rights reserved.</p>
          <p className="text-xs mt-1 opacity-75">Built with Next.js and love ❤️</p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/mxyxyz9/url-shorter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}