import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Fish, 
  Globe, 
  Award,
  Linkedin,
  Facebook,
  Instagram
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" }
  ];

  const productCategories = [
    "Yellowfin Tuna",
    "Mahi Mahi", 
    "Cuttle Fish",
    "Squid",
    "Crab & Shrimp",
    "Mackerel Varieties"
  ];

  const certifications = [
    "EU Approval",
    "FDA Registration", 
    "HACCP Certified",
    "ISO Standards"
  ];

  return (
    <footer className="bg-gradient-deep text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-2xl font-bold">AL-MANWARI</div>
              </div>
              <p className="text-background/80 mb-6 leading-relaxed">
                Leading frozen seafood exporter from Oman, delivering premium quality 
                products to global markets with EU and FDA certifications.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-background/80 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Products</h3>
              <ul className="space-y-3">
                {productCategories.map((product, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Fish className="h-4 w-4 text-accent" />
                    <span className="text-background/80">{product}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Certifications */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div className="text-background/80 text-sm">
                    P.O. Box 327, P.C 124<br />
                    Rusayl Industrial Estate<br />
                    Sultanate of Oman
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-background/80">+968 9551 1144</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-background/80">+968 9450 0977</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-background/80">info@almanwari.com</span>
                </div>
              </div>

              <h4 className="font-semibold mb-3">Certifications</h4>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-accent" />
                    <span className="text-background/80 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 Al Manwari International LLC. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-background/60">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Global Seafood Exporter</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>EU & FDA Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;