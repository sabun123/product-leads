import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

export function HoverCard({ children, className = '' }: HoverCardProps) {
  return (
    <motion.div
      className={`group relative ${className}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"
        style={{ zIndex: 0 }}
      />
      <div className="relative bg-secondary/50 p-8 rounded-lg backdrop-blur-sm border border-border group-hover:border-primary/50 transition-colors duration-500">
        {children}
      </div>
    </motion.div>
  );
}