// app/components/HeroSection.tsx
'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="text-center px-4"
    >
      {/* Date */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-white/90 font-script text-base sm:text-lg md:text-2xl tracking-wide mb-4 md:mb-6"
      >
        November 7–8, 2025
      </motion.div>

      {/* Names */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-1 md:space-y-2 mb-6 md:mb-8"
      >
        <h1 className="font-serif leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white">
          <span className="block">Vidhi</span>
          <span className="text-gold font-script text-3xl sm:text-4xl md:text-5xl mx-3 md:mx-4">
            &
          </span>
          <span className="block">Sanjeev</span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-white/85 font-sans text-sm sm:text-base md:text-lg max-w-[28rem] sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed"
      >
        Together with our families, we invite you to celebrate our special day
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="w-16 md:w-24 h-px bg-gold mx-auto mt-6 md:mt-8"
      />
    </motion.div>
  );
}