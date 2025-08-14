import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Waves, Fish } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElements from "@/components/animations/FloatingElements";
import TypewriterText from "@/components/animations/TypewriterText";
import heroImage from "@/assets/hero-seafood.jpg";

const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroImage}
            alt="Premium fresh seafood from Oman"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-deep/80" />
        
        {/* Floating decorative elements */}
        <FloatingElements className="absolute top-20 left-10" intensity="subtle">
          <Waves className="h-12 w-12 text-accent/30" />
        </FloatingElements>
        <FloatingElements className="absolute top-40 right-20" intensity="medium" direction="horizontal">
          <Fish className="h-8 w-8 text-primary/20" />
        </FloatingElements>
        <FloatingElements className="absolute bottom-32 left-20" intensity="subtle" direction="both">
          <Waves className="h-10 w-10 text-accent/20" />
        </FloatingElements>
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-background"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge variant="outline" className="border-background/30 text-background mb-6 shadow-ocean">
            Premium Seafood Exporter
          </Badge>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <img 
            src="/images/df2b36a8-f65c-443d-825c-f28ffb9ea614.png" 
            alt="Al Manwari International Branding" 
            className="h-20 mx-auto mb-6 drop-shadow-2xl"
          />
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Premium 
            <span className="block">
              <TypewriterText 
                text={["Frozen Seafood", "Ocean Delicacies", "Marine Excellence"]}
                className="bg-gradient-seafoam bg-clip-text text-transparent"
                speed={100}
                loop={true}
              />
            </span>
            <span className="block mt-2">from Oman</span>
          </h1>
        </motion.div>

        <ScrollReveal direction="up" delay={0.6}>
          <p className="text-xl lg:text-2xl text-background/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Delivering the finest frozen seafood from Oman's pristine waters to global markets. 
            EU approved, FDA registered, and committed to sustainable fishing practices.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 shadow-float">
                <Link to="/products" className="flex items-center space-x-2">
                  <span>Explore Our Products</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="lg" className="border-background text-background hover:bg-background/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Stats with animation */}
        <ScrollReveal direction="up" delay={1.0}>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-background/20"
            variants={containerVariants}
          >
            {[
              { value: "25+", label: "Years Experience" },
              { value: "50+", label: "Countries Served" },
              { value: "100%", label: "Quality Assured" },
              { value: "1000+", label: "Happy Clients" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center cursor-pointer"
              >
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-background/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </motion.div>

      {/* Scroll indicator with animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-background/60 rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;