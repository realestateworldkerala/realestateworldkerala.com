import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, Key, MessageCircle, FileCheck, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Buy Property",
      description: "Find your perfect home from our curated selection of premium properties across Kerala",
      features: ["Verified Listings", "Price Negotiation", "Legal Assistance", "Home Loans Support"],
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Sell Property",
      description: "Get the best market value for your property with our expert marketing strategies",
      features: ["Market Analysis", "Professional Photography", "Digital Marketing", "Quick Sale Guarantee"],
      color: "bg-green-500/10 text-green-400"
    },
    {
      icon: Key,
      title: "Rent Property",
      description: "Premium rental properties for families, professionals, and businesses",
      features: ["Tenant Verification", "Rent Management", "Maintenance Support", "Legal Documentation"],
      color: "bg-purple-500/10 text-purple-400"
    },
    {
      icon: MessageCircle,
      title: "Consultation",
      description: "Expert advice for real estate investments and property decisions",
      features: ["Investment Planning", "Market Insights", "Legal Guidance", "Portfolio Management"],
      color: "bg-orange-500/10 text-orange-400"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-card/10 via-background to-card/20 relative overflow-hidden">
      {/* Ultra background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Ultra Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-primary text-sm font-premium font-semibold uppercase tracking-[0.2em]">Our Services</span>
          <h2 className="text-5xl md:text-6xl font-ultra mt-4 mb-6 leading-tight">
            Complete <span className="text-gradient-ultra">Real Estate</span> Solutions
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-premium">
            From <a href="#properties" className="text-primary hover:text-primary-glow underline transition-colors">buying your dream home</a> to strategic investments, we provide comprehensive 
            real estate services tailored to your needs in Kerala. Learn more <a href="#about" className="text-primary hover:text-primary-glow underline transition-colors">about our experience</a> and view <a href="#reviews" className="text-primary hover:text-primary-glow underline transition-colors">client testimonials</a>.
          </p>
        </div>

        {/* Ultra Services Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20 animate-fade-in">
          {services.map((service, index) => (
            <Card key={index} className="card-ultra p-10 group hover-lift">
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-gradient-ultra rounded-2xl flex items-center justify-center flex-shrink-0 glow-ultra group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-luxury mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-premium">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-base">
                        <div className="w-2 h-2 bg-gradient-ultra rounded-full"></div>
                        <span className="font-premium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="btn-ghost-ultra"
                    onClick={() => window.open('https://wa.me/919447258746', '_blank')}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Ultra Additional Services */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          <Card className="card-ultra p-8 text-center hover-lift group">
            <div className="w-16 h-16 bg-gradient-ultra rounded-2xl flex items-center justify-center mx-auto mb-6 glow-ultra group-hover:scale-110 transition-all duration-300">
              <FileCheck className="w-8 h-8 text-primary-foreground" />
            </div>
            <h4 className="font-luxury text-xl mb-4">Legal Documentation</h4>
            <p className="text-muted-foreground font-premium">
              Complete support for property registration, NOCs, and legal clearances
            </p>
          </Card>

          <Card className="card-ultra p-8 text-center hover-lift group">
            <div className="w-16 h-16 bg-gradient-ultra rounded-2xl flex items-center justify-center mx-auto mb-6 glow-ultra group-hover:scale-110 transition-all duration-300">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h4 className="font-luxury text-xl mb-4">Property Valuation</h4>
            <p className="text-muted-foreground font-premium">
              Accurate market assessment and property valuation services
            </p>
          </Card>

          <Card className="card-ultra p-8 text-center hover-lift group">
            <div className="w-16 h-16 bg-gradient-ultra rounded-2xl flex items-center justify-center mx-auto mb-6 glow-ultra group-hover:scale-110 transition-all duration-300">
              <Home className="w-8 h-8 text-primary-foreground" />
            </div>
            <h4 className="font-luxury text-xl mb-4">Investment Advisory</h4>
            <p className="text-muted-foreground font-premium">
              Strategic guidance for real estate investments and portfolio planning
            </p>
          </Card>
        </div>

        {/* Ultra CTA Section */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="card-ultra p-12 max-w-5xl mx-auto relative overflow-hidden">
            {/* Ultra background effects */}
            <div className="absolute inset-0 bg-gradient-ultra opacity-5"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-ultra mb-6 leading-tight">
                Ready to Start Your <span className="text-gradient-ultra">Real Estate Journey?</span>
              </h3>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto font-premium">
                Connect with our expert team for personalized consultation and discover the perfect property solution for you
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="btn-ultra text-xl px-10 py-6"
                  onClick={() => window.open('https://wa.me/919447258746', '_blank')}
                >
                  WhatsApp Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="btn-ghost-ultra text-xl px-10 py-6"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;