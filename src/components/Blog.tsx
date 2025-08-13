import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

import { blogPosts } from "@/data/blog";

const Blog = () => {
  

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
          <Card key={post.id} className="card-luxury overflow-hidden mb-12 group">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  loading="lazy"
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
                
                <div className="text-muted-foreground mb-6 text-lg">
                  <p className="line-clamp-3">
                    {post.content.split('\n').slice(0, 3).join(' ').trim()}
                  </p>
                </div>
                
                 <div className="flex items-center justify-between">
                   <span className="text-sm text-muted-foreground">{post.date} • {post.readTime}</span>
                   <Button 
                     variant="outline" 
                     size="sm"
                     className="border-primary/30 text-primary hover:bg-primary/10"
                     asChild
                   >
                     <Link to={`/blog/${post.slug}`}>
                       Read More
                     </Link>
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
                  loading="lazy"
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
                
                <div className="text-muted-foreground mb-4 text-sm">
                  <p className="line-clamp-3">
                    {post.content.split('\n').slice(0, 3).join(' ').trim()}
                  </p>
                </div>
                
                 <Button 
                   variant="outline" 
                   size="sm"
                   className="border-primary/30 text-primary hover:bg-primary/10 w-full"
                   asChild
                 >
                   <Link to={`/blog/${post.slug}`}>
                     Read More
                   </Link>
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