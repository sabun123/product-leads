import { motion } from 'framer-motion';
import { useState } from 'react';
import BlurImage from './blur-image';

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function FloatingImage({ src, alt, className = '', priority = false }: FloatingImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden glass-effect ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        y: isHovered ? -10 : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
    >
      <div className="relative aspect-[16/9]">
        <BlurImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
        animate={{
          opacity: isHovered ? 0.6 : 0.8
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Ambient light effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0"
        animate={{
          opacity: isHovered ? 0.3 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}