import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

// Lightweight checkmark/star burst animation from LottieFiles CDN (public/demo)
// If you want to self-host later, we can move it to /public and import JSON.
const REMOTE_ANIM_URL = "https://assets7.lottiefiles.com/packages/lf20_xlkxtmul.json";
const LOCAL_ANIM_PATH = "/lottie/badge.json";

const LottieBadge = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        // Try local first
        const local = await fetch(LOCAL_ANIM_PATH);
        if (local.ok) {
          const json = await local.json();
          if (isMounted && json) {
            setAnimationData(json);
            return;
          }
        }
      } catch {}

      try {
        // Fallback to remote CDN
        const remote = await fetch(REMOTE_ANIM_URL);
        if (remote.ok) {
          const json = await remote.json();
          if (isMounted) setAnimationData(json);
        }
      } catch {}
    };

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    // Play a short loop on mount then stop to avoid distraction
    const id = setTimeout(() => {
      lottieRef.current?.stop();
    }, 2500);
    return () => clearTimeout(id);
  }, []);

  if (!animationData) return null;

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      autoplay
      loop
      style={{ width: 28, height: 28 }}
    />
  );
};

export default LottieBadge;


