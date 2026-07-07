import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Target, Zap, BookOpen, Globe } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassion",
      description: "We approach every initiative with genuine care for the communities we serve.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Impact",
      description: "We measure success by the real, lasting change we create in people's lives.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "We believe in the power of collective action and partnership.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace creative solutions to address complex community challenges.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Transparency",
      description: "We maintain accountability and openness in all our operations.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainability",
      description: "We build programs designed for long-term positive change.",
    },
  ];

  const timeline = [
    { year: "2018", event: "BIG ISHA Initiative was founded in Owerri with a focus on youth empowerment." },
    { year: "2020", event: "Launched our first major health outreach program across 5 local governments." },
    { year: "2022", event: "Expanded our community development initiatives to neighboring states." },
    { year: "2024", event: "Reached the milestone of 15,000 lives impacted through our various programs." },
  ];

  const team = [
    { name: "Chukwuemeka Okoro", role: "Executive Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
    { name: "Nneoma Nwachukwu", role: "Programs Director", image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=200&auto=format&fit=crop" },
    { name: "Obinna Eze", role: "Finance Manager", image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=200&auto=format&fit=crop" },
    { name: "Chioma Anya", role: "Community Liaison", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=200&auto=format&fit=crop" },
  ];

  return (
    <Layout>
      <HeroSection
        title="About BIG ISHA Initiative"
        subtitle="Dedicated to transforming lives and building sustainable communities in Owerri, Imo State and beyond."
        backgroundImage="https://images.unsplash.com/photo-1593113589914-07599019ddb0?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-lg text-foreground leading-relaxed">
            <p>
              Founded in 2018, BIG ISHA Initiative was born out of a deep desire to address the systemic inequalities faced by underserved communities in Imo State. Recognizing the gaps in education, healthcare, and economic opportunities, a group of passionate individuals came together with a singular vision: to empower the vulnerable and build sustainable futures.
            </p>
            <p>
              From our humble beginnings organizing small community clean-ups and tutoring sessions in Owerri, we have grown into a recognized non-governmental organization. Today, our programs reach across multiple local government areas, delivering impactful health outreaches, women's empowerment workshops, and youth skill acquisition programs.
            </p>
            <p>
              Our work is deeply rooted in transparency, accountability, and the belief that sustainable development must be community-led. Every project we undertake is guided by these principles, ensuring that the resources we receive translate directly into measurable impact for the people who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  To empower vulnerable individuals and communities in Nigeria through sustainable education, healthcare, and economic initiatives.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  A society where every individual, regardless of their background, has access to the resources and opportunities needed to thrive.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  We are driven by compassion, guided by integrity, and committed to excellence in all our community engagements.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values Grid */}
          <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-2 text-accent">{value.icon}</div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Leadership & Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-muted/30 border-accent/20">
            <CardHeader>
              <CardTitle>Governance & Transparency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Board Structure:</strong> [Insert board composition and governance structure]
              </p>
              <p>
                <strong>Accountability Statement:</strong> BIG ISHA Initiative is committed to the highest standards of transparency and accountability. We maintain detailed financial records, conduct regular audits, and publish annual impact reports available upon request.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent" />
                  {index !== timeline.length - 1 && (
                    <div className="w-1 h-16 bg-accent/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-lg font-bold text-accent">{item.year}</p>
                  <p className="text-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Make a Difference?"
        description="Join our community of supporters and help us create lasting change."
        ctaText="Get Involved"
        ctaHref="/get-involved"
      />
    </Layout>
  );
}
