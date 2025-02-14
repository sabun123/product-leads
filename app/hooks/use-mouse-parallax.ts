import { useState, useEffect } from 'react';

interface UseMouseParallaxProps {
  strength?: number;
}

export function useMouseParallax({ strength = 0.1 }: UseMouseParallaxProps = {}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Convert mouse position to normalized coordinates (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      setPosition({
        x: x * strength * 100,
        y: y * strength * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [strength]);

  return {
    x: position.x,
    y: position.y,
    transformStyle: `translate3d(${position.x}px, ${position.y}px, 0)`
  };
}