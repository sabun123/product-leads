import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const springConfig = { mass: 0.1, stiffness: 100, damping: 20 };
  
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "50%"]),
    springConfig
  );
  
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0]),
    springConfig
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0.8]),
    springConfig
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative will-change-transform"
    >
      <motion.div style={{ y, scale }}>
        {children}
      </motion.div>
    </motion.div>
  );
}