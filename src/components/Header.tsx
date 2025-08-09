import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Properties", href: "#properties" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-golden rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-primary rounded-sm transform rotate-45"></div>
            </div>
            <div>
              <h1 className="text-xl font-luxury font-bold">
                <span className="text-golden">ReaL EstatE WorlD</span>
              </h1>
              <p className="text-xs text-silver -mt-1">Kerala's Premium Properties</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-silver hover:text-golden transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+919447258746" className="text-silver hover:text-golden transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="mailto:info@realestateworldkerala.com" className="text-silver hover:text-golden transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <Button variant="whatsapp" size="sm" asChild>
              <a href="https://wa.me/919447258746" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-silver hover:text-golden transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-background border-b border-border shadow-elegant">
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-silver hover:text-golden transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <a href="tel:+919447258746" className="text-silver hover:text-golden transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:info@realestateworldkerala.com" className="text-silver hover:text-golden transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <Button variant="whatsapp" size="sm" asChild>
                  <a href="https://wa.me/919447258746" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;