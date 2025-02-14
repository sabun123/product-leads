import { useMousePosition } from '@/app/hooks/use-mouse-parallax';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PerspectiveContainerProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function PerspectiveContainer({ 
  children, 
  className = '', 
  intensity = 20 
}: PerspectiveContainerProps) {
  const { mouseX, mouseY } = useMousePosition();

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        transform: `
          rotateY(${mouseX * intensity}deg)
          rotateX(${-mouseY * intensity}deg)
        `
      }}
    >
      {children}
    </motion.div>
  );
}