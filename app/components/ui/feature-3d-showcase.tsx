'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Product3DCard } from './product-3d-card';
import BlurImage from './blur-image';

interface Feature3DShowcaseProps {
  image: string;
  title: string;
  description: string;
  features: string[];
  direction?: 'left' | 'right';
}

export function Feature3DShowcase({
  image,
  title,
  description,
  features,
  direction = 'left'
}: Feature3DShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    direction === 'left' 
      ? [-100, 0, -100]
      : [100, 0, 100]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    direction === 'left'
      ? [-10, 0, -10]
      : [10, 0, 10]
  );

  return (
    <motion.div
      ref={containerRef}
      className="relative grid md:grid-cols-2 gap-8 items-center"
      style={{ opacity }}
    >
      {/* Image Section */}
      <div className={`${direction === 'right' ? 'md:order-last' : ''}`}>
        <Product3DCard 
          className="w-full"
          intensity={10}
          perspective={2000}
        >
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden glass-effect">
            <BlurImage
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            
            {/* Ambient Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
            </div>
          </div>
        </Product3DCard>
      </div>

      {/* Content Section */}
      <motion.div style={{ x }}>
        <h3 className="text-3xl font-bold mb-4 text-gradient">{title}</h3>
        <p className="text-lg text-muted-foreground mb-8">{description}</p>
        
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: direction === 'left' ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}