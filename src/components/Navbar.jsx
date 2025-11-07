import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-white/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-gray-900">
          TrendVibe
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-gray-700 md:flex">
          <a href="#products" className="hover:text-gray-900">Products</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <a href="#products" className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black">
          Shop Now
        </a>
      </div>
    </header>
  );
};

export default Navbar;
