import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden">
      {/* Ultra background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <span className="text-primary text-sm font-premium font-semibold uppercase tracking-[0.2em]">About Us</span>
              <h2 className="text-5xl md:text-6xl font-ultra mt-4 mb-6 leading-tight">
                <span className="text-gradient-ultra">10+ Years</span> of Excellence
              </h2>
              <p className="text-2xl text-muted-foreground font-premium">
                Your trusted real estate partner in Kerala's premium property market
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-lg leading-relaxed">
                Real Estate World has been Kerala's premier real estate consultancy for over a decade, 
                specializing in <a href="#properties" className="text-primary hover:text-primary-glow underline transition-colors">premium properties</a> across God's Own Country. Our comprehensive <a href="#services" className="text-primary hover:text-primary-glow underline transition-colors">real estate 
                services</a> include residential property sales, commercial real estate investments, luxury villa 
                development, apartment complexes, land acquisition, and property management solutions throughout 
                Thiruvananthapuram, Kochi, Kozhikode, Kottayam, and Alappuzha districts.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our experienced real estate professionals understand Kerala's unique property market dynamics, 
                from heritage homes in Fort Kochi to modern IT corridor developments in Technopark Trivandrum. 
                We specialize in property valuation, legal documentation, home loans facilitation, and investment 
                advisory services for both domestic and NRI clients seeking to invest in Kerala real estate.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                With expertise in residential plots, luxury villas, budget apartments, commercial spaces, 
                agricultural land, and waterfront properties, we've successfully facilitated over 500 property 
                transactions worth ₹200+ crores. Our client-centric approach includes comprehensive market analysis, 
                property documentation verification, negotiation support, and post-sale services, making us the 
                most trusted real estate partner in Kerala with 427+ satisfied clients and a stellar 4.9-star 
                rating based on 90+ Google Reviews.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Whether you're looking for <a href="#properties" className="text-primary hover:text-primary-glow underline transition-colors">budget homes under ₹50 lakhs</a>, <a href="#properties" className="text-primary hover:text-primary-glow underline transition-colors">premium villas above ₹2 crores</a>, 
                commercial properties for business expansion, or investment opportunities in Kerala's growing 
                real estate market, our team provides <a href="#services" className="text-primary hover:text-primary-glow underline transition-colors">end-to-end solutions</a> including property search, 
                legal clearance, bank loan assistance, registration procedures, and ongoing property management 
                services to ensure a seamless real estate experience. <a href="#contact" className="text-primary hover:text-primary-glow underline transition-colors">Contact us today</a> for personalized assistance.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Verified Property Listings</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Legal Documentation Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Market Value Assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>End-to-End Service</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">Ready to Find Your Dream Property?</h3>
              <p className="text-muted-foreground mb-4">
                Connect with our expert team for personalized real estate solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="tel:+919447258746" 
                  className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
                >
                  📞 +91 94472 58746
                </a>
                <a 
                  href="mailto:info@realestateworldkerala.com" 
                  className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
                >
                  ✉️ info@realestateworldkerala.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Ultra Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-fade-in">
            <Card className="card-ultra p-10 text-center hover-lift group">
              <div className="w-20 h-20 bg-gradient-ultra rounded-2xl flex items-center justify-center mx-auto mb-6 glow-ultra group-hover:scale-110 transition-all duration-300">
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-5xl font-ultra text-gradient-ultra mb-4">10+</div>
              <div className="text-xl font-luxury mb-3">Years Experience</div>
              <p className="text-muted-foreground font-premium">
                Over a decade of expertise in Kerala's real estate market
              </p>
            </Card>

            <Card className="card-ultra p-10 text-center hover-lift group">
              <div className="w-20 h-20 bg-gradient-ultra rounded-2xl flex items-center justify-center mx-auto mb-6 glow-ultra group-hover:scale-110 transition-all duration-300">
                <Users className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-5xl font-ultra text-gradient-ultra mb-4">427+</div>
              <div className="text-xl font-luxury mb-3">Happy Clients</div>
              <p className="text-muted-foreground font-premium">
                Satisfied customers who trust our expertise and service
              </p>
            </Card>

            <Card className="card-ultra p-10 text-center hover-lift group">
              <div className="w-20 h-20 bg-gradient-ultra rounded-2xl flex items-center justify-center mx-auto mb-6 glow-ultra group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-5xl font-ultra text-gradient-ultra mb-4">500+</div>
              <div className="text-xl font-luxury mb-3">Properties Sold</div>
              <p className="text-muted-foreground font-premium">
                Successful transactions across residential and commercial properties
              </p>
            </Card>

            <Card className="card-ultra p-10 text-center hover-lift group">
              <div className="w-20 h-20 bg-gradient-ultra rounded-2xl flex items-center justify-center mx-auto mb-6 glow-ultra group-hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 text-primary-foreground text-3xl">⭐</div>
              </div>
              <div className="text-5xl font-ultra text-gradient-ultra mb-4">4.9</div>
              <div className="text-xl font-luxury mb-3">Google Rating</div>
              <p className="text-muted-foreground font-premium">
                Based on 90+ genuine customer reviews on Google
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;