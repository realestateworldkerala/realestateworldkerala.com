import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Phone } from "lucide-react";

const Properties = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Villa in Trivandrum",
      location: "Nemon, Trivandrum",
      price: "₹85 Lakhs",
      type: "Villa",
      status: "For Sale",
      bedrooms: 4,
      bathrooms: 3,
      area: "2500 sq ft",
      image: "/lovable-uploads/bcac3097-cfe3-4ab0-b9ce-fd41f850b9fd.png",
      description: "Spacious luxury villa with modern amenities in a prime location"
    },
    {
      id: 2,
      title: "Modern House in Kerala",
      location: "Kochi",
      price: "₹65 Lakhs",
      type: "House",
      status: "For Sale",
      bedrooms: 3,
      bathrooms: 2,
      area: "1800 sq ft",
      image: "/lovable-uploads/9cc0c87e-7272-4f8a-8a9b-25cc78f01531.png",
      description: "Contemporary design house with excellent connectivity"
    },
    {
      id: 3,
      title: "Premium Residential Plot",
      location: "Nemon, Near Police Station",
      price: "₹45 Lakhs",
      type: "Land",
      status: "For Sale",
      area: "22.5 Cent",
      image: "/lovable-uploads/a428939c-3aa1-462a-b72d-87fdf0f0c7f5.png",
      description: "22.5 cent land for sale at Nemon, 50 mtr near police station"
    },
    {
      id: 4,
      title: "Family Home with Garden",
      location: "Trivandrum",
      price: "₹75 Lakhs",
      type: "House",
      status: "For Sale",
      bedrooms: 3,
      bathrooms: 2,
      area: "2000 sq ft",
      image: "/lovable-uploads/20b6b73b-3848-4f45-8076-f9d100cf2d51.png",
      description: "Beautiful family home with landscaped garden and parking"
    }
  ];

  return (
    <section id="properties" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Featured Properties</span>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold mt-2 mb-4">
            Premium <span className="text-gradient-animate">Properties</span> in Kerala
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover handpicked properties from our exclusive collection across Kerala's most desirable locations
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <Card key={property.id} className="card-luxury overflow-hidden group">
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-primary text-primary-foreground"
                  >
                    {property.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-card/90 border-primary/30">
                    {property.type}
                  </Badge>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold line-clamp-1">{property.title}</h3>
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {property.description}
                </p>

                {/* Property Features */}
                {property.bedrooms && (
                  <div className="flex items-center gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4 text-primary" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    {property.bathrooms && (
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4 text-primary" />
                        <span>{property.bathrooms} Baths</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4 text-primary" />
                      <span>{property.area}</span>
                    </div>
                  </div>
                )}

                {!property.bedrooms && (
                  <div className="flex items-center gap-1 mb-6 text-sm">
                    <Square className="w-4 h-4 text-primary" />
                    <span>{property.area}</span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 btn-luxury"
                    onClick={() => window.open('https://wa.me/919447258746', '_blank')}
                  >
                    WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-primary/30 text-primary hover:bg-primary/10"
                    onClick={() => window.open('tel:+919447258746', '_blank')}
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Properties */}
        <div className="text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-luxury font-bold mb-4">
              Looking for More <span className="text-primary">Properties?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              We have an extensive portfolio of verified properties across Kerala. 
              Connect with us to explore options that match your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-luxury"
                onClick={() => window.open('https://wa.me/919447258746', '_blank')}
              >
                View All Properties
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Custom Requirements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;