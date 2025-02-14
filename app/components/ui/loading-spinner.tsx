import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative"
      >
        <div className="w-16 h-16">
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full rounded-full border-4 border-primary/30 border-t-primary"
          />
        </div>
        <div className="mt-4 text-muted-foreground text-sm">Loading...</div>
      </motion.div>
    </div>
  );
}