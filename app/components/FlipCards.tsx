'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';

export default function FlipCards() {
  const [flippedCards, setFlippedCards] = useState<boolean[]>([]);

  const events = [
    {
      id: 1,
      date: '7th November',
      emoji: '🪔',
      title: 'Haldi & Sangeet',
      time: 'Morning & Evening',
      venue: 'Whispering Willows',
      mapsUrl: 'https://maps.app.goo.gl/gLTbBe8BqmcyjYgK6',
      details:
        'Haldi in the morning, followed by music, dance and celebration at Sangeet in the evening.',
    },
    {
      id: 2,
      date: '8th November',
      emoji: '💍',
      title: 'Wedding Ceremony',
      time: 'Evening',
      venue: 'Sharon Resort',
      mapsUrl: 'https://maps.app.goo.gl/BEpBdpDC4uffB6id6',
      details:
        'The wedding ceremony and reception. Join us as we begin our journey together.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-md sm:max-w-2xl md:max-w-3xl mx-auto w-full"
    >
      {events.map((event, i) => {
        const isFlipped = flippedCards[i] || false;

        return (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            className="relative h-64 sm:h-72 perspective-1000 select-none"
          >
            <button
              type="button"
              aria-label={`${event.title} details`}
              aria-expanded={isFlipped}
              onClick={() => {
                const newFlippedCards = [...flippedCards];
                newFlippedCards[i] = !isFlipped;
                setFlippedCards(newFlippedCards);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  const newFlippedCards = [...flippedCards];
                  newFlippedCards[i] = !isFlipped;
                  setFlippedCards(newFlippedCards);
                }
              }}
              className="relative w-full h-full transform-style-preserve-3d duration-700 ease-out rounded-[1.5rem] outline-none focus:ring-2 focus:ring-gold/60"
              style={{ transform: `rotateY(${isFlipped ? 180 : 0}deg)` }}
            >
              {/* FRONT — glass, luxe */}
              <div className="absolute inset-0 backface-hidden rounded-[1.5rem] overflow-hidden">
                <div className="h-full w-full bg-white/12 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <div className="absolute inset-0 pointer-events-none rounded-[1.5rem] ring-1 ring-white/10" />
                  <div className="h-full w-full p-6 sm:p-8 text-center">
                    <div className="text-4xl sm:text-5xl mb-2">{event.emoji}</div>
                    <h3 className="font-serif text-white text-xl sm:text-2xl mb-1.5 tracking-wide">
                      {event.date}
                    </h3>
                    <h4 className="font-sans text-gold text-base sm:text-lg mb-2">
                      {event.title}
                    </h4>
                    <p className="text-white/85 text-xs sm:text-sm">{event.time}</p>
                    <div className="mt-4 inline-flex items-center justify-center gap-2 text-gold text-sm font-medium">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="mt-5 text-white/65 text-[11px] sm:text-xs">
                      Tap to see details
                    </div>
                  </div>
                </div>
              </div>

              {/* BACK — same glass style, with details */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[1.5rem] overflow-hidden">
                <div className="h-full w-full bg-white/15 backdrop-blur-xl border border-white/20 shadow-[0_12px_34px_rgba(0,0,0,0.28)]">
                  <div className="absolute inset-0 pointer-events-none rounded-[1.5rem] ring-1 ring-white/10" />
                  <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                    <div className="text-center">
                      <h3 className="font-serif text-white text-2xl sm:text-3xl mb-3">
                        {event.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {event.details}
                      </p>

                      <div className="mt-5 inline-flex items-center justify-center gap-2 text-gold text-base font-medium">
                        <MapPinIcon className="w-5 h-5" />
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    <a
                      href={event.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-full text-white font-medium text-sm sm:text-base
                                 bg-gradient-to-r from-[#d4af37] to-[#f6e27a]
                                 shadow-[0_8px_18px_rgba(0,0,0,0.25)]
                                 active:scale-[0.98] transition-transform"
                    >
                      <MapPinIcon className="w-5 h-5" />
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>
            </button>
          </motion.div>
        );
      })}
    </motion.div>
  );
}