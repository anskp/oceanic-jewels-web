import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ProductShowcase from "@/components/ui/product-showcase";
import CompanyOverview from "@/components/ui/company-overview";
import Footer from "@/components/ui/footer";
import LottieBackground from "@/components/animations/LottieBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <LottieBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <ProductShowcase />
          <CompanyOverview />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
