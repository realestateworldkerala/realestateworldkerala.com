import { Button } from "@/components/ui/button";
import { Home, TrendingUp, Key, Users, MapPin, Shield, Phone, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Buy Property",
      description: "Find your dream home with our curated selection of premium properties across Kerala.",
      features: ["Luxury Villas", "Modern Apartments", "Traditional Homes", "Gated Communities"],
      color: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Sell Property",
      description: "Get the best value for your property with our expert marketing and negotiation skills.",
      features: ["Free Valuation", "Professional Photography", "Market Analysis", "Legal Support"],
      color: "bg-green-500"
    },
    {
      icon: Key,
      title: "Rent Property",
      description: "Whether you're looking to rent or lease out, we handle all rental requirements.",
      features: ["Tenant Verification", "Rental Management", "Maintenance Support", "Legal Documentation"],
      color: "bg-purple-500"
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Expert guidance on property investment, legal matters, and market trends.",
      features: ["Investment Advice", "Legal Guidance", "Market Insights", "Portfolio Planning"],
      color: "bg-orange-500"
    }
  ];

  const specializations = [
    { icon: MapPin, title: "Thiruvananthapuram", desc: "Capital city premium locations" },
    { icon: Star, title: "Kochi Metro", desc: "Commercial & residential hubs" },
    { icon: Shield, title: "Hill Stations", desc: "Munnar, Wayanad properties" },
    { icon: Home, title: "Coastal Areas", desc: "Beachfront & waterfront homes" }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-golden/10 text-golden px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-primary mb-6">
            Complete Real Estate
            <span className="text-golden"> Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From buying your first home to building a property portfolio, we provide end-to-end 
            real estate services tailored to your needs in Kerala.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-500 transform hover:scale-105"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-golden rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                <a href="#contact">
                  Learn More
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-luxury font-bold text-primary mb-4">
              Kerala <span className="text-golden">Specializations</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep local knowledge across Kerala's most sought-after locations
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {specializations.map((spec, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-golden rounded-lg flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">{spec.title}</h4>
                <p className="text-sm text-muted-foreground">{spec.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="luxury" size="lg" asChild>
              <a href="https://wa.me/919447258746" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Get Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;