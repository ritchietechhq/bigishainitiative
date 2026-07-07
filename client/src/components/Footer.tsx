import { Link } from "wouter";
import { Instagram, Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">BIG ISHA Initiative</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Transforming lives and communities in Owerri, Imo State and beyond through compassionate action and sustainable development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <a className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Programs</a>
                </Link>
              </li>
              <li>
                <Link href="/impact">
                  <a className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Impact</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/donate">
                  <a className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Donate</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Owerri, Imo State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+2348137035754" className="opacity-80 hover:opacity-100 transition-opacity">
                  08137035754
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@bigisha.org" className="opacity-80 hover:opacity-100 transition-opacity">
                  info@bigisha.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wide">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-background/20 hover:bg-background/30 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="bg-background/20 mb-8" />

        {/* Legal Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 text-xs">
          <p className="opacity-80">© {currentYear} BIG ISHA Initiative. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy">
              <a className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Privacy Policy</a>
            </Link>
            <Link href="/terms">
              <a className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Terms of Use</a>
            </Link>
            <Link href="/donation-policy">
              <a className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Donation Policy</a>
            </Link>
          </div>
        </div>

        {/* Developer Credit */}
        <Separator className="bg-background/20 mb-6" />
        <div className="text-center text-xs opacity-75">
          <p>
            Website designed & developed by{" "}
            <a
              href="#"
              className="font-semibold opacity-90 hover:opacity-100 transition-opacity"
            >
              TechsoftDev Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
