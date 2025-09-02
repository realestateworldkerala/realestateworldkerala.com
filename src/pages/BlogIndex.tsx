import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogIndex = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Areas to Buy Property in Trivandrum 2025",
      slug: "top-areas-buy-property-trivandrum-2025",
      excerpt: "Discover the most promising residential areas in Trivandrum for property investment in 2025. From Technopark vicinity to Kazhakoottam, find your ideal location.",
      category: "Investment Guide",
      author: "Real Estate World Team",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "/lovable-uploads/c8d30fc4-7070-4d55-a443-0cf40d6453ef.png",
      featured: true
    },
    {
      id: 2,
      title: "How to Choose the Right Flat in Kerala - Complete Guide",
      slug: "how-to-choose-right-flat-kerala-guide",
      excerpt: "Essential factors to consider when buying an apartment in Kerala. From legal clearances to amenities, location analysis to price negotiation tips.",
      category: "Buying Guide",
      author: "Property Expert",
      date: "2025-01-10",
      readTime: "12 min read",
      image: "/lovable-uploads/3e93037b-771d-43e8-ae5e-6dc40ce8dce2.png",
      featured: true
    },
    {
      id: 3,
      title: "Latest Real Estate Trends in Trivandrum 2025",
      slug: "real-estate-trends-trivandrum-2025",
      excerpt: "Analyze current market trends, price appreciation patterns, and upcoming development projects shaping Trivandrum's real estate landscape.",
      category: "Market Analysis",
      author: "Market Analyst",
      date: "2025-01-05",
      readTime: "6 min read",
      image: "/lovable-uploads/8de36bf7-d022-40ed-9cde-db471f66a56f.png",
      featured: false
    },
    {
      id: 4,
      title: "NRI Property Investment in Kerala: Complete Legal Guide",
      slug: "nri-property-investment-kerala-legal-guide",
      excerpt: "Comprehensive guide for Non-Resident Indians investing in Kerala real estate. Legal requirements, FEMA compliance, and documentation process.",
      category: "Legal Guide",
      author: "Legal Expert",
      date: "2024-12-28",
      readTime: "15 min read",
      image: "/lovable-uploads/40f83606-3cc8-4f51-95e4-fb7d081bc559.png",
      featured: false
    },
    {
      id: 5,
      title: "Villa vs Apartment: Which is Better for Kerala Investment?",
      slug: "villa-vs-apartment-kerala-investment-comparison",
      excerpt: "Compare the pros and cons of investing in villas versus apartments in Kerala. Analyze ROI, maintenance costs, and resale value factors.",
      category: "Investment Comparison",
      author: "Investment Advisor",
      date: "2024-12-20",
      readTime: "10 min read",
      image: "/lovable-uploads/711b39a6-690a-4d79-9bd8-d869d3f40d88.png",
      featured: false
    },
    {
      id: 6,
      title: "Kerala Property Registration Process: Step-by-Step Guide",
      slug: "kerala-property-registration-process-guide",
      excerpt: "Navigate Kerala's property registration process with confidence. Documentation requirements, stamp duty calculation, and registration procedures explained.",
      category: "Legal Process",
      author: "Documentation Expert",
      date: "2024-12-15",
      readTime: "11 min read",
      image: "/lovable-uploads/43b9c491-590d-4657-8415-54dcc2ffad5a.png",
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Kerala Real Estate Blog | Property Investment Tips & Market Insights</title>
        <meta name="description" content="Expert insights on Kerala real estate market. Property investment guides, market trends, legal advice for buying, selling, renting properties in Trivandrum, Kochi." />
        <meta name="keywords" content="kerala real estate blog, property investment tips, trivandrum market trends, buying guide kerala, real estate news kerala, property legal advice" />
        <link rel="canonical" href="https://realestateworldkerala.com/blog" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-background via-card/20 to-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-ultra mb-6 leading-tight">
                  Kerala Real Estate <span className="text-gradient-ultra">Insights</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Expert guidance, market trends, and investment tips for property buyers and sellers in God's Own Country
                </p>
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-luxury font-bold mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="card-luxury overflow-hidden hover-lift group">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-IN')}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-luxury font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-glow">
                            Read More <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* All Posts */}
          <section className="py-16 bg-card/20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-luxury font-bold mb-8">Latest Property Insights</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="card-luxury overflow-hidden hover-lift group">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline" className="text-xs">{post.category}</Badge>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-luxury font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('en-IN')}
                        </div>
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-glow text-xs">
                            Read More <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Card className="card-ultra p-12 text-center">
                <h2 className="text-3xl font-luxury font-bold mb-4">Need Personal Property Advice?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get expert consultation for your specific property requirements in Kerala
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="btn-ultra"
                    onClick={() => window.open('https://wa.me/919447258746', '_blank')}
                  >
                    WhatsApp Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Schedule Call
                  </Button>
                </div>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogIndex;