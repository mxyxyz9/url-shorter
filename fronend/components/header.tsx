import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-4 inset-x-0 max-w-lg mx-auto z-50">
      <div className="flex items-center justify-between p-2 bg-white/70 dark:bg-black/70 backdrop-blur-sm border rounded-full shadow-lg">
        <Link href="/" className="flex items-center gap-2 pl-2">
          <Image
            src="/placeholder-logo.svg"
            alt="Logo"
            width={24}
            height={24}
          />
          <span className="font-semibold text-lg">Shorty</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
        <Button asChild size="sm" className="rounded-full">
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
    </header>
  );
}