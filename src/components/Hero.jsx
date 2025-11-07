import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft gradient overlays for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <span className="rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
          Viral Finds • Fresh Drops
        </span>
        <h1 className="mt-4 font-extrabold tracking-tight text-4xl sm:text-6xl">
          Playful Gadgets. Serious Wow.
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">
          Experience your next favorite product with immersive, delightful animations.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a href="#products" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow hover:shadow-md transition">
            Shop Trending
          </a>
          <a href="#about" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
