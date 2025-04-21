import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "./navbar";

interface HeaderProps {
  links?: {
    label: string;
    href: string;
  }[];
  showNavbar?: boolean;
}

export default function Header({ links, showNavbar = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-primary flex items-center justify-center">
              <CheckCircle className="size-5 text-primary-foreground" />
            </div>
            <span>StatusMonitor</span>
          </Link>
        </div>
        {links && (
          <nav className="hidden md:flex gap-6">
            {links.map((link) => (
              <Link
                className="text-sm font-medium transition-colors hover:text-primary"
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
        {showNavbar && (
          <div className="flex items-center gap-4">
            <Navbar />
          </div>
        )}
      </div>
    </header>
  );
}
