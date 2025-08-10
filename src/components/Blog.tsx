import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring Thiruvananthapuram: The Capital City of Kerala",
      excerpt: "Thiruvananthapuram, the capital and largest city of Kerala, is a perfect blend of ancient traditions and modern aspirations, offering a unique experience to every traveler.",
      category: "Kerala Capital",
      readTime: "8 min read",
      author: "Real Estate World",
      date: "Aug 2024",
      image: "/lovable-uploads/5c93cb23-b158-4bbd-a520-425c283c1f59.png",
      featured: true
    },
    {
      id: 2,
      title: "Lalettan: The Complete Actor and Cultural Icon",
      excerpt: "Mohanlal Viswanathan, known to millions as 'Lalettan,' is a name synonymous with excellence in Indian cinema with a career spanning over four decades.",
      category: "Kerala Icons",
      readTime: "10 min read",
      author: "Real Estate World",
      date: "Aug 2024",
      image: "/lovable-uploads/3e93037b-771d-43e8-ae5e-6dc40ce8dce2.png"
    },
    {
      id: 3,
      title: "Kathakali: The Storytelling Dance of Kerala",
      excerpt: "Kathakali is one of the most popular and celebrated classical dance forms of Kerala, known for its dramatic storytelling, vibrant costumes, and expressive facial movements.",
      category: "Kerala Culture",
      readTime: "7 min read",
      author: "Real Estate World",
      date: "Aug 2024",
      image: "/lovable-uploads/43b9c491-590d-4657-8415-54dcc2ffad5a.png"
    },
    {
      id: 4,
      title: "My Own Home: The Dream of Every Malayali",
      excerpt: "For every Malayali, owning a home is one of life's biggest dreams. It represents a world of hope, love, and family bonds - more than just a building.",
      category: "Kerala Lifestyle",
      readTime: "6 min read",
      author: "Real Estate World",
      date: "Aug 2024",
      image: "/lovable-uploads/bacbe164-56e7-412b-a66d-f65cd5abc35e.png"
    },
    {
      id: 5,
      title: "Sree Padmanabhaswamy Temple: A Journey into History, Devotion, and Mystery",
      excerpt: "Nestled in the heart of Thiruvananthapuram stands the magnificent Sree Padmanabhaswamy Temple - a stunning repository of history, art, and devotion.",
      category: "Kerala Heritage",
      readTime: "12 min read",
      author: "Real Estate World",
      date: "Aug 2024",
      image: "/lovable-uploads/5c93cb23-b158-4bbd-a520-425c283c1f59.png"
    },
    {
      id: 6,
      title: "Thrissur Pooram: The Grandest Festival of Festivals",
      excerpt: "Thrissur Pooram, often hailed as the 'mother of all poorams' in Kerala, is a spectacular 36-hour non-stop celebration that captivates the senses and unites a city.",
      category: "Kerala Festivals",
      readTime: "15 min read",
      author: "Real Estate World",
      date: "Aug 2024",
      image: "/lovable-uploads/43b9c491-590d-4657-8415-54dcc2ffad5a.png"
    },
    {
      id: 7,
      title: "Kerala's Stunning Hill Stations: A Journey into Nature's Embrace",
      excerpt: "Kerala is home to stunning hill stations that offer a perfect escape into nature's embrace, from sprawling tea plantations to dense forests and rolling meadows.",
      category: "Kerala Tourism",
      readTime: "10 min read",
      author: "Real Estate World",
      date: "Aug 2024",
      image: "/lovable-uploads/43ef567e-6a79-4b5a-8535-7dd3f38dc00e.png"
    },
    {
      id: 8,
      title: "Kerala's Magnificent Waterfalls: Nature's Spectacular Display",
      excerpt: "Kerala is home to numerous stunning waterfalls, each with its unique charm and surrounded by lush greenery, from the 'Niagara of South India' to hidden forest cascades.",
      category: "Kerala Nature",
      readTime: "8 min read",
      author: "Real Estate World",
      date: "Aug 2024",
      image: "/lovable-uploads/43ef567e-6a79-4b5a-8535-7dd3f38dc00e.png"
    },
    {
      id: 9,
      title: "Kerala's Golden Coastline: Beaches That Captivate the Soul",
      excerpt: "Kerala's coastline, with its long stretches of golden sand and turquoise waters, is dotted with some of the most beautiful beaches in India.",
      category: "Kerala Beaches",
      readTime: "9 min read",
      author: "Real Estate World",
      date: "Aug 2024",
      image: "/lovable-uploads/98e5a004-aa58-407b-9856-2307fa92f5f7.png"
    },
    {
      id: 10,
      title: "Kochi: The Vibrant Metro City Where Heritage Meets Modernity",
      excerpt: "Kochi stands as the commercial and industrial capital of Kerala, a vibrant metropolis that successfully balances ancient heritage with forward-thinking metropolitan outlook.",
      category: "Kerala Cities",
      readTime: "11 min read",
      author: "Real Estate World",
      date: "Aug 2024",
      image: "/lovable-uploads/c2353c37-2a36-470f-919d-443a66e8b34b.png"
    },
    {
      id: 11,
      title: "Nilambur Teak: The Mecca of Teak and Kerala's Green Gold",
      excerpt: "Nilambur teak, known as 'The Mecca of Teak,' is a world-renowned variety from Kerala, highly prized for its exceptional quality and holding prestigious GI status.",
      category: "Kerala Heritage",
      readTime: "8 min read",
      author: "Real Estate World",
      date: "Aug 2024",
      image: "/lovable-uploads/d3a19ff4-8a81-41f0-9dd8-20d436c5382a.png"
    },
    {
      id: 12,
      title: "SM Street: Kozhikode's Historic Sweet Meat Street",
      excerpt: "SM Street, also known as 'Kozhikode Mithai Theruvu,' is one of the busiest and most historic commercial hubs in Kozhikode city, famous for centuries of sweet-making tradition.",
      category: "Kerala Heritage",
      readTime: "5 min read",
      author: "Real Estate World",
      date: "Aug 2024",
      image: "/lovable-uploads/40f83606-3cc8-4f51-95e4-fb7d081bc559.png"
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