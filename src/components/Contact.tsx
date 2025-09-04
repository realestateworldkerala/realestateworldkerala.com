import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const emailBody = encodeURIComponent(
        `New enquiry from Real Estate World website\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Property Type: ${formData.propertyType}\n` +
        `Budget: ${formData.budget}\n` +
        `Message: ${formData.message}`
      );
      const mailto = `mailto:info@realestateworldkerala.com?subject=${encodeURIComponent("New Enquiry - Real Estate World")}&body=${emailBody}`;
      window.location.href = mailto;

      toast({
        title: "Message prepared in your email client",
        description: "Please press send to deliver it to our CRM inbox.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to prepare email. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/a90491cd-2aca-4ac5-9c64-daac596103e5.png" 
          alt="Evening luxury house background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-primary/10"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contact Real Estate Experts</span>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold mt-2 mb-4">
            Find Your Dream Property in <span className="text-gradient-animate">Kerala</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with Trivandrum's trusted real estate consultants for premium properties across Kerala
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="card-luxury p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a href="tel:+919447258746" className="block text-muted-foreground hover:text-primary transition-colors">
                        +91 94472 58746 (Mobile)
                      </a>
                      <a href="tel:+914712080461" className="block text-muted-foreground hover:text-primary transition-colors">
                        0471 2080461 (Landline)
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="card-luxury p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Addresses</h3>
                    <div className="space-y-1">
                      <a href="mailto:info@realestateworldkerala.com" className="block text-muted-foreground hover:text-primary transition-colors">
                        info@realestateworldkerala.com
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="card-luxury p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Office Location</h3>
                    <p className="text-muted-foreground">
                      Real Estate World Kerala<br />
                      Trivandrum, Kerala 695001<br />
                      Near Technopark, God's Own Country
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="card-luxury p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick WhatsApp */}
              <Button 
                className="w-full btn-luxury flex items-center gap-2"
                onClick={() => window.open('https://wa.me/919447258746', '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                Quick WhatsApp Chat
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-luxury p-8">
              <h3 className="text-2xl font-luxury font-bold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="bg-card/50 border-border/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="bg-card/50 border-border/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="bg-card/50 border-border/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="propertyType">Property Type</Label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-card/50 border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select property type</option>
                      <option value="Residential House">Residential House</option>
                      <option value="Villa">Villa</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Land/Plot">Land/Plot</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Investment">Investment Property</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="e.g., ₹50 Lakhs - ₹1 Crore"
                    className="bg-card/50 border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your property requirements..."
                    rows={5}
                    required
                    className="bg-card/50 border-border/50"
                  />
                </div>

                <Button type="submit" className="w-full btn-luxury text-lg py-6">
                  Send Message & Connect on WhatsApp
                </Button>
              </form>

              <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Note:</strong> Your enquiry opens in your email app addressed to our CRM inbox (info@realestateworldkerala.com).
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16">
          <Card className="card-luxury p-8">
            <h3 className="text-2xl font-luxury font-bold mb-6 text-center">Visit Our Office in Trivandrum</h3>
            <div className="w-full h-96 rounded-lg overflow-hidden border border-border/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125718.43863435812!2d76.8344!3d8.5241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Real Estate World Kerala Office Location in Trivandrum"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-muted-foreground">
                Located in the heart of Trivandrum, Kerala - easily accessible from Technopark, Kazhakoottam, and other major areas
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;