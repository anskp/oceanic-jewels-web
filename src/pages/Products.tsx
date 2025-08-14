import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Fish, Snowflake, Package, Truck, Award } from "lucide-react";
import tunaImage from "@/assets/tuna-product.jpg";

const Products = () => {
  const productCategories = [
    {
      title: "Yellowfin Tuna",
      description: "Premium frozen yellowfin tuna in various cuts",
      products: ["Loins", "Nuggets", "Portions", "Steaks"],
      features: ["Premium Grade", "Flash Frozen", "Vacuum Packed"],
      image: tunaImage
    },
    {
      title: "Mahi Mahi",
      description: "Fresh frozen mahi mahi fillets and portions",
      products: ["Fillets", "Steaks", "Portions"],
      features: ["Fresh Frozen", "Skinless", "Boneless"],
      image: tunaImage
    },
    {
      title: "Cephalopods",
      description: "Premium squid, octopus and cuttle fish",
      products: ["Squid Tubes", "Octopus", "Cuttle Fish", "Squid Rings"],
      features: ["Cleaned", "Frozen", "Export Quality"],
      image: tunaImage
    },
    {
      title: "Mackerel Varieties",
      description: "Different species of premium mackerel",
      products: ["Indian Mackerel", "Horse Mackerel", "Chub Mackerel"],
      features: ["Whole Fish", "Fresh Frozen", "Premium Grade"],
      image: tunaImage
    },
    {
      title: "Shellfish",
      description: "Premium crabs and shrimp products",
      products: ["Mud Crab", "Swimming Crab", "Shrimp", "Prawns"],
      features: ["Live Frozen", "Cleaned", "Export Grade"],
      image: tunaImage
    },
    {
      title: "Other Species",
      description: "Additional premium seafood varieties",
      products: ["Hilsa", "Barracuda", "Amberjack", "Yellow Tail Scad", "Sardine", "Japanese Thread Fin Bream"],
      features: ["Fresh Frozen", "Quality Assured", "Export Ready"],
      image: tunaImage
    }
  ];

  const specifications = [
    { icon: Snowflake, title: "Temperature Control", description: "Maintained at -18°C throughout the supply chain" },
    { icon: Package, title: "Packaging", description: "Vacuum sealed and properly labeled for export" },
    { icon: Truck, title: "Logistics", description: "Temperature-controlled transportation worldwide" },
    { icon: Award, title: "Quality", description: "EU & FDA approved processing facilities" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-ocean text-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Premium Seafood
              <span className="block text-accent">Product Catalog</span>
            </h1>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              Discover our comprehensive range of frozen seafood products, 
              sourced from the pristine waters of Oman and processed to the highest international standards.
            </p>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Product Specifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specifications.map((spec, index) => (
                <Card key={index} className="text-center border-0 shadow-ocean">
                  <CardContent className="p-6">
                    <div className="bg-gradient-ocean rounded-xl p-3 w-fit mx-auto mb-4">
                      <spec.icon className="h-6 w-6 text-background" />
                    </div>
                    <h3 className="font-semibold mb-2">{spec.title}</h3>
                    <p className="text-sm text-muted-foreground">{spec.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-gradient-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Our Product Range</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {productCategories.map((category, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-deep">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center space-x-2 mb-2">
                          <Fish className="h-5 w-5 text-primary" />
                          <CardTitle className="text-xl">{category.title}</CardTitle>
                        </div>
                        <p className="text-muted-foreground">{category.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Available Products:</h4>
                            <div className="flex flex-wrap gap-2">
                              {category.products.map((product, idx) => (
                                <Badge key={idx} variant="secondary">
                                  {product}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Features:</h4>
                            <div className="flex flex-wrap gap-2">
                              {category.features.map((feature, idx) => (
                                <Badge key={idx} variant="outline" className="border-primary text-primary">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ocean text-background">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Source Premium Seafood?
            </h2>
            <p className="text-xl text-background/80 mb-8">
              Contact us for detailed product specifications, pricing, and minimum order quantities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="shadow-float">
                Request Product Catalog
              </Button>
              <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10">
                Get Quote
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;