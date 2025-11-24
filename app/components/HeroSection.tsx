// app/components/HeroSection.tsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="max-w-6xl mx-auto"
    >
      <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center lg:text-left space-y-6"
        >
          <p className="text-gold font-script text-lg sm:text-xl tracking-[0.3em] uppercase">
            thank you
          </p>
          <h1 className="font-serif leading-tight text-4xl sm:text-5xl md:text-6xl text-white">
            You filled our wedding with the warmest blessings.
          </h1>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed">
            Every hug, every dance, and every whispered wish still echoes through our hearts. Your
            presence wrapped the weekend in love, and we can’t stop replaying the glow you brought
            to both days.
          </p>
          <div className="pt-2">
            <p className="text-white/70 text-xs tracking-[0.4em] uppercase">With love</p>
            <p className="font-serif text-white text-3xl sm:text-4xl">Singla &amp; Gupta Family</p>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="relative rounded-[2.75rem] overflow-hidden border border-white/15 shadow-[0_25px_65px_rgba(0,0,0,0.45)]"
        >
          <div className="relative aspect-[4/5]">
            <Image
              src="/wedding-family.JPG"
              alt="Vidhi and Sanjeev surrounded by family"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">Family blessings</p>
              <p className="font-serif text-2xl">Sharon Resort · November 8, 2025</p>
              <p className="text-white/80 text-sm">
                We’ll be grateful forever for every soul in this frame and beyond.
              </p>
            </figcaption>
          </div>
        </motion.figure>
      </div>
    </motion.section>
  );
}