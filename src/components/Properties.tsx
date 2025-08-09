import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Maximize, Heart, Eye, Phone } from "lucide-react";

const Properties = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Villa in Thiruvananthapuram",
      location: "Kowdiar, Thiruvananthapuram",
      price: "₹2.5 Cr",
      type: "Sale",
      beds: 4,
      baths: 3,
      area: "3500 sq ft",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Swimming Pool", "Garden", "Parking", "Security"]
    },
    {
      id: 2,
      title: "Modern Apartment in Kochi",
      location: "Marine Drive, Kochi",
      price: "₹1.8 Cr",
      type: "Sale",
      beds: 3,
      baths: 2,
      area: "2200 sq ft",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Sea View", "Gym", "Elevator", "Balcony"]
    },
    {
      id: 3,
      title: "Traditional Kerala Home",
      location: "Alleppey",
      price: "₹85 Lac",
      type: "Sale",
      beds: 3,
      baths: 2,
      area: "2800 sq ft",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Heritage Style", "Courtyard", "Wood Work", "Garden"]
    },
    {
      id: 4,
      title: "Penthouse in Kozhikode",
      location: "Calicut Beach Road",
      price: "₹45,000/month",
      type: "Rent",
      beds: 2,
      baths: 2,
      area: "1800 sq ft",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Furnished", "Beach View", "Terrace", "Parking"]
    },
    {
      id: 5,
      title: "Hill Station Villa",
      location: "Munnar",
      price: "₹3.2 Cr",
      type: "Sale",
      beds: 5,
      baths: 4,
      area: "4200 sq ft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Mountain View", "Fireplace", "Tea Garden", "Privacy"]
    },
    {
      id: 6,
      title: "Luxury Apartment",
      location: "Technopark, TVM",
      price: "₹25,000/month",
      type: "Rent",
      beds: 2,
      baths: 2,
      area: "1400 sq ft",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["IT Hub", "Modern", "Amenities", "Transport"]
    }
  ];

  return (
    <section id="properties" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-golden/10 text-golden px-4 py-2 rounded-full text-sm font-medium mb-6">
            Featured Properties
          </div>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-primary mb-6">
            Premium Properties
            <span className="text-golden"> in Kerala</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of luxury homes, modern apartments, and heritage properties 
            across Kerala's most desirable locations.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <div 
              key={property.id}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={property.type === "Sale" ? "default" : "secondary"}
                    className={property.type === "Sale" ? "bg-golden text-primary" : "bg-green-500 text-white"}
                  >
                    For {property.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-golden transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize className="w-4 h-4 mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.slice(0, 2).map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {property.features.length > 2 && (
                    <span className="text-xs bg-golden/10 text-golden px-2 py-1 rounded-full">
                      +{property.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="whatsapp" size="sm" asChild>
                    <a href="https://wa.me/919447258746" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-luxury font-bold mb-4">
            Looking for Something Specific?
          </h3>
          <p className="text-xl text-silver-light mb-6 max-w-2xl mx-auto">
            Our extensive network includes over 500+ properties across Kerala. 
            Let us help you find your perfect match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="golden" size="lg" asChild>
              <a href="#contact">
                Get Custom Search
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <a href="https://wa.me/919447258746" target="_blank" rel="noopener noreferrer">
                WhatsApp Inquiry
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;