import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Phone } from "lucide-react";

const Properties = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "New 3 BHK House in Mukkampalamudu",
      location: "Mukkampalamudu, Near Mudavullpara",
      price: "₹52 Lakhs",
      type: "House",
      status: "For Sale",
      bedrooms: 3,
      bathrooms: 2,
      area: "1650 sq ft",
      landArea: "4 Cent",
      floors: "2 Floors",
      image: "/lovable-uploads/8de36bf7-d022-40ed-9cde-db471f66a56f.png",
      description: "Brand new house near upcoming highway Kazhakootam to Vizhijam. Modern construction with excellent connectivity."
    },
    {
      id: 2,
      title: "Kerala Style House in Konni",
      location: "400m from Konni Junction, Pathanamthitta",
      price: "₹1.85 Crores",
      type: "House",
      status: "For Sale",
      bedrooms: 3,
      bathrooms: 2,
      area: "3000 sq ft",
      landArea: "18 Cent",
      floors: "2 Floors",
      age: "8 Years",
      image: "/lovable-uploads/20b6b73b-3848-4f45-8076-f9d100cf2d51.png",
      description: "Traditional Kerala style house with spacious rooms and excellent location near Konni junction."
    },
    {
      id: 3,
      title: "Commercial Plot in Nemom",
      location: "Nemom, Trivandrum",
      price: "₹17 Lakhs/Cent",
      type: "Land",
      status: "For Sale",
      area: "22.5 Cent",
      image: "/lovable-uploads/a428939c-3aa1-462a-b72d-87fdf0f0c7f5.png",
      description: "Prime commercial/residential plot near QRS, 25 mtr from Trivandrum to Kanyakumari state highway."
    },
    {
      id: 4,
      title: "House Plot in Murinjapalam",
      location: "Murinjapalam, Trivandrum",
      price: "₹19 Lakhs/Cent", 
      type: "Land",
      status: "For Sale",
      area: "10 Cent",
      image: "/lovable-uploads/e922d076-1304-4946-afd2-f138431488c7.png",
      description: "50m from junction, 150m from Cosmo Hospital, 1.5km from Trivandrum Medical College. Excellent location."
    },
    {
      id: 5,
      title: "Premium Modern House in Sasthamangalam",
      location: "Near Sasthamangalam, Trivandrum",
      price: "₹7 Crores",
      type: "Villa",
      status: "For Sale", 
      bedrooms: 5,
      bathrooms: 4,
      area: "5400 sq ft",
      landArea: "33 Cent",
      image: "/lovable-uploads/ed539f7b-a0b9-4d6e-a79d-3d2f6b3154f4.png",
      description: "Ultra-modern premium house with all modern systems and luxury amenities. Perfect for sophisticated living."
    },
    {
      id: 6,
      title: "Bavani Tower - Commercial Building",
      location: "Aryasala, Trivandrum",
      price: "₹24 Crores",
      type: "Commercial",
      status: "For Sale",
      area: "34,000 sq ft",
      landArea: "21 Cent", 
      floors: "7 Floors",
      image: "/lovable-uploads/df1e54fb-07d7-4e7b-a4b2-9911d2fb44f3.png",
      description: "Premium 7-floor commercial building with excellent investment potential in prime Trivandrum location."
    }
  ];

  return (
    <section id="properties" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/36a22560-0832-49eb-93b7-2ac561a4b3c6.png" 
          alt="Luxury villa with pool background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-card/30"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
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
                  loading="lazy"
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
                <div className="space-y-2 mb-6">
                  {property.bedrooms && (
                    <div className="flex items-center gap-6 text-sm">
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
                    <div className="flex items-center gap-1 text-sm">
                      <Square className="w-4 h-4 text-primary" />
                      <span>{property.area}</span>
                    </div>
                  )}

                  {/* Additional Property Details */}
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    {property.landArea && (
                      <span className="bg-primary/10 px-2 py-1 rounded">
                        🏞️ {property.landArea}
                      </span>
                    )}
                    {property.floors && (
                      <span className="bg-primary/10 px-2 py-1 rounded">
                        🏢 {property.floors}
                      </span>
                    )}
                    {property.age && (
                      <span className="bg-primary/10 px-2 py-1 rounded">
                        📅 {property.age} Old
                      </span>
                    )}
                  </div>
                </div>

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
