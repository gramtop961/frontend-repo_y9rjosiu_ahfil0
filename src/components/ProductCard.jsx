import React from 'react';

const ProductCard = ({ title, price, image, onClick, tag }) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex w-full flex-col overflow-hidden rounded-2xl bg-white p-4 shadow hover:shadow-lg transition text-left"
    >
      {tag && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          {tag}
        </span>
      )}
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-base font-bold text-gray-800">{price}</p>
      </div>
      <p className="mt-1 text-sm text-gray-500">Tap to preview the animation</p>
    </button>
  );
};

export default ProductCard;
