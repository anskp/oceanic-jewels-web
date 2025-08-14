import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Globe, Truck, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-seafood.jpg";

const HeroSection = () => {
  const features = [
    { icon: Globe, text: "EU & FDA Approved" },
    { icon: Truck, text: "Global Export" },
    { icon: Award, text: "Premium Quality" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium seafood products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-deep/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 animate-fade-up">
            <CheckCircle className="h-4 w-4 text-accent" />
            <span className="text-sm text-background font-medium">
              EU & FDA Certified Seafood Exporter
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-background mb-6 animate-fade-up [animation-delay:200ms]">
            Premium
            <span className="block bg-gradient-seafoam bg-clip-text text-transparent">
              Frozen Seafood
            </span>
            <span className="block text-background/90">from Oman</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-background/80 mb-8 max-w-2xl leading-relaxed animate-fade-up [animation-delay:400ms]">
            Al Manwari International LLC delivers the finest frozen seafood products 
            from the pristine waters of Oman to markets worldwide. EU and FDA approved 
            for your peace of mind.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-10 animate-fade-up [animation-delay:600ms]">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-background/90">
                <feature.icon className="h-5 w-5 text-accent" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:800ms]">
            <Button 
              asChild 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90 shadow-float"
            >
              <Link to="/products">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-background/30 text-background hover:bg-background/10 backdrop-blur-md"
            >
              <Link to="/contact">
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-float">
        <div className="bg-background/10 backdrop-blur-md rounded-2xl p-6 text-background">
          <div className="text-3xl font-bold">25+</div>
          <div className="text-sm opacity-80">Years Experience</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;