import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import ProgramCard from "@/components/ProgramCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Heart, Award, Zap, Users, TrendingUp } from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      id: "education",
      title: "Education & Youth Empowerment",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Providing quality education and skill development opportunities for young people in underserved communities.",
      goals: [
        "Provide scholarships to 500+ students annually",
        "Establish learning centers in 10 communities",
        "Develop vocational training programs",
      ],
      beneficiaries: "[Number] students and youth",
      impact: "[Percentage]% improvement in educational outcomes",
    },
    {
      id: "health",
      title: "Health & Wellness Outreach",
      icon: <Heart className="w-8 h-8" />,
      description: "Delivering accessible healthcare services and health awareness programs to improve community wellbeing.",
      goals: [
        "Conduct monthly health clinics",
        "Provide maternal health services",
        "Health education and disease prevention",
      ],
      beneficiaries: "[Number] people reached annually",
      impact: "[Percentage]% increase in health awareness",
    },
    {
      id: "women",
      title: "Women Empowerment",
      icon: <Award className="w-8 h-8" />,
      description: "Supporting women through economic empowerment, leadership training, and advocacy programs.",
      goals: [
        "Train 200+ women in income-generating skills",
        "Support women-led enterprises",
        "Advocacy for women's rights",
      ],
      beneficiaries: "[Number] women empowered",
      impact: "[Percentage]% increase in economic independence",
    },
    {
      id: "community",
      title: "Community Development & Emergency Relief",
      icon: <Zap className="w-8 h-8" />,
      description: "Building sustainable infrastructure and emergency relief initiatives for vulnerable communities.",
      goals: [
        "Infrastructure development projects",
        "Emergency response and relief",
        "Livelihood support programs",
      ],
      beneficiaries: "[Number] households supported",
      impact: "[Number] communities transformed",
    },
    {
      id: "poverty",
      title: "Poverty Alleviation & Skills Acquisition",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Breaking the cycle of poverty through skills training and economic empowerment initiatives.",
      goals: [
        "Skills training for 300+ individuals",
        "Job placement assistance",
        "Microfinance support",
      ],
      beneficiaries: "[Number] people trained",
      impact: "[Percentage]% employment rate",
    },
    {
      id: "partnerships",
      title: "Strategic Partnerships",
      icon: <Users className="w-8 h-8" />,
      description: "Collaborating with government, corporates, and other NGOs to amplify our impact.",
      goals: [
        "Government partnerships for policy advocacy",
        "Corporate social responsibility collaborations",
        "Inter-NGO knowledge sharing",
      ],
      beneficiaries: "[Number] partner organizations",
      impact: "Multiplied reach and effectiveness",
    },
  ];

  return (
    <Layout>
      <HeroSection
        title="Our Programs"
        subtitle="Comprehensive initiatives designed to create sustainable change across education, health, empowerment, and community development."
        backgroundImage="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Programs Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {programs.map((program) => (
              <Card key={program.id} className="hover:shadow-lg transition-shadow" id={program.id}>
                <CardHeader>
                  <div className="text-accent mb-2">{program.icon}</div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">{program.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Program Goals:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {program.goals.map((goal, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent">•</span>
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">Beneficiaries</p>
                      <p className="text-sm font-medium">{program.beneficiaries}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">Impact</p>
                      <p className="text-sm font-medium">{program.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Support Our Programs"
        description="Your donation directly supports these life-changing initiatives. Every contribution matters."
        ctaText="Donate Now"
        ctaHref="/donate"
      />
    </Layout>
  );
}
