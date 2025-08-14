import { useEffect, useRef } from 'react';
import TypeIt from 'typeit';

interface TypewriterTextProps {
  text: string | string[];
  className?: string;
  speed?: number;
  startDelay?: number;
  loop?: boolean;
}

const TypewriterText = ({ 
  text, 
  className = "", 
  speed = 50, 
  startDelay = 0,
  loop = false 
}: TypewriterTextProps) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const instance = new TypeIt(elementRef.current, {
      strings: Array.isArray(text) ? text : [text],
      speed,
      startDelay,
      loop,
      cursor: true,
      cursorChar: '|',
      cursorSpeed: 1000,
      deleteSpeed: 30,
      breakLines: false,
      waitUntilVisible: true,
    });

    instance.go();

    return () => {
      instance.destroy();
    };
  }, [text, speed, startDelay, loop]);

  return <span ref={elementRef} className={className} />;
};

export default TypewriterText;