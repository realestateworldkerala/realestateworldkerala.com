import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Top Contact Bar */}
      <div className="bg-card border-b border-border/20 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>+91 94472 58746</span>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span>info@realestateworldkerala.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span>Trivandrum, Kerala</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-card/80 backdrop-blur-md border-b border-border/20 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/2ae248dd-088d-46df-a91e-53bc8159f7fa.png" 
                alt="Real Estate World Logo" 
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-luxury font-bold brand-text leading-none">
                  ReaL EstatE WorlD
                </h1>
                <span className="text-xs text-muted-foreground">Kerala's Trusted Partner</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#properties" className="text-foreground hover:text-primary transition-colors">Properties</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                List Property
              </Button>
              <Button 
                size="sm"
                className="btn-luxury"
                onClick={() => window.open('https://wa.me/919447258746', '_blank')}
              >
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border/20">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-foreground hover:text-primary transition-colors py-2">Home</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">About</a>
                <a href="#services" className="text-foreground hover:text-primary transition-colors py-2">Services</a>
                <a href="#properties" className="text-foreground hover:text-primary transition-colors py-2">Properties</a>
                <a href="#blog" className="text-foreground hover:text-primary transition-colors py-2">Blog</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">Contact</a>
                <div className="flex flex-col gap-2 pt-4 border-t border-border/20">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary/10"
                  >
                    List Property
                  </Button>
                  <Button 
                    size="sm"
                    className="btn-luxury"
                    onClick={() => window.open('https://wa.me/919447258746', '_blank')}
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;