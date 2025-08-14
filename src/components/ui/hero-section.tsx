import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Waves, Fish } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElements from "@/components/animations/FloatingElements";
import ParticlesBackground from "@/components/animations/ParticlesBackground";
import TypewriterText from "@/components/animations/TypewriterText";
import LottieBadge from "../animations/LottieBadge";
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

  // Pinned stats grid reveal
  const statsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!statsRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        end: "bottom 40%",
        onEnter: () => gsap.to(statsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }),
      });
    }, statsRef);
    return () => ctx.revert();
  }, []);

  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { y: 0, scale: 1.1 },
        {
          y: -150,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
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
        <ParticlesBackground className="absolute inset-0 pointer-events-none" />
        
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
          {/* Removed Premium Seafood Exporter badge */}
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
              <Button asChild variant="outline" size="lg" className="border-background text-background bg-transparent hover:bg-background/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Stats with animation */}
        <ScrollReveal direction="up" delay={1.0}>
          <motion.div 
            ref={statsRef}
            initial={{ opacity: 0, y: 40 }}
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
                <div className="text-foreground">
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