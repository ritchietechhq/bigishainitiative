import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText = "Learn More",
  ctaHref = "#",
  secondaryCtaText,
  secondaryCtaHref,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-95">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={ctaHref}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-full sm:w-auto">
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          {secondaryCtaText && secondaryCtaHref && (
            <Link href={secondaryCtaHref}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                {secondaryCtaText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
