'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { uploadPhotosUrl } from '../lib/links';

export default function MemoryCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="max-w-6xl mx-auto"
    >
      <div className="grid gap-8 lg:gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center rounded-[2.75rem] bg-white/10 backdrop-blur-3xl border border-white/15 shadow-[0_25px_65px_rgba(0,0,0,0.35)] overflow-hidden">
        <div className="relative h-full min-h-[24rem]">
          <Image
            src="/vidhi-entry.JPG"
            alt="Vidhi making her graceful entry"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Your lens matters</p>
            <p className="font-serif text-2xl">Vidhi’s entrance through your eyes</p>
            <p className="text-white/80 text-sm">
              Share the frames you captured so everyone can experience that gasp again.
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-10 space-y-6 text-center lg:text-left">
          <p className="text-gold font-script text-xl">Upload the memories you caught</p>
          <h3 className="font-serif text-white text-3xl sm:text-4xl">
            If you clicked it, we&apos;d love to see it.
          </h3>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed">
            Phone snippets, film scans, goofy BTS, heartfelt selfies—drop them all into our shared
            folder so we can weave them into the story.
          </p>
          <Link
            href={uploadPhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-semibold
                       border border-white/60 text-white hover:text-black
                       bg-transparent hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Upload Your Photos
            <span aria-hidden className="text-2xl">⬆</span>
          </Link>
          <p className="text-white/65 text-sm">
            Drag-and-drop works great. Feel free to add captions or little notes!
          </p>
        </div>
      </div>
    </motion.section>
  );
}

