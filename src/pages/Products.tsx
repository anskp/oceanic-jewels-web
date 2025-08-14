import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Fish, Snowflake, Package, Truck, Award } from "lucide-react";
import tunaImage from "@/assets/tuna-product.jpg";
import productsHero from "@/assets/products-showcase.jpg";

const Products = () => {
  const productCategories = [
    {
      title: "Frozen Yellowfin Tuna",
      description: "Premium frozen yellowfin tuna in export-ready cuts.",
      products: ["Loin", "Nuggets", "Portions"],
      features: ["Premium Grade", "Flash Frozen", "Vacuum Packed"],
      image: "/images/yellowfishtuna.webp",
    },
    {
      title: "Frozen Mahi Mahi",
      description: "Fresh frozen mahi mahi with excellent texture and taste.",
      products: ["Fillets", "Steaks", "Portions"],
      features: ["Fresh Frozen", "Skinless Options", "Export Quality"],
      image: "/images/mahimahi.webp",
    },
    {
      title: "Frozen Cuttle Fish",
      description: "Cleaned cuttle fish suitable for multiple preparations.",
      products: ["Whole Cleaned", "Fillets"],
      features: ["Fresh Frozen", "Quality Assured", "Export Ready"],
      image: "/images/cuttlefish.png",
    },
    {
      title: "Frozen Squid",
      description: "Premium squid packed for consistent quality.",
      products: ["Tubes", "Rings", "Whole Cleaned"],
      features: ["Cleaned", "Fresh Frozen", "Export Quality"],
      image: "/images/squid.jpg",
    },
    {
      title: "Frozen Indian Mackerel",
      description: "Popular mackerel variety from Oman's waters.",
      products: ["Whole", "Fillets"],
      features: ["Fresh Frozen", "Premium Grade"],
      image: "/images/Indian mackerel.png",
    },
    {
      title: "Frozen Horse Mackerel",
      description: "High-quality horse mackerel, carefully processed.",
      products: ["Whole", "Fillets"],
      features: ["Fresh Frozen", "Export Ready"],
      image: "/images/Indian mackerel.png",
    },
    {
      title: "Frozen Crab",
      description: "Crab processed and frozen to preserve flavor.",
      products: ["Whole", "Sections"],
      features: ["Premium Selection", "Fresh Frozen"],
      image: "/images/crab.jpg",
    },
    {
      title: "Frozen Hilsa",
      description: "Hilsa with authentic taste and texture.",
      products: ["Whole", "Steaks"],
      features: ["Fresh Frozen", "Quality Assured"],
      image: "/images/hilsa.jpeg",
    },
    {
      title: "Frozen Barracuda",
      description: "Firm, flavorful barracuda, ideal for grilling and curries.",
      products: ["Whole", "Steaks"],
      features: ["Fresh Frozen", "Export Quality"],
      image: "/images/barracuda.png",
    },
    {
      title: "Frozen Amberjack",
      description: "Versatile amberjack, frozen to lock in freshness.",
      products: ["Whole", "Steaks"],
      features: ["Fresh Frozen", "Premium Grade"],
      image: "/images/amberjack.jpg",
    },
    {
      title: "Frozen Octopus",
      description: "Tender octopus processed for excellent texture.",
      products: ["Whole Cleaned", "Tentacles"],
      features: ["Fresh Frozen", "Export Ready"],
      image: "/images/frozen-octopus.jpg",
    },
    {
      title: "Frozen Shrimp",
      description: "Shrimp available in multiple sizes and formats.",
      products: ["Head-On", "Headless", "Peeled"],
      features: ["Fresh Frozen", "Quality Assured"],
      image: "/images/Frozen-Shrimp.jpg",
    },
    {
      title: "Frozen Yellow Tail Scad",
      description: "Yellow tail scad, a popular choice across markets.",
      products: ["Whole"],
      features: ["Fresh Frozen", "Export Quality"],
      image: "/images/yellow tail scad.jpg",
    },
    {
      title: "Frozen Sardine",
      description: "Omani sardines known for rich flavor.",
      products: ["Whole"],
      features: ["Fresh Frozen", "Premium Grade"],
      image: "/images/satine.jpg",
    },
    {
      title: "Frozen Chub Mackerel",
      description: "Quality chub mackerel for diverse cuisines.",
      products: ["Whole", "Fillets"],
      features: ["Fresh Frozen", "Export Ready"],
      image: "/images/club mackarel.jpg",
    },
    {
      title: "Frozen Japanese Thread Fin Bream",
      description: "Delicate thread fin bream with excellent taste.",
      products: ["Whole", "Fillets"],
      features: ["Fresh Frozen", "Quality Assured"],
      image: "/images/Frozen Japanese thread fin bream.jpg",
    },
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
        {/* Hero Section with Background Image */}
        <section className="relative py-20 overflow-hidden text-background">
          <div className="absolute inset-0">
            <img
              src={productsHero}
              alt="Premium seafood product showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-deep/80" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Premium Seafood
              <span className="block text-accent">Product Catalog</span>
            </h1>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              Discover our comprehensive range of frozen seafood products, sourced from the pristine waters of Oman and processed to the highest international standards.
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
                        src={encodeURI(category.image)}
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