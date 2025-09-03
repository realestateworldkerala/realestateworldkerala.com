import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Users, Home, Award } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/c8d30fc4-7070-4d55-a443-0cf40d6453ef.png" 
          alt="Modern luxury skyscraper with stunning golden hour lighting and city skyline"
          className="w-full h-full object-cover transition-transform duration-75"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-primary/30"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading - Ultra Luxury Design with Local SEO */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-ultra mb-8 leading-[0.85] tracking-tight">
            <span className="block text-gradient-ultra drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] animate-glow-pulse">
              ReaL EstatE WorlD
            </span>
          </h1>
          
          {/* Subheading with Local Keywords */}
          <p className="text-2xl md:text-4xl text-white font-luxury font-medium mb-6 drop-shadow-xl">
            "Budget & Premium Properties in God's Own Country"
          </p>
          
          <p className="text-xl md:text-2xl text-gradient-ultra mb-12 font-premium tracking-wide">
            Buy • Sell • Rent • Invest in Kochi • Trivandrum • Kerala
          </p>

          {/* CTA Buttons - Ultra Luxury Style */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <Button 
              size="lg" 
              className="btn-ultra text-xl px-12 py-6 hover-lift font-ultra tracking-wide"
              onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Properties
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-ghost-ultra text-xl px-12 py-6 font-premium tracking-wide"
              onClick={() => window.open('https://wa.me/919447258746', '_blank')}
            >
              Contact Us
            </Button>
          </div>

          {/* Ultra Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center card-glass p-6 hover-glow">
              <div className="text-5xl font-ultra text-gradient-ultra mb-3">10+</div>
              <div className="text-white/90 font-premium text-lg">Years Experience</div>
            </div>
            <div className="text-center card-glass p-6 hover-glow">
              <div className="text-5xl font-ultra text-gradient-ultra mb-3">90</div>
              <div className="text-white/90 font-premium text-lg">Google Reviews</div>
            </div>
            <div className="text-center card-glass p-6 hover-glow">
              <div className="text-5xl font-ultra text-gradient-ultra mb-3">427+</div>
              <div className="text-white/90 font-premium text-lg">Happy Clients</div>
            </div>
            <div className="text-center card-glass p-6 hover-glow">
              <div className="text-5xl font-ultra text-gradient-ultra mb-3">500+</div>
              <div className="text-white/90 font-premium text-lg">Properties Sold</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ultra WhatsApp Floating Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <Button
          size="lg"
          className="btn-ultra rounded-full w-20 h-20 shadow-ultra glow-ultra float"
          onClick={() => window.open('https://wa.me/919447258746', '_blank')}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382"/>
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default Hero;