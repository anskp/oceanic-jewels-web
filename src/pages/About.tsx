import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Target, Globe, Award, Ship, Anchor, Fish } from "lucide-react";
import companyImage from "@/assets/company-vessel.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in seafood processing and handling, ensuring every product meets international quality requirements."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our products reach markets across continents, bringing the finest Omani seafood to customers worldwide."
    },
    {
      icon: Ship,
      title: "Sustainable Practices",
      description: "We are committed to sustainable fishing practices that preserve marine ecosystems for future generations."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building long-term relationships with our clients through reliable service and consistent quality delivery."
    }
  ];

  const milestones = [
    { year: "1999", event: "Company Founded", description: "Al Manwari International LLC established in Rusayl Industrial Estate" },
    { year: "2005", event: "EU Approval", description: "Received European Union approval for seafood exports" },
    { year: "2010", event: "FDA Registration", description: "Obtained FDA registration for US market access" },
    { year: "2015", event: "Facility Expansion", description: "Expanded processing capacity and cold storage facilities" },
    { year: "2020", event: "Global Presence", description: "Established distribution network across 50+ countries" },
    { year: "2024", event: "Innovation Focus", description: "Implementing advanced processing and traceability systems" }
  ];

  const team = [
    {
      role: "Executive Leadership",
      description: "Experienced professionals with decades of seafood industry expertise",
      count: "5+"
    },
    {
      role: "Quality Assurance",
      description: "Certified specialists ensuring compliance with international standards",
      count: "12+"
    },
    {
      role: "Operations Team",
      description: "Skilled workforce managing processing, packaging, and logistics",
      count: "50+"
    },
    {
      role: "Supply Chain",
      description: "Network of trusted fishermen and suppliers across Oman",
      count: "100+"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={companyImage}
              alt="Al Manwari International operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-deep/80" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="border-background/30 text-background mb-6">
              Established 1999
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-background mb-6">
              About Al Manwari
              <span className="block text-accent">International LLC</span>
            </h1>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              For over two decades, we have been Oman's premier seafood exporter, 
              delivering exceptional quality frozen seafood products to markets worldwide.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-gradient-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Al Manwari International LLC was founded with a vision to share the pristine seafood 
                    of Oman's waters with the world. Located in the heart of Rusayl Industrial Estate, 
                    our state-of-the-art facilities combine traditional fishing knowledge with modern 
                    processing technology.
                  </p>
                  <p>
                    Our commitment to quality begins at the source - working directly with local fishermen 
                    and implementing strict quality control measures throughout our supply chain. Every 
                    product that bears our name meets the highest international standards for safety, 
                    quality, and sustainability.
                  </p>
                  <p>
                    Today, we proudly serve customers across six continents, delivering not just seafood, 
                    but a promise of excellence that has defined our company for over 25 years.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center border-0 shadow-ocean">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">25+</div>
                    <div className="text-sm text-muted-foreground">Years in Business</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 shadow-ocean">
                  <CardContent className="p-6">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">50+</div>
                    <div className="text-sm text-muted-foreground">Countries Served</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 shadow-ocean">
                  <CardContent className="p-6">
                    <Fish className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">16</div>
                    <div className="text-sm text-muted-foreground">Product Categories</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 shadow-ocean">
                  <CardContent className="p-6">
                    <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Certified Products</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do, from sourcing to delivery.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 shadow-ocean h-full">
                  <CardContent className="p-6">
                    <div className="bg-gradient-ocean rounded-xl p-4 w-fit mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-background" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-gradient-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in our company's growth and development.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="border-0 shadow-ocean">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-gradient-ocean text-background rounded-lg px-3 py-1 text-sm font-bold">
                        {milestone.year}
                      </div>
                      <Anchor className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A dedicated workforce committed to delivering excellence in every aspect of our operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {team.map((department, index) => (
                <Card key={index} className="border-0 shadow-ocean">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{department.role}</h3>
                      <Badge variant="secondary" className="bg-gradient-ocean text-background">
                        {department.count} Members
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{department.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;