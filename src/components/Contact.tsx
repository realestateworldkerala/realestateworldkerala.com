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
    
    // Simulate form submission to Zoho Bigin CRM
    try {
      // Here you would integrate with Zoho Bigin API
      console.log('Form data:', formData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        budget: '',
        message: ''
      });
      
      // Also send WhatsApp message
      const whatsappMessage = `Hi! I'm interested in Real Estate World services.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProperty Type: ${formData.propertyType}\nBudget: ${formData.budget}\nMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/919447258746?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold mt-2 mb-4">
            Get in <span className="text-gradient-animate">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to find your dream property? Contact our expert team for personalized assistance and guidance
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
                      <a href="mailto:mcmmurali2@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors">
                        mcmmurali2@gmail.com
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
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      Trivandrum, Kerala<br />
                      God's Own Country
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
                  <strong>Note:</strong> Your message will be forwarded to our CRM system and you'll also be connected via WhatsApp for instant assistance.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;