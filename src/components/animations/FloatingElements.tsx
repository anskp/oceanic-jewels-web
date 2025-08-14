import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementsProps {
  children: ReactNode;
  intensity?: 'subtle' | 'medium' | 'strong';
  direction?: 'vertical' | 'horizontal' | 'both';
  className?: string;
}

const FloatingElements = ({
  children,
  intensity = 'medium',
  direction = 'vertical',
  className = ""
}: FloatingElementsProps) => {
  const getIntensityValue = () => {
    switch (intensity) {
      case 'subtle':
        return 5;
      case 'medium':
        return 10;
      case 'strong':
        return 20;
      default:
        return 10;
    }
  };

  const getAnimation = () => {
    const value = getIntensityValue();
    
    switch (direction) {
      case 'vertical':
        return {
          y: [-value, value, -value],
        };
      case 'horizontal':
        return {
          x: [-value, value, -value],
        };
      case 'both':
        return {
          x: [-value, value, -value],
          y: [-value/2, value/2, -value/2],
        };
      default:
        return {
          y: [-value, value, -value],
        };
    }
  };

  return (
    <motion.div
      animate={getAnimation()}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElements;