import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  Facebook,
  Youtube,
  Linkedin,
  CheckCircle,
  Home,
  TrendingUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    location: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. We'll contact you within 2 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      budget: "",
      location: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 94472 58746", "0471 2080461"],
      action: "tel:+919447258746"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@realestateworldkerala.com", "mcmmurali2@gmail.com"],
      action: "mailto:info@realestateworldkerala.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kerala, India", "Serving All Districts"],
      action: "#"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sun: 10:00 AM - 6:00 PM"],
      action: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/share/16pMPQr7ks",
      color: "text-blue-600"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/919447258746",
      color: "text-green-600"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/@realestateworldkerala",
      color: "text-red-600"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/posts/murali-c-m",
      color: "text-blue-700"
    }
  ];

  const propertyTypes = [
    "Buy Residential",
    "Buy Commercial", 
    "Sell Property",
    "Rent Property",
    "Investment Advice",
    "Property Valuation"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-golden/10 text-golden px-4 py-2 rounded-full text-sm font-medium mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-primary mb-6">
            Start Your Real Estate
            <span className="text-golden"> Journey Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to buy, sell, or invest in Kerala properties? Our expert team is here 
            to guide you through every step of your real estate journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-golden rounded-lg flex items-center justify-center mr-4">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-luxury font-bold text-primary">Send Us a Message</h3>
                    <p className="text-muted-foreground">We'll respond within 2 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="propertyType">I'm Interested In</Label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background text-foreground"
                      >
                        <option value="">Select an option</option>
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        placeholder="e.g., ₹50 Lac - ₹1 Cr"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Preferred Location in Kerala</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Thiruvananthapuram, Kochi, Munnar"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements, timeline, or any specific questions..."
                      rows={4}
                      className="mt-2"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="luxury" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-golden rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm mb-1">
                            {info.action !== "#" ? (
                              <a href={info.action} className="hover:text-golden transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="border-border bg-gradient-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Button variant="whatsapp" className="w-full justify-start" asChild>
                    <a href="https://wa.me/919447258746" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Chat
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="tel:+919447258746">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="mailto:info@realestateworldkerala.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-4">Follow Us</h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      <social.icon className={`w-5 h-5 ${social.color}`} />
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <Card className="border-border bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-golden mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Trusted by 90+ Families</h4>
                <p className="text-silver-light text-sm mb-4">
                  4.9★ rated service with guaranteed transparency
                </p>
                <div className="flex justify-center space-x-4 text-xs">
                  <Badge variant="secondary" className="bg-golden/20 text-golden">
                    10+ Years
                  </Badge>
                  <Badge variant="secondary" className="bg-golden/20 text-golden">
                    Legal Compliant
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;