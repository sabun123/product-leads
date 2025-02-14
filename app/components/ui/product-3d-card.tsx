import React from 'react';
import { motion } from 'framer-motion';
import { use3DEffect } from '../../hooks/use-3d-effect';

interface Product3DCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  scale?: number;
  perspective?: number;
  animationDuration?: number;
}

export function Product3DCard({
  children,
  className = '',
  intensity = 15,
  scale = 1.05,
  perspective = 1000,
  animationDuration = 150
}: Product3DCardProps) {
  const {
    transform,
    transition,
    onMouseMove,
    onMouseEnter,
    onMouseLeave
  } = use3DEffect({
    intensity,
    scale,
    perspective,
    animationDuration
  });

  return (
    <motion.div
      className={`relative preserve-3d backface-hidden ${className}`}
      style={{
        transform,
        transition,
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={false}
    >
      {children}
    </motion.div>
  );
}