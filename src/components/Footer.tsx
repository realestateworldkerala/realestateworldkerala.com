import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/2ae248dd-088d-46df-a91e-53bc8159f7fa.png" 
                alt="Real Estate World Logo" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-luxury font-bold brand-text">
                  ReaL EstatE WorlD
                </h3>
                <span className="text-sm text-muted-foreground">Kerala's Trusted Partner</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Your trusted real estate partner in Kerala with over 10 years of experience. 
              We specialize in premium properties across God's Own Country, helping you 
              find the perfect home or investment opportunity.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1 text-primary">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">4.9/5</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">90+ Google Reviews</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">427+ Happy Clients</span>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/30 text-primary hover:bg-primary/10"
                onClick={() => window.open('https://facebook.com/share/16pMPQr7ks', '_blank')}
              >
                Facebook
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/30 text-primary hover:bg-primary/10"
                onClick={() => window.open('https://youtube.com/@realestateworldkerala', '_blank')}
              >
                YouTube
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/30 text-primary hover:bg-primary/10"
                onClick={() => window.open('https://linkedin.com/posts/murali-c-m', '_blank')}
              >
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#properties" className="text-muted-foreground hover:text-primary transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+919447258746" className="block text-muted-foreground hover:text-primary transition-colors">
                    +91 94472 58746
                  </a>
                  <a href="tel:+914712080461" className="block text-muted-foreground hover:text-primary transition-colors">
                    0471 2080461
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:info@realestateworldkerala.com" className="block text-muted-foreground hover:text-primary transition-colors">
                    info@realestateworldkerala.com
                  </a>
                  <a href="mailto:mcmmurali2@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors">
                    mcmmurali2@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    Trivandrum, Kerala<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <Button 
              className="w-full mt-6 btn-luxury"
              onClick={() => window.open('https://wa.me/919447258746', '_blank')}
            >
              WhatsApp Now
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © {currentYear} Real Estate World Kerala. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Website: <a href="https://realestateworldkerala.com" className="text-primary hover:text-primary-glow transition-colors">realestateworldkerala.com</a>
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;