import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Linkedin, Youtube, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <Layout>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with BIG ISHA Initiative. We'd love to hear from you."
        backgroundImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <CardTitle className="text-lg">Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium">Owerri, Imo State, Nigeria</p>
                <p className="text-sm text-muted-foreground mt-2">124 Wetheral Road, Owerri, Imo State</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-accent" />
                  <CardTitle className="text-lg">Phone</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="tel:+2348137035754" className="text-foreground font-medium hover:text-accent transition-colors">
                  08137035754
                </a>
                <p className="text-sm text-muted-foreground mt-2">Available during office hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-5 h-5 text-accent" />
                  <CardTitle className="text-lg">Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@bigisha.org" className="text-foreground font-medium hover:text-accent transition-colors">
                  info@bigisha.org
                </a>
                <p className="text-sm text-muted-foreground mt-2">We respond within 24 hours</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <Card>
                <CardContent className="pt-6">
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
                      <label className="text-sm font-medium">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Your message"
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <CardTitle>Office Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span className="text-muted-foreground">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp & Social */}
              <Card>
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://wa.me/2348031234567"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium text-sm">WhatsApp</p>
                      <p className="text-xs text-muted-foreground">Chat with us on WhatsApp</p>
                    </div>
                  </a>
                  <div>
                    <p className="text-sm font-medium mb-3">Follow Us</p>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            className="w-10 h-10 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Find Us</h2>
          <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center border-2 border-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127022.02874052321!2d6.945209349880654!3d5.485125301825838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104259b13cd330d3%3A0xc6c73df6efb38749!2sOwerri%2C%20Imo!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
