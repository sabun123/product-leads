import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PerspectiveContainerProps {
  children: ReactNode;
  depth?: number;
  className?: string;
}

export function PerspectiveContainer({
  children,
  depth = 50,
  className = ''
}: PerspectiveContainerProps) {
  return (
    <div className={`perspective-2000 ${className}`}>
      <div 
        className="relative preserve-3d"
        style={{
          transformStyle: 'preserve-3d',
          transform: `translateZ(${-depth}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}