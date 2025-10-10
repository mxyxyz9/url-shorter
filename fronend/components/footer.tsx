import { Github } from 'lucide-react';

import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 py-4 bg-black/30 backdrop-blur-md text-white text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm mb-2">© 2023 URL Shortner. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/mxyxyz9/url-shorter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          {/* Add more social links if needed */}
        </div>
        <p className="text-xs mt-2 opacity-75">Built with Next.js and love ❤️</p>
      </div>
    </footer>
  );
}