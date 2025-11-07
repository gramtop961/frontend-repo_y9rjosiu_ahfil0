import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import BlenderAnimation from './components/BlenderAnimation';
import WiperAnimation from './components/WiperAnimation';

const App = () => {
  const [showBlender, setShowBlender] = useState(false);
  const [showWiper, setShowWiper] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      {/* Trending Products */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
            <p className="mt-1 text-gray-500">Click a product to see a playful animation preview.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ProductCard
            title="Portable Blender"
            price="$39.99"
            tag="Hot"
            image="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1200&auto=format&fit=crop"
            onClick={() => setShowBlender(true)}
          />

          <ProductCard
            title="Portable Wiper"
            price="$24.99"
            tag="Trending"
            image="https://images.unsplash.com/photo-1493236296276-d17357e28869?q=80&w=1200&auto=format&fit=crop"
            onClick={() => setShowWiper(true)}
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-white p-8 shadow">
          <h3 className="text-2xl font-bold">Why Shop with Us?</h3>
          <p className="mt-2 text-gray-600">
            We curate viral, high-quality gadgets and showcase them with immersive animations so you can
            feel the product before it ships. Secure checkout, fast shipping, and 24/7 support.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} TrendVibe. All rights reserved.</p>
        </div>
      </footer>

      {/* Modals */}
      <BlenderAnimation open={showBlender} onClose={() => setShowBlender(false)} />
      <WiperAnimation open={showWiper} onClose={() => setShowWiper(false)} />
    </div>
  );
};

export default App;
