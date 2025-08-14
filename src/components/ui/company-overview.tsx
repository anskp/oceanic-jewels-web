import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Ship, Award, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import companyImage from "@/assets/company-vessel.jpg";

const CompanyOverview = () => {
  const stats = [
    { icon: Ship, value: "25+", label: "Years Experience" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Award, value: "100%", label: "Certified Products" },
    { icon: Users, value: "1000+", label: "Satisfied Clients" }
  ];

  const certifications = [
    "EU Approval",
    "FDA Registration",
    "HACCP Certified",
    "ISO Standards"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                About Al Manwari International
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Leading Seafood
                <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                  Exporter from Oman
                </span>
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Established in the heart of Oman's industrial sector, Al Manwari International LLC 
                has been a trusted name in frozen seafood exports for over two decades. Based in 
                Rusayl Industrial Estate, we combine traditional fishing expertise with modern 
                processing technology.
              </p>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Our Location</div>
                  <div className="text-muted-foreground">
                    P.O. Box 327, P.C 124<br />
                    Rusayl Industrial Estate, Road No. 12<br />
                    Sultanate of Oman
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Building className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Our Mission</div>
                  <div className="text-muted-foreground">
                    To deliver the finest frozen seafood products from Oman's pristine waters 
                    to global markets while maintaining the highest standards of quality and safety.
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Certifications & Approvals</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="bg-secondary-accent/20">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            <Button asChild size="lg" className="shadow-ocean">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src={companyImage}
                alt="Al Manwari International operations"
                className="rounded-3xl shadow-deep w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-ocean/10 rounded-3xl" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-ocean bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-ocean rounded-xl p-3 w-fit mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-background" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;