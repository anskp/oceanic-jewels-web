import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface LottieBackgroundProps {
  className?: string;
}

// Loads the lottie from public path. Use absolute positioning to cover the entire page.
const LottieBackground = ({ className = "" }: LottieBackgroundProps) => {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [error, setError] = useState<string | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    let mounted = true;
    console.log("🔄 Loading Fish Animation...");
    
    fetch("/lottie/Fish Animation.json")
      .then((r) => {
        console.log("📡 Response status:", r.status);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json) => {
        console.log("✅ Fish Animation loaded successfully!");
        if (mounted) setAnimationData(json);
      })
      .catch((err) => {
        console.error("❌ Failed to load Fish Animation:", err);
        if (mounted) setError(err.message);
      });
    
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 ${className}`}>
      {/* Fallback background */}
      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-30"></div>
      
      {/* Show loading state */}
      {!animationData && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-blue-600 text-lg font-bold bg-white/80 px-4 py-2 rounded-lg">
            🐟 Loading Fish Animation...
          </div>
        </div>
      )}
      
      {/* Show error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-red-600 text-lg font-bold bg-white/80 px-4 py-2 rounded-lg">
            ❌ Failed to load: {error}
          </div>
        </div>
      )}
      
      {/* Show animation if loaded */}
      {animationData && (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          autoplay
          loop
          style={{ 
            width: "100%", 
            height: "100%", 
            opacity: 0.3,
            position: "absolute",
            top: 0,
            left: 0
          }}
        />
      )}
    </div>
  );
};

export default LottieBackground;


