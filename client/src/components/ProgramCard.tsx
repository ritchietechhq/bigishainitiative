import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  image?: string;
}

export default function ProgramCard({
  title,
  description,
  icon,
  href = "#",
  image,
}: ProgramCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
      {image && (
        <div className="h-48 overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        {icon && <div className="mb-2 text-accent text-3xl">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
        <Link href={href}>
          <Button variant="ghost" className="text-accent hover:text-accent/80 gap-2 p-0">
            Learn More <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
