'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { guestAlbumUrl } from '../lib/links';

export default function GallerySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="max-w-6xl mx-auto"
    >
      <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center rounded-[2.75rem] bg-white/10 backdrop-blur-3xl border border-white/15 shadow-[0_25px_65px_rgba(0,0,0,0.35)] overflow-hidden">
        <div className="relative h-full min-h-[26rem] order-2 lg:order-1">
          <Image
            src="/wedding-together.JPG"
            alt="Vidhi and Sanjeev laughing together"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Gallery Entry</p>
            <p className="font-serif text-2xl">The smiles we keep replaying</p>
            <p className="text-white/80 text-sm">
              Dive inside to relive every candid sparkle and slow dance.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2 p-8 sm:p-10 space-y-6 text-center lg:text-left">
          <p className="text-gold font-script text-xl">Your photo story awaits</p>
          <h2 className="font-serif text-white text-3xl sm:text-4xl">
            The full gallery is ready for you.
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed">
            From haldi to baraat to wedding vows, the entire set is curated in one place. Browse,
            download your favorites, and share them with the people who made them unforgettable.
          </p>
          <div>
            <Link
              href={guestAlbumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-semibold
                         bg-gradient-to-r from-[#d4af37] via-[#f2d16b] to-[#d4af37]
                         text-[#3a2a18] shadow-[0_12px_30px_rgba(0,0,0,0.35)]
                         hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)]
                         transition-all duration-300 hover:-translate-y-0.5"
            >
              View Gallery
              <span aria-hidden className="text-2xl">↗</span>
            </Link>
          </div>
          <p className="text-white/65 text-sm">
            Password-free. Download originals in just a couple of taps.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

