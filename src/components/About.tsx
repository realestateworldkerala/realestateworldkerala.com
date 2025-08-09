import { Button } from "@/components/ui/button";
import { Shield, Users, TrendingUp, Award, Home, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "10+ years of reliable service in Kerala's real estate market with legal compliance and transparency."
    },
    {
      icon: Users,
      title: "427+ Happy Clients",
      description: "Our 4.9-star rating reflects our commitment to exceptional customer service and satisfaction."
    },
    {
      icon: TrendingUp,
      title: "Market Leaders",
      description: "Deep understanding of Kerala property markets from Thiruvananthapuram to Kochi."
    },
    {
      icon: Award,
      title: "Premium Properties",
      description: "Curated selection of luxury homes, villas, apartments, and commercial spaces."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block bg-golden/10 text-golden px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Real Estate World
            </div>
            
            <h2 className="text-4xl md:text-5xl font-luxury font-bold text-primary mb-6">
              Kerala's Most
              <span className="text-golden"> Trusted</span>
              <br />
              Property Experts
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                With over <span className="text-golden font-semibold">10 years of experience</span> in Kerala's real estate market, 
                Real Estate World has established itself as the most trusted name in property solutions.
              </p>
              <p>
                From luxury villas in Thiruvananthapuram to modern apartments in Kochi, we've helped 
                <span className="text-primary font-semibold"> 427+ families</span> find their dream homes across God's Own Country.
              </p>
              <p>
                Our <span className="text-golden font-semibold">4.9-star rating</span> and commitment to transparency 
                make us Kerala's preferred choice for buying, selling, and renting premium properties.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="luxury" size="lg" asChild>
                <a href="#contact">
                  <Home className="w-5 h-5" />
                  Start Your Journey
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#properties">
                  View Our Success Stories
                </a>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-golden mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-golden mb-1">427+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-golden mb-1">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-golden rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-primary rounded-2xl p-8 md:p-12 text-white shadow-elegant">
            <Heart className="w-12 h-12 text-golden mx-auto mb-6" />
            <h3 className="text-3xl font-luxury font-bold mb-4">Our Vision</h3>
            <p className="text-xl text-silver-light leading-relaxed">
              "To make every Malayali's dream of owning a beautiful home in Kerala a reality, 
              while providing exceptional service that builds lasting relationships."
            </p>
            <div className="mt-6 text-golden font-medium">
              - Real Estate World Team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;