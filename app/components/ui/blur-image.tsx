import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  height?: number;
  width?: number;
  fill?: boolean;
  priority?: boolean;
}

export default function BlurImage({ src, alt, className = '', height, width, fill = false, priority = false }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl' : 'scale-100 blur-0'}
        `}
        onLoadingComplete={() => setLoading(false)}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
      />
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-secondary/20 animate-pulse"
          />
        )}
      </AnimatePresence>
    </div>
  );
}