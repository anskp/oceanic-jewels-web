import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Fish, Waves, Snowflake } from "lucide-react";
import { Link } from "react-router-dom";
import productsImage from "@/assets/products-showcase.jpg";

const ProductShowcase = () => {
  const productCategories = [
    {
      name: "Yellowfin Tuna",
      description: "Premium frozen tuna loins, nuggets, and portions",
      icon: Fish,
      products: ["Loins", "Nuggets", "Portions"]
    },
    {
      name: "Mahi Mahi",
      description: "Fresh frozen mahi mahi fillets",
      icon: Waves,
      products: ["Fillets", "Steaks", "Portions"]
    },
    {
      name: "Shellfish",
      description: "Premium frozen crab, shrimp, and octopus",
      icon: Snowflake,
      products: ["Crab", "Shrimp", "Octopus"]
    }
  ];

  const allProducts = [
    "Yellowfin Tuna", "Mahi Mahi", "Cuttle Fish", "Squid", 
    "Indian Mackerel", "Horse Mackerel", "Crab", "Hilsa",
    "Barracuda", "Amberjack", "Octopus", "Shrimp",
    "Yellow Tail Scad", "Sardine", "Chub Mackerel", "Japanese Thread Fin Bream"
  ];

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Premium
            <span className="block bg-gradient-ocean bg-clip-text text-transparent">
              Seafood Products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From the pristine waters of Oman, we source and process the finest seafood 
            products for global markets. All products are frozen to maintain peak freshness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <img
              src={productsImage}
              alt="Premium seafood products showcase"
              className="rounded-3xl shadow-deep w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-ocean/20 rounded-3xl" />
          </div>

          {/* Categories */}
          <div className="space-y-6">
            {productCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-ocean bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-ocean rounded-xl p-3">
                      <category.icon className="h-6 w-6 text-background" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.products.map((product, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Complete Product List */}
        <div className="bg-card rounded-3xl p-8 shadow-float">
          <h3 className="text-2xl font-bold text-center mb-8">Complete Product Range</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {allProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-3 bg-secondary/50 rounded-xl"
              >
                <Fish className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{product}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="shadow-ocean">
              <Link to="/products">
                View Detailed Catalog
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;