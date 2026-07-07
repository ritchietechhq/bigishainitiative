import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Search, Calendar, User } from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const articles = [
    {
      id: 1,
      title: "BIG ISHA Initiative Launches New Educational Drive in Owerri",
      excerpt: "Our new initiative aims to provide school supplies and scholarships to 500 students in Imo State this semester.",
      category: "Education",
      date: "October 12, 2023",
      author: "Nneoma Nwachukwu",
      slug: "new-educational-drive",
    },
    {
      id: 2,
      title: "Health Outreach Reaches Rural Communities",
      excerpt: "Over 1,000 residents received free medical checkups and essential medications during our recent weekend outreach.",
      category: "Health",
      date: "September 28, 2023",
      author: "Chukwuemeka Okoro",
      slug: "health-outreach-success",
    },
    {
      id: 3,
      title: "Empowering Women Through Skills Acquisition",
      excerpt: "Graduation ceremony held for 50 women who completed our 3-month tailoring and business management training.",
      category: "Women Empowerment",
      date: "August 15, 2023",
      author: "Chioma Anya",
      slug: "women-skills-graduation",
    },
    {
      id: 4,
      title: "Partnership with Imo State Tech Hub Announced",
      excerpt: "We are thrilled to announce a new partnership to provide digital skills training to youth in Owerri.",
      category: "News",
      date: "July 2, 2023",
      author: "Obinna Eze",
      slug: "tech-hub-partnership",
    },
  ];

  const categories = ["All", "Education", "Health", "Women Empowerment", "News", "Impact"];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <HeroSection
        title="Blog & News"
        subtitle="Stories, updates, and insights from BIG ISHA Initiative and the communities we serve."
        backgroundImage="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Search & Filter */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === "All" ? null : category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    (category === "All" && !selectedCategory) || selectedCategory === category
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-foreground mb-4 flex-1">{article.excerpt}</p>
                    <div className="flex flex-col gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                    </div>
                    <Link href={`/blog/${article.slug}`}>
                      <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                        Read Article →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No articles found. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
