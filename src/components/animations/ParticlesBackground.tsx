import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

interface ParticlesBackgroundProps {
  className?: string;
}

const ParticlesBackground = ({ className = "" }: ParticlesBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles-hero"
      className={className}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: false, mode: "push" },
            onHover: { enable: false, mode: "repulse" },
            resize: { enable: true },
          },
          modes: {
            push: { quantity: 2 },
            repulse: { distance: 120, duration: 0.3 },
          },
        },
        particles: {
          color: { value: ["#1e40af", "#0ea5e9", "#06b6d4"] },
          links: {
            color: "#0ea5e9",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.6,
            straight: false,
          },
          number: {
            value: 40,
          },
          opacity: {
            value: 0.15,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;