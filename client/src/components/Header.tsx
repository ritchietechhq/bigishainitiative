import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/blog", label: "Blog" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent-foreground" fill="currentColor" />
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-lg text-foreground">BIG ISHA</div>
                <div className="text-xs text-muted-foreground">Initiative</div>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Desktop Donate Button */}
          <div className="hidden md:block">
            <Link href="/donate">
              <a>
                <div className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 px-4 py-2 rounded-md font-medium text-sm inline-flex items-center cursor-pointer hover:opacity-90 transition-opacity">
                  <Heart className="w-4 h-4" />
                  Donate
                </div>
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:text-accent hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/donate">
              <a>
                <div className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 mt-2 px-4 py-2 rounded-md font-medium text-sm inline-flex items-center cursor-pointer hover:opacity-90 transition-opacity">
                  <Heart className="w-4 h-4" />
                  Donate Now
                </div>
              </a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
