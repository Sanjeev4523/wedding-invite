// app/page.tsx
'use client';
import Image from 'next/image';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import MemoryCTA from './components/MemoryCTA';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/wedding-chairs.png"
          alt="Wedding chairs background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <main className="relative z-10">
        <section className="min-h-[90svh] flex items-center justify-center px-4 sm:px-6 py-16">
          <HeroSection />
        </section>

        <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <GallerySection />
        </section>

        <section className="px-4 sm:px-6 pb-[max(4rem,env(safe-area-inset-bottom))]">
          <MemoryCTA />
        </section>
      </main>
    </div>
  );
}