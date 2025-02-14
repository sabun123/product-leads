import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        className="h-1 w-24 bg-secondary rounded-full overflow-hidden origin-left"
      >
        <motion.div
          className="h-full bg-primary"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.div>
      <div className="text-sm text-muted-foreground">Scroll</div>
    </motion.div>
  );
}