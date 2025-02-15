import { useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface Use3DEffectProps {
  intensity?: number;
  perspective?: number;
  scale?: number;
  animationDuration?: number;
}

export function use3DEffect({
  intensity = 20,
  perspective = 1000,
  scale = 1.05,
  animationDuration = 150
}: Use3DEffectProps = {}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isHovered) return;

    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    
    // Calculate relative mouse position within the element
    const x = (e.clientX - rect.left) / element.offsetWidth;
    const y = (e.clientY - rect.top) / element.offsetHeight;
    
    // Center the coordinates (-.5 to +.5 range)
    setMousePosition({
      x: x - 0.5,
      y: y - 0.5
    });
  };

  const transform = isHovered
    ? `
      perspective(${perspective}px)
      scale3d(${scale}, ${scale}, ${scale})
      rotateX(${mousePosition.y * intensity * -1}deg)
      rotateY(${mousePosition.x * intensity}deg)
    `
    : `
      perspective(${perspective}px)
      scale3d(1, 1, 1)
      rotateX(0deg)
      rotateY(0deg)
    `;

  const transition = `
    transform ${animationDuration}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)
  `;

  return {
    transform,
    transition,
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => {
      setIsHovered(false);
      setMousePosition({ x: 0, y: 0 });
    }
  };
}