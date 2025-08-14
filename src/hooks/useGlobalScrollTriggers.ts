import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Globally applies GSAP ScrollTrigger reveals across the page.
 * - Animates all <section> elements to fade+slide on enter
 * - Also animates any element with `.gs-reveal` class
 * Call it whenever the route changes so triggers refresh per page.
 */
export const useGlobalScrollTriggers = (refreshKey: string) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Kill old triggers on route change
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const sections = gsap.utils.toArray<HTMLElement>("main section");
    sections.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    const reveals = gsap.utils.toArray<HTMLElement>(".gs-reveal");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });

    // Refresh after layout changes
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [refreshKey]);
};


