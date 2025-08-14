import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Building, 
  Send,
  MessageCircle,
  FileText,
  Truck
} from "lucide-react";
import contactHero from "@/assets/company-vessel.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+968 9551 1144", "+968 9450 0977"],
      description: "Available during business hours"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@almanwari.com", "sales@almanwari.com"],
      description: "For inquiries and orders"
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: ["P.O. Box 327, P.C 124", "Rusayl Industrial Estate, Road No. 12", "Sultanate of Oman"],
      description: "Visit our facilities"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Sunday - Thursday: 8:00 AM - 5:00 PM", "Saturday: 8:00 AM - 12:00 PM"],
      description: "Oman Standard Time (UTC+4)"
    }
  ];

  const inquiryTypes = [
    {
      icon: FileText,
      title: "Product Catalog",
      description: "Request detailed product specifications and pricing"
    },
    {
      icon: Truck,
      title: "Export Inquiry",
      description: "Shipping, logistics, and bulk order questions"
    },
    {
      icon: Building,
      title: "Partnership",
      description: "Distribution partnerships and business collaboration"
    },
    {
      icon: MessageCircle,
      title: "General Questions",
      description: "Any other questions about our company or services"
    }
  ];

  const officeFeatures = [
    "Cold Storage Facilities",
    "Quality Testing Laboratory", 
    "Processing Plant",
    "Export Documentation Center",
    "Customer Meeting Rooms",
    "Product Display Area"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative py-20 overflow-hidden text-background">
          <div className="absolute inset-0">
            <img
              src={contactHero}
              alt="Contact Al Manwari International"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-deep/80" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Contact
              <span className="block text-accent">Al Manwari International</span>
            </h1>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              Ready to discuss your seafood sourcing needs? Get in touch with our team for product inquiries, quotes, and partnership opportunities.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">
                Multiple ways to reach our team for all your seafood export needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-ocean h-full">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-ocean rounded-xl p-3 w-fit mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-background" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="text-sm font-medium text-foreground">
                          {detail}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Your first name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Your last name" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@company.com" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your company name" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Your phone number" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Your country" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="What's this about?" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements, quantities, and any specific questions..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full shadow-ocean">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Office Information */}
              <div className="space-y-8">
                <Card className="border-0 shadow-deep">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Building className="h-5 w-5 text-primary" />
                      <span>Our Facilities</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Our modern facilities in Rusayl Industrial Estate are equipped with 
                      state-of-the-art technology for seafood processing and quality control.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {officeFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-deep">
                  <CardHeader>
                    <CardTitle>Inquiry Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {inquiryTypes.map((type, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="bg-gradient-ocean rounded-lg p-2">
                            <type.icon className="h-4 w-4 text-background" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm">{type.title}</div>
                            <div className="text-xs text-muted-foreground">{type.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Map */}
                <Card className="border-0 shadow-deep">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Location Map
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-video w-full rounded-lg overflow-hidden">
                      <iframe
                        title="Al Manwari International LLC Location"
                        src="https://www.google.com/maps?q=Rusayl%20industrial%20estate%2C%20Road%20No.%2012%2C%20Rusayl%2C%20Oman&output=embed"
                        width="100%"
                        height="100%"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-4 text-sm text-muted-foreground">
                      <div>Al Manwari International LLC</div>
                      <div>P. O. Box 327, P. C 124</div>
                      <div>Rusayl Industrial Estate, Road No. 12</div>
                      <div>Rusayl, Sultanate of Oman</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Bar */}
        <section className="py-12 bg-gradient-ocean text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h3 className="text-xl font-bold mb-1">Need Immediate Assistance?</h3>
                <p className="text-background/80">Our sales team is ready to help with your requirements.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-float"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +968 9551 1144
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-background text-background hover:bg-background/10"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;