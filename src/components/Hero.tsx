import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Users, Home, Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#722F37' }}>
      {/* Decorative top bar */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full" style={{ backgroundColor: '#FFD700' }}></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-luxury font-bold mb-4 leading-tight" style={{ color: '#FFD700' }}>
          ReaL EstatE WorlD
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-2" style={{ color: '#E5C07B' }}>
          Discover premium properties in God's Own Country.
        </p>
        <p className="text-lg mb-12" style={{ color: '#FFD700' }}>
          10+ years of trusted expertise in Kerala real estate.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: '#FFD700' }}>10+</div>
            <div className="text-sm" style={{ color: '#E5C07B' }}>Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: '#FFD700' }}>90</div>
            <div className="text-sm" style={{ color: '#E5C07B' }}>Google Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: '#FFD700' }}>427+</div>
            <div className="text-sm" style={{ color: '#E5C07B' }}>Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: '#FFD700' }}>500+</div>
            <div className="text-sm" style={{ color: '#E5C07B' }}>Properties Sold</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-12">
          <Button 
            size="lg" 
            className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#FFD700', color: '#722F37' }}
            onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Properties →
          </Button>
        </div>

        {/* 3D Logo Image */}
        <div className="mb-12">
          <img 
            src="/lovable-uploads/0659923f-534c-42cc-97ef-a506d87b0672.png" 
            alt="ReaL EstatE WorlD 3D Logo"
            className="w-full max-w-2xl mx-auto"
            loading="lazy"
          />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div 
            className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,215,0,0.3)' }}
          >
            <div className="w-8 h-8 mx-auto mb-3" style={{ color: '#FFD700' }}>🏠</div>
            <h3 className="font-semibold text-sm" style={{ color: '#FFD700' }}>Buy Property</h3>
          </div>

          <div 
            className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,215,0,0.3)' }}
          >
            <div className="w-8 h-8 mx-auto mb-3" style={{ color: '#FFD700' }}>💰</div>
            <h3 className="font-semibold text-sm" style={{ color: '#FFD700' }}>Sell Property</h3>
          </div>

          <div 
            className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,215,0,0.3)' }}
          >
            <div className="w-8 h-8 mx-auto mb-3" style={{ color: '#FFD700' }}>🏢</div>
            <h3 className="font-semibold text-sm" style={{ color: '#FFD700' }}>Rent Property</h3>
          </div>

          <div 
            className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,215,0,0.3)' }}
          >
            <div className="w-8 h-8 mx-auto mb-3" style={{ color: '#FFD700' }}>⭐</div>
            <h3 className="font-semibold text-sm" style={{ color: '#FFD700' }}>Consultation</h3>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 shadow-lg transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: '#25D366' }}
          onClick={() => window.open('https://wa.me/919447258746', '_blank')}
        >
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382"/>
          </svg>
        </Button>
        <div className="text-center mt-2">
          <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#25D366', color: 'white' }}>
            Chat Now
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;