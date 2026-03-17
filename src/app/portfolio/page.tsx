"use client";

import { useState } from "react";
import Image from "next/image";

// Portfolio categories with placeholder images (replace with real photos)
const portfolioData = {
  weddings: {
    title: "Weddings",
    description: "Your special day, captured forever",
    images: Array.from({ length: 6 }, (_, i) => ({
      src: `https://picsum.photos/seed/wedding${i}/800/1000`,
      alt: `Wedding photo ${i + 1}`,
    })),
  },
  "pre-graduation": {
    title: "Pre-Graduation",
    description: "The journey before the milestone",
    images: Array.from({ length: 6 }, (_, i) => ({
      src: `https://picsum.photos/seed/pregrad${i}/800/1000`,
      alt: `Pre-graduation photo ${i + 1}`,
    })),
  },
  graduations: {
    title: "Graduations",
    description: "Celebrating your achievement",
    images: Array.from({ length: 6 }, (_, i) => ({
      src: `https://picsum.photos/seed/grad${i}/800/1000`,
      alt: `Graduation photo ${i + 1}`,
    })),
  },
  events: {
    title: "Events",
    description: "Moments that bring people together",
    images: Array.from({ length: 6 }, (_, i) => ({
      src: `https://picsum.photos/seed/event${i}/800/1000`,
      alt: `Event photo ${i + 1}`,
    })),
  },
  babies: {
    title: "Babies",
    description: "Little ones, big memories",
    images: Array.from({ length: 6 }, (_, i) => ({
      src: `https://picsum.photos/seed/baby${i}/800/1000`,
      alt: `Baby photo ${i + 1}`,
    })),
  },
};

type CategoryKey = keyof typeof portfolioData;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("weddings");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = Object.entries(portfolioData) as [CategoryKey, typeof portfolioData[CategoryKey]][];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">
            Gallery
          </p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white mb-6">
            Portfolio
          </h1>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            A curated collection of moments from weddings, graduations,
            events, and everything in between.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(([key, data]) => (
              <button
                key={key}
                id={key}
                onClick={() => setActiveCategory(key)}
                className={`px-5 py-2.5 text-sm uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-[#d4a853] text-[#0a0a0a] font-semibold"
                    : "bg-[#1a1a1a] text-[#a0a0a0] border border-[#2a2a2a] hover:border-[#d4a853] hover:text-[#d4a853]"
                }`}
              >
                {data.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-['Playfair_Display'] text-2xl text-white">
              {portfolioData[activeCategory].title}
            </h2>
            <p className="text-[#a0a0a0] mt-2">
              {portfolioData[activeCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData[activeCategory].images.map((img, i) => (
              <div
                key={i}
                className="gallery-item relative aspect-[4/5] overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="lightbox-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-[#d4a853] transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage}
              alt="Enlarged photo"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
