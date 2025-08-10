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
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold mt-2 mb-4">
            Complete <span className="text-gradient-animate">Real Estate</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From buying your dream home to strategic investments, we provide comprehensive 
            real estate services tailored to your needs in Kerala
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-luxury p-8 group">
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary/10"
                    onClick={() => window.open('https://wa.me/919447258746', '_blank')}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="card-luxury p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileCheck className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-lg mb-2">Legal Documentation</h4>
            <p className="text-sm text-muted-foreground">
              Complete support for property registration, NOCs, and legal clearances
            </p>
          </Card>

          <Card className="card-luxury p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-lg mb-2">Property Valuation</h4>
            <p className="text-sm text-muted-foreground">
              Accurate market assessment and property valuation services
            </p>
          </Card>

          <Card className="card-luxury p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Home className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-lg mb-2">Investment Advisory</h4>
            <p className="text-sm text-muted-foreground">
              Strategic guidance for real estate investments and portfolio planning
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-luxury font-bold mb-4">
              Ready to Start Your <span className="text-primary">Real Estate Journey?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Connect with our expert team for personalized consultation and discover the perfect property solution for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-luxury"
                onClick={() => window.open('https://wa.me/919447258746', '_blank')}
              >
                WhatsApp Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;