import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Image as ImageIcon, Video } from "lucide-react";

export default function ImpactPage() {
  const gallery = [
    { id: 1, type: "image", title: "Community Education Program", category: "Education", image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, type: "image", title: "Health Outreach Initiative", category: "Health", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, type: "image", title: "Women Empowerment Workshop", category: "Women", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2070&auto=format&fit=crop" },
    { id: 4, type: "video", title: "Impact Documentary", category: "General", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" },
    { id: 5, type: "image", title: "Community Development Project", category: "Community", image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" },
    { id: 6, type: "image", title: "Volunteer Team in Action", category: "Volunteer", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" },
  ];

  const stories = [
    {
      title: "From Dropout to Scholar",
      excerpt: "A compelling story of transformation through BIG ISHA Initiative's programs. Discover how Chinyere, a young girl from Owerri, received the support needed to return to school and excel in her studies.",
    },
    {
      title: "Clean Water Restores a Village",
      excerpt: "How our initiatives have transformed an entire community. Read about the installation of solar-powered boreholes in rural Imo State, bringing clean drinking water and drastically reducing waterborne diseases.",
    },
    {
      title: "Women Entrepreneurs on the Rise",
      excerpt: "Measurable outcomes from one of our flagship programs. See the impact of our micro-grant and skills acquisition program that has successfully funded 50 women-led businesses this year.",
    },
  ];

  return (
    <Layout>
      <HeroSection
        title="Our Impact"
        subtitle="Real stories of change from the communities we serve. See how BIG ISHA Initiative is making a difference."
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Photo & Video Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  {item.type === "video" && (
                    <div className="absolute z-10 w-12 h-12 rounded-full bg-background/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Video className="w-6 h-6 text-foreground ml-1" />
                    </div>
                  )}
                </div>
                <CardContent className="pt-4">
                  <p className="text-xs text-accent font-semibold uppercase mb-2">{item.category}</p>
                  <p className="font-semibold">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Stories of Change</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground leading-relaxed mb-4">{story.excerpt}</p>
                  <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                    Read Full Story →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Reports */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Impact Reports</h2>
          <div className="space-y-4">
            {[2024, 2023, 2022].map((year) => (
              <Card key={year} className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center justify-between py-6">
                  <div>
                    <h3 className="font-semibold text-lg">{year} Annual Impact Report</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive report on our programs, reach, and outcomes</p>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Be Part of Our Story"
        description="Help us continue creating impact. Your support makes these stories possible."
        ctaText="Donate Now"
        ctaHref="/donate"
      />
    </Layout>
  );
}
