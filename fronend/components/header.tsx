'use client';

import Link from 'next/link';
import { Link as LinkIcon, ExternalLink, Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-full">
                <LinkIcon className="h-6 w-6 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                URL Shortener
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 flex items-center">
              <Link 
                href="/" 
                className="px-4 py-2 text-sm font-medium rounded-full hover:bg-white hover:shadow-sm dark:hover:bg-gray-700"
              >
                Home
              </Link>
              <Link 
                href="/features" 
                className="px-4 py-2 text-sm font-medium rounded-full hover:bg-white hover:shadow-sm dark:hover:bg-gray-700"
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className="px-4 py-2 text-sm font-medium rounded-full hover:bg-white hover:shadow-sm dark:hover:bg-gray-700"
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-2 text-sm font-medium rounded-full hover:bg-white hover:shadow-sm dark:hover:bg-gray-700"
              >
                About
              </Link>
            </div>
          </nav>

          {/* Sign in button */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://github.com/mxyxyz9/url-shorter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a 
              href="https://github.com/mxyxyz9/url-shorter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}