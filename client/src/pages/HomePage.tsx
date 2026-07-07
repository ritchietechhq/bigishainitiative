import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import StatCounter from "@/components/StatCounter";
import ProgramCard from "@/components/ProgramCard";
import CTABanner from "@/components/CTABanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Users, MapPin, BookOpen, Zap, Award } from "lucide-react";
import { Link } from "wouter";
import { SEOHead } from "@/components/SEOHead";
import { generateNonProfitSchema } from "@/lib/seo";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const schema = generateNonProfitSchema();

  const programs = [
    {
      title: "Education & Youth Empowerment",
      description: "Providing quality education and skill development opportunities for young people in underserved communities.",
      icon: <BookOpen className="w-8 h-8" />,
      href: "/programs#education",
    },
    {
      title: "Health & Wellness Outreach",
      description: "Delivering accessible healthcare services and health awareness programs to improve community wellbeing.",
      icon: <Heart className="w-8 h-8" />,
      href: "/programs#health",
    },
    {
      title: "Women Empowerment",
      description: "Supporting women through economic empowerment, leadership training, and advocacy programs.",
      icon: <Award className="w-8 h-8" />,
      href: "/programs#women",
    },
    {
      title: "Community Development",
      description: "Building sustainable infrastructure and emergency relief initiatives for vulnerable communities.",
      icon: <Zap className="w-8 h-8" />,
      href: "/programs#community",
    },
  ];

  const testimonials = [
    {
      name: "Chinyere Okafor",
      role: "Program Participant",
      quote: "BIG ISHA Initiative transformed my life through their education program. I now have hope for a better future.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Chief Emeka Nnadi",
      role: "Local Partner",
      quote: "Their commitment to our community is genuine. They don't just give aid—they build lasting partnerships.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Nnamdi Uche",
      role: "Volunteer",
      quote: "Volunteering with BIG ISHA has been the most rewarding experience. The team's passion is infectious.",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const news = [
    {
      title: "BIG ISHA Initiative Launches New Educational Drive in Owerri",
      excerpt: "Our new initiative aims to provide school supplies and scholarships to 500 students in Imo State this semester.",
      date: "October 12, 2023",
      href: "/blog/new-educational-drive",
    },
    {
      title: "Health Outreach Reaches Rural Communities",
      excerpt: "Over 1,000 residents received free medical checkups and essential medications during our recent weekend outreach.",
      date: "September 28, 2023",
      href: "/blog/health-outreach-success",
    },
    {
      title: "Empowering Women Through Skills Acquisition",
      excerpt: "Graduation ceremony held for 50 women who completed our 3-month tailoring and business management training.",
      date: "August 15, 2023",
      href: "/blog/women-skills-graduation",
    },
  ];

  const partners = [
    { name: "Owerri Chamber of Commerce", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=200&auto=format&fit=crop" },
    { name: "Imo State Tech Hub", image: "https://images.unsplash.com/photo-1531123407321-1e7539f437df?q=80&w=200&auto=format&fit=crop" },
    { name: "Nneka Business Ventures", image: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?q=80&w=200&auto=format&fit=crop" },
    { name: "South East Developments", image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=200&auto=format&fit=crop" },
    { name: "Dr. Chinedu Okafor", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" }
  ];

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <Layout>
      <SEOHead
        title="Home"
        description="BIG ISHA Initiative - Transforming lives in Owerri, Imo State through education, health, and community empowerment programs."
        image="https://bigisha.org/og-image.png"
        schema={schema}
      />

      {/* Hero Section */}
      <HeroSection
        title="Transforming Lives in Owerri and Beyond"
        subtitle="Join BIG ISHA Initiative in our mission to create sustainable change through education, health, and community empowerment."
        ctaText="Donate Now"
        ctaHref="/donate"
        secondaryCtaText="Learn More"
        secondaryCtaHref="/about"
        backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Impact Snapshot */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCounter label="Lives Impacted" value={15000} suffix="+" />
            <StatCounter label="Communities Reached" value={45} />
            <StatCounter label="Active Volunteers" value={250} suffix="+" />
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work across multiple areas to create lasting positive change in our communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/programs">
              <Button variant="outline" size="lg">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Partners Strip */}
      <section className="py-12 md:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wide font-semibold">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <img src={partner.image} alt={partner.name} className="h-16 w-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all border-2 border-transparent hover:border-accent" />
                <span className="text-xs text-muted-foreground font-medium text-center">{partner.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">
            Est. 2018
          </p>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Stories of Change</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-accent/20">
              <CardContent className="pt-8">
                <div className="text-center mb-6">
                  <img
                    src={testimonials[testimonialIndex].image}
                    alt={testimonials[testimonialIndex].name}
                    loading="lazy"
                    decoding="async"
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <p className="text-lg italic text-foreground mb-4">
                    "{testimonials[testimonialIndex].quote}"
                  </p>
                  <p className="font-semibold">{testimonials[testimonialIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[testimonialIndex].role}</p>
                </div>
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === testimonialIndex ? "bg-accent w-8" : "bg-muted"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Updates</h2>
            <p className="text-lg text-muted-foreground">
              Stay informed about our latest initiatives and success stories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((article) => (
              <Card key={article.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription className="text-xs">{article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">{article.excerpt}</p>
                  <Link href={article.href}>
                    <a className="text-accent hover:text-accent/80 text-sm font-medium">
                      Read More →
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-2 border-accent/20 bg-accent/5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">Stay Connected</CardTitle>
              <CardDescription>
                Subscribe to our newsletter for updates on programs, impact stories, and ways to get involved.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewsletterSignup} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CTABanner
        title="Join Us in Changing Lives"
        description="Whether through donations, volunteering, or partnership, your contribution matters. Together, we can create lasting change in Owerri, Imo State and beyond."
        ctaText="Get Involved"
        ctaHref="/get-involved"
      />
    </Layout>
  );
}
