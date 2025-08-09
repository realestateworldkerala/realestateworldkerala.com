import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Home, Award } from "lucide-react";


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-golden/20 backdrop-blur-sm border border-golden/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-golden fill-current" />
            <span className="text-golden font-medium">Kerala's #1 Rated Real Estate</span>
            <Star className="w-4 h-4 text-golden fill-current" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-luxury font-bold mb-6 text-golden">
            ReaL EstatE WorlD
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-silver-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover premium properties in God's Own Country. 
            <br />
            <span className="text-golden font-medium">10+ years of trusted expertise</span> in Kerala real estate.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-golden mb-1">10+</div>
              <div className="text-silver text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden mb-1">90</div>
              <div className="text-silver text-sm">Google Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden mb-1">427+</div>
              <div className="text-silver text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden mb-1">500+</div>
              <div className="text-silver text-sm">Properties Sold</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="golden" size="lg" asChild>
              <a href="#properties">
                Explore Properties
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                Get Free Consultation
              </a>
            </Button>
          </div>

          {/* Client Image Below CTA */}
          <div className="max-w-3xl mx-auto mb-12">
            <img
              src="/lovable-uploads/988db134-3968-493a-bf08-67b116d59d54.png"
              alt="Kerala real estate featured property - client image"
              className="w-full h-auto rounded-lg border border-golden/30 shadow-golden"
              loading="lazy"
            />
          </div>

          {/* Services Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <a href="#services" className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Home className="w-6 h-6 text-golden mx-auto mb-2" />
                <span className="text-white text-sm font-medium">Buy Property</span>
              </div>
            </a>
            <a href="#services" className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Award className="w-6 h-6 text-golden mx-auto mb-2" />
                <span className="text-white text-sm font-medium">Sell Property</span>
              </div>
            </a>
            <a href="#services" className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Users className="w-6 h-6 text-golden mx-auto mb-2" />
                <span className="text-white text-sm font-medium">Rent Property</span>
              </div>
            </a>
            <a href="#services" className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Star className="w-6 h-6 text-golden mx-auto mb-2" />
                <span className="text-white text-sm font-medium">Consultation</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button variant="whatsapp" size="lg" className="rounded-full shadow-2xl animate-pulse" asChild>
          <a href="https://wa.me/919447258746" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Chat Now
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;