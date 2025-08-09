import { 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Youtube, 
  Linkedin, 
  MessageCircle,
  ArrowRight,
  Star
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Properties", href: "#properties" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Buy Property", href: "#services" },
    { name: "Sell Property", href: "#services" },
    { name: "Rent Property", href: "#services" },
    { name: "Property Valuation", href: "#services" },
    { name: "Investment Advice", href: "#services" }
  ];

  const locations = [
    "Thiruvananthapuram",
    "Kochi",
    "Kozhikode",
    "Thrissur",
    "Alleppey",
    "Munnar"
  ];

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-golden rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-luxury font-bold text-golden">
                    ReaL EstatE WorlD
                  </h3>
                  <p className="text-silver text-sm">Kerala's Premium Properties</p>
                </div>
              </div>
              
              <p className="text-silver-light mb-6 leading-relaxed">
                Kerala's most trusted real estate partner with 10+ years of experience 
                in helping families find their dream homes.
              </p>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-golden fill-current" />
                  ))}
                </div>
                <span className="text-golden font-semibold">4.9</span>
                <span className="text-silver-light text-sm">(90 Reviews)</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com/share/16pMPQr7ks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/919447258746" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com/@realestateworldkerala" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/posts/murali-c-m" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold text-golden mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-silver-light hover:text-golden transition-colors flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold text-golden mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a 
                      href={service.href}
                      className="text-silver-light hover:text-golden transition-colors flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Locations */}
            <div>
              <h4 className="text-xl font-semibold text-golden mb-6">Contact Info</h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:+919447258746" className="text-silver-light hover:text-golden transition-colors">
                      +91 94472 58746
                    </a>
                    <br />
                    <a href="tel:04712080461" className="text-silver-light hover:text-golden transition-colors">
                      0471 2080461
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                  <div>
                    <a href="mailto:info@realestateworldkerala.com" className="text-silver-light hover:text-golden transition-colors">
                      info@realestateworldkerala.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                  <div className="text-silver-light">
                    Kerala, India
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-golden font-medium mb-3">We Serve</h5>
                <div className="grid grid-cols-2 gap-1">
                  {locations.map((location) => (
                    <span key={location} className="text-silver-light text-sm">
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20 py-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-xl font-semibold text-golden mb-2">
                Stay Updated with Kerala Property Market
              </h4>
              <p className="text-silver-light">
                Get latest property updates, market insights, and exclusive deals directly in your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-silver-light focus:outline-none focus:border-golden"
              />
              <button className="px-6 py-3 bg-gradient-golden text-primary font-semibold rounded-lg hover:shadow-golden transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-silver-light text-sm mb-4 md:mb-0">
              © 2024 Real Estate World. All rights reserved. | 
              <a href="#" className="hover:text-golden transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-golden transition-colors ml-1">Terms of Service</a>
            </div>
            <div className="text-silver-light text-sm">
              Website: <span className="text-golden">realestateworldkerala.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;