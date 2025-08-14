import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  className = ""
}: ScrollRevealProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const getFinalPosition = () => {
    return { x: 0, y: 0, opacity: 1 };
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={inView ? getFinalPosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;