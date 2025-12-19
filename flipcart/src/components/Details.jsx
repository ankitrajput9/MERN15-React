import React from 'react';

const Details = ({product}) => {
  return (
    <div className="max-w-60%] h-[60%] mx-auto flex bg-white/30 rounded-2xl shadow-lg p-5">
      {/* Product Image */}
      <img
        src={product.image}
        alt="Product"
        className="w-[60%] h-full object-contain p-8 object-center rounded-xl"
      />

      {/* Product Details */}
     <div>
         <h2 className="text-xl font-semibold mt-4">{product.title}</h2>

      <p className="text-gray-600 mt-2">
{product.description}
      </p>

      {/* Price */}
      <div className="mt-3">
        <p className="text-2xl font-bold text-green-600">${product.price}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5">
        <button className="w-1/2 bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-xl font-medium transition">
          Add to Cart
        </button>

        <button className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium transition">
          Buy Now
        </button>
      </div>
     </div>
    </div>
  );
}

export default Details;
