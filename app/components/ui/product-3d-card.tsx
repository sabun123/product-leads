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
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={false}
    >
      {children}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1))',
          mixBlendMode: 'overlay',
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 70%)',
          mixBlendMode: 'overlay',
        }}
      />
    </motion.div>
  );
}