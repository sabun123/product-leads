import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlurImageProps extends Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'> {
  src: string;
  alt: string;
}

export default function BlurImage({ src, alt, className = '', ...props }: BlurImageProps) {
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
        {...props}
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