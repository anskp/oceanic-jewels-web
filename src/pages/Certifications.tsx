import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Shield, CheckCircle, Globe, FileText, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "FDA Registration",
      authority: "U.S. Food and Drug Administration",
      registrationNo: "18511105596",
      ufiNo: "558353815",
      status: "Active",
      description: "Registered with the U.S. FDA pursuant to the Federal Food Drug and Cosmetic Act and Bioterrorism Act of 2002.",
      validUntil: "December 31, 2025",
      icon: Shield
    },
    {
      title: "EU Approval",
      authority: "European Union",
      registrationNo: "EU-OM-001",
      status: "Approved",
      description: "European Union approval for seafood processing and export to EU member countries.",
      validUntil: "Ongoing",
      icon: Globe
    },
    {
      title: "HACCP Certification",
      authority: "International HACCP Alliance",
      registrationNo: "HACCP-2024-OM",
      status: "Certified",
      description: "Hazard Analysis and Critical Control Points certification ensuring food safety management.",
      validUntil: "March 2025",
      icon: CheckCircle
    },
    {
      title: "ISO 22000:2018",
      authority: "International Organization for Standardization",
      registrationNo: "ISO22000-OM-2024",
      status: "Certified",
      description: "Food Safety Management System certification ensuring safe food production.",
      validUntil: "June 2025",
      icon: Award
    }
  ];

  const complianceAreas = [
    {
      title: "Food Safety",
      items: ["HACCP Implementation", "Temperature Control", "Sanitation Protocols", "Personnel Hygiene"]
    },
    {
      title: "Quality Assurance",
      items: ["Raw Material Inspection", "Process Monitoring", "Final Product Testing", "Documentation Control"]
    },
    {
      title: "Traceability",
      items: ["Source Identification", "Processing Records", "Distribution Tracking", "Recall Procedures"]
    },
    {
      title: "Export Compliance",
      items: ["Export Health Certificates", "Customs Documentation", "International Standards", "Market Requirements"]
    }
  ];

  const qualityStandards = [
    "Microbiological Testing",
    "Chemical Analysis", 
    "Heavy Metal Screening",
    "Antibiotic Residue Testing",
    "Histamine Analysis",
    "Moisture Content Testing",
    "Temperature Monitoring",
    "Packaging Integrity"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-ocean text-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="border-background/30 text-background mb-6">
              Quality Assured
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Certifications &
              <span className="block text-accent">Compliance</span>
            </h1>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              Our commitment to quality and safety is validated through comprehensive 
              certifications and compliance with international standards.
            </p>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-20 bg-gradient-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Certifications</h2>
              <p className="text-xl text-muted-foreground">
                Recognized by leading international authorities for quality and safety.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-0 shadow-deep">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-ocean rounded-xl p-3">
                          <cert.icon className="h-6 w-6 text-background" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">{cert.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{cert.authority}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={cert.status === 'Active' ? 'default' : 'secondary'}
                        className={cert.status === 'Active' ? 'bg-green-500' : ''}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{cert.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-semibold text-foreground">Registration No.</div>
                          <div className="text-muted-foreground">{cert.registrationNo}</div>
                        </div>
                        {cert.ufiNo && (
                          <div>
                            <div className="font-semibold text-foreground">UFI Number</div>
                            <div className="text-muted-foreground">{cert.ufiNo}</div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-semibold">Valid Until:</span>
                        <span className="text-muted-foreground">{cert.validUntil}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Compliance Framework</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive approach to food safety and quality management.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceAreas.map((area, index) => (
                <Card key={index} className="border-0 shadow-ocean h-full">
                  <CardContent className="p-6">
                    <div className="bg-gradient-ocean rounded-xl p-3 w-fit mb-4">
                      <FileText className="h-6 w-6 text-background" />
                    </div>
                    <h3 className="text-lg font-bold mb-4">{area.title}</h3>
                    <ul className="space-y-2">
                      {area.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FDA Certificate Display */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Official Documentation</h2>
              <p className="text-xl text-muted-foreground">
                View our official FDA Certificate of Registration.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-deep overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="/images/568c37b6-153c-447f-958a-2dce4be201f8.png" 
                    alt="FDA Certificate of Registration for Al Manwari International LLC" 
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quality Testing */}
        <section className="py-20 bg-gradient-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Quality Testing Standards</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Every batch of our seafood products undergoes rigorous testing to ensure 
                  compliance with international food safety standards. Our state-of-the-art 
                  laboratory facilities and partnerships with certified testing agencies 
                  guarantee product integrity.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {qualityStandards.map((standard, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="border-0 shadow-deep">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-ocean rounded-xl p-4 w-fit mx-auto mb-6">
                    <Award className="h-12 w-12 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Quality Guarantee</h3>
                  <p className="text-muted-foreground mb-6">
                    We stand behind every product with our comprehensive quality assurance program 
                    and international certifications.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Testing Rate</span>
                      <span className="text-primary font-bold">100%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Compliance Score</span>
                      <span className="text-primary font-bold">99.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Customer Satisfaction</span>
                      <span className="text-primary font-bold">98.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ocean text-background">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Verified Quality Documentation
            </h2>
            <p className="text-xl text-background/80 mb-8">
              Request copies of our certificates and quality documentation for your records.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="shadow-float">
                Download Certificates
              </Button>
              <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10">
                Quality Assurance Guide
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Certifications;