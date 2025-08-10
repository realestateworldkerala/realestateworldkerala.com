import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "കേരള Capital - Thiruvananthapuram 🏛",
      excerpt: "Discover the real estate opportunities in Kerala's capital city, known for its rich heritage and growing property market.",
      category: "Location Guide",
      readTime: "5 min read",
      author: "Real Estate World",
      date: "Dec 2024",
      image: "/lovable-uploads/bcac3097-cfe3-4ab0-b9ce-fd41f850b9fd.png",
      featured: true
    },
    {
      id: 2,
      title: "പത്മനാഭസ്വാമി ക്ഷേത്രം ⛩ - Property Investment Near Temple",
      excerpt: "Explore premium property investments near the famous Padmanabhaswamy Temple in Trivandrum.",
      category: "Investment",
      readTime: "4 min read",
      author: "Real Estate World",
      date: "Dec 2024",
      image: "/lovable-uploads/df1e54fb-07d7-4e7b-a4b2-9911d2fb44f3.png"
    },
    {
      id: 3,
      title: "Cochin Metro City 🚇 - Modern Living Opportunities",
      excerpt: "How Kochi's metro expansion is creating new real estate hotspots and investment opportunities.",
      category: "Market Trends",
      readTime: "6 min read",
      author: "Real Estate World",
      date: "Nov 2024",
      image: "/lovable-uploads/9cc0c87e-7272-4f8a-8a9b-25cc78f01531.png"
    },
    {
      id: 4,
      title: "കേരള Beaches 🏖 - Coastal Property Investment",
      excerpt: "Investment opportunities in Kerala's stunning coastal areas and beachfront properties.",
      category: "Investment",
      readTime: "5 min read",
      author: "Real Estate World",
      date: "Nov 2024",
      image: "/lovable-uploads/a428939c-3aa1-462a-b72d-87fdf0f0c7f5.png"
    },
    {
      id: 5,
      title: "മലയാളിയുടെ ഒരു വീട് എന്ന സ്വപ്നം 🏠",
      excerpt: "Understanding the Malayali dream of homeownership and how to make it a reality in today's market.",
      category: "Lifestyle",
      readTime: "7 min read",
      author: "Real Estate World",
      date: "Nov 2024",
      image: "/lovable-uploads/20b6b73b-3848-4f45-8076-f9d100cf2d51.png"
    },
    {
      id: 6,
      title: "Kerala Hill Stations 🏞 - Mountain Property Guide",
      excerpt: "Explore property opportunities in Kerala's beautiful hill stations like Munnar and Wayanad.",
      category: "Location Guide",
      readTime: "6 min read",
      author: "Real Estate World",
      date: "Oct 2024",
      image: "/lovable-uploads/e922d076-1304-4946-afd2-f138431488c7.png"
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Blog</span>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold mt-2 mb-4">
            Kerala Real Estate <span className="text-gradient-animate">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, market insights, and investment opportunities 
            in Kerala's dynamic real estate landscape
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="card-luxury overflow-hidden mb-12">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-luxury font-bold mb-4 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-3 text-lg">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Button 
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 group"
                    onClick={() => window.open('https://wa.me/919447258746', '_blank')}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="card-luxury overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-card/90 border-primary/30 text-primary">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:bg-primary/10 p-0 h-auto group"
                  onClick={() => window.open('https://wa.me/919447258746', '_blank')}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-luxury font-bold mb-4">
              Stay Updated with <span className="text-primary">Kerala Real Estate</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Get the latest market insights, property trends, and investment opportunities 
              delivered to your WhatsApp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-luxury"
                onClick={() => window.open('https://wa.me/919447258746', '_blank')}
              >
                Subscribe via WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10"
                onClick={() => window.open('https://youtube.com/@realestateworldkerala', '_blank')}
              >
                YouTube Channel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;