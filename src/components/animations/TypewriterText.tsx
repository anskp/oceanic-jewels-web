import { useEffect, useState } from 'react';

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
  loop = true 
}: TypewriterTextProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const strings = Array.isArray(text) ? text : [text];
  const currentString = strings[currentIndex];

  useEffect(() => {
    // Initial delay
    if (startDelay > 0) {
      const delayTimer = setTimeout(() => {
        setCurrentText('');
      }, startDelay);
      return () => clearTimeout(delayTimer);
    }
  }, [startDelay]);

  useEffect(() => {
    if (!currentString) return;

    const typeSpeed = isDeleting ? speed / 2 : speed;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.slice(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentString.slice(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next string
          setIsDeleting(false);
          if (loop) {
            setCurrentIndex((prev) => (prev + 1) % strings.length);
          } else if (currentIndex < strings.length - 1) {
            setCurrentIndex(currentIndex + 1);
          }
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentString, isDeleting, speed, strings, currentIndex, loop]);

  // Reset when text prop changes
  useEffect(() => {
    setCurrentText('');
    setCurrentIndex(0);
    setIsDeleting(false);
  }, [text]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;