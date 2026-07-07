import { Heart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function StickyDonateButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <Link href="/donate">
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 w-14 h-14 p-0 flex items-center justify-center">
          <Heart className="w-6 h-6" fill="currentColor" />
        </Button>
      </Link>
    </div>
  );
}
