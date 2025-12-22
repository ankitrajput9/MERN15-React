import React from "react";

const MAX_TITLE_WORDS = 5;
const MAX_DESC_WORDS = 15;

const ProductCard = ({ data}) => {
  const trimWords = (text, maxWords) => {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };

  return (
    <div className=" flex items-center justify-between  px-4">

      {/* Card */}
      <div className="w-75 h-full bg-yellow-300/10 rounded-2xl shadow-md p-4">

        {/* Image */}
        <div className="w-full h-40 flex items-center justify-center mb-4">
          <img
            src={data.image}
            alt={data.title}
            className="h-full object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-sm font-semibold text-gray-800 leading-tight">
          {trimWords(data.title, MAX_TITLE_WORDS)}
        </h2>

        {/* Description */}
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          {trimWords(data.description, MAX_DESC_WORDS)}
        </p>

        {/* Price */}
        <div className="mt-4 text-lg font-semibold text-gray-900">
          ${data.price}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-black text-white text-xs py-2 rounded-lg hover:bg-gray-900 transition">
            Buy Now
          </button>
          <button className="flex-1 bg-green-400 text-white text-xs py-2 rounded-lg hover:bg-green-500 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
