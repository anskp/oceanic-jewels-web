import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ProductShowcase from "@/components/ui/product-showcase";
import CompanyOverview from "@/components/ui/company-overview";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProductShowcase />
        <CompanyOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
