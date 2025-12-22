import React from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../../feature/cartSlice";
import { toast } from "react-toastify";

const MAX_TITLE_WORDS = 5;
const MAX_DESC_WORDS = 15;

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const trimWords = (text, maxWords) => {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };

  const handleClick = () => {
    dispatch(addtocart(data));
    toast.success("Add to cart");
  };

  return (
    <div className="flex items-center justify-center px-4">

      {/* Card */}
      <div
        className="
          w-75 min-h-105
          bg-yellow-300/30
          rounded-2xl shadow-md p-4
          flex flex-col
        "
      >

        {/* Image */}
        <div className="w-full h-40 flex items-center justify-center mb-4">
          <img
            src={data.image}
            alt={data.title}
            className="h-full object-contain"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-sm font-semibold text-gray-800 leading-tight">
            {trimWords(data.title, MAX_TITLE_WORDS)}
          </h2>

          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            {trimWords(data.description, MAX_DESC_WORDS)}
          </p>

          <div className="mt-4 text-lg font-semibold text-gray-900">
            ${data.price}
          </div>
        </div>

        {/* Buttons (ALWAYS AT BOTTOM) */}
        <div className="flex gap-2 mt-auto pt-4">
          <button className="flex-1 bg-black text-white text-xs py-2 rounded-lg hover:bg-gray-900 transition">
            Buy Now
          </button>

          <button
            onClick={handleClick}
            className="flex-1 bg-green-400 text-white text-xs py-2 rounded-lg hover:bg-green-500 transition"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
