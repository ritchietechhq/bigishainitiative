import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Users, Briefcase, Award } from "lucide-react";

export default function GetInvolvedPage() {
  const [activeTab, setActiveTab] = useState<"volunteer" | "partner" | "ambassador" | "internship">("volunteer");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    availability: "",
    motivation: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", skills: "", availability: "", motivation: "" });
  };

  const tabs = [
    { id: "volunteer", label: "Volunteer", icon: <Users className="w-5 h-5" /> },
    { id: "partner", label: "Partner With Us", icon: <Briefcase className="w-5 h-5" /> },
    { id: "ambassador", label: "Ambassador", icon: <Heart className="w-5 h-5" /> },
    { id: "internship", label: "Internship", icon: <Award className="w-5 h-5" /> },
  ];

  return (
    <Layout>
      <HeroSection
        title="Get Involved"
        subtitle="There are many ways to support BIG ISHA Initiative and make a difference in our communities."
        backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop"
      />

      {/* Tab Navigation */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Volunteer Tab */}
          {activeTab === "volunteer" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Become a Volunteer</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Join our team of dedicated volunteers making a real difference in our communities. Whether you have a few hours a week or can commit more, we have opportunities for you.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Application Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Skills & Expertise</label>
                      <Textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        placeholder="Tell us about your skills and expertise"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Availability</label>
                      <Input
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        placeholder="e.g., Weekends, 5 hours/week"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Why do you want to volunteer? *</label>
                      <Textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us what motivates you to volunteer"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Partner Tab */}
          {activeTab === "partner" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We welcome partnerships with corporates, government agencies, and other organizations. Together, we can amplify our impact.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Partnership Inquiry Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Organization Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your organization"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Contact Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="contact@organization.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Partnership Interest</label>
                      <Textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        placeholder="Describe your partnership interest and how we can collaborate"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Ambassador Tab */}
          {activeTab === "ambassador" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">BIG ISHA Ambassador</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Become an ambassador and help us spread awareness about our mission. Ambassadors receive exclusive updates, materials, and recognition.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Ambassador Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Social Media Reach</label>
                      <Input
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        placeholder="e.g., 5000 followers on Instagram"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">How will you promote BIG ISHA? *</label>
                      <Textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us how you plan to help spread awareness"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Apply Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Internship Tab */}
          {activeTab === "internship" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Internship Opportunities</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Gain practical experience while contributing to meaningful work. We offer internships in various departments throughout the year.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Internship Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Area of Interest</label>
                      <Input
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        placeholder="e.g., Programs, Finance, Communications"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Duration</label>
                      <Input
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        placeholder="e.g., 3 months, 6 months"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Tell us about yourself *</label>
                      <Textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        required
                        placeholder="Your background, skills, and why you're interested in this internship"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Can't Find What You're Looking For?"
        description="Contact us directly to discuss other ways you can support BIG ISHA Initiative."
        ctaText="Contact Us"
        ctaHref="/contact"
      />
    </Layout>
  );
}
