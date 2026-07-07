import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart } from "lucide-react";

interface CTABannerProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTABanner({
  title,
  description,
  ctaText = "Get Involved",
  ctaHref = "/get-involved",
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-accent/10 to-accent/5 border-t border-b border-accent/20 py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {description && (
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{description}</p>
        )}
        <Link href={ctaHref}>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
            <Heart className="w-5 h-5" />
            {ctaText}
          </Button>
        </Link>
      </div>
    </section>
  );
}

