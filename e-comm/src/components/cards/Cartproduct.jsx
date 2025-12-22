import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, removefromcart } from "../../feature/cartSlice";
import { toast } from "react-toastify";

const MAX_TITLE_WORDS = 5;
const MAX_DESC_WORDS = 15;

const Cartproduct = ({ data }) => {
  const dispatch = useDispatch();
  const {cart}=useSelector((state)=>state.cart)

  const trimWords = (text, maxWords) => {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };

const isInCart= cart.some((val)=>val.id === data.id)

// const remove = cart.filter((val)=>val.id === data.id)

  const handleAdd = () => {
    if(isInCart) return;
    dispatch(addtocart(data));
    toast.success("Added to cart");
  };

  const handleRemove=()=>{
   
        dispatch(removefromcart(data.id))
  
  }



  return (
    <div className="flex items-center justify-between shadow-lg px-4">

      <div className="w-75 h-full bg-yellow-300/30 rounded-2xl shadow-md p-4 flex flex-col">

        {/* Image */}
        <div className="w-full  flex  justify-between mb-4">
          <img
            src={data.image}
            alt={data.title}
            className="h-40  object-contain"
          />
          <h1 onClick={handleRemove} className="bg-red-800 active:scale-95 h-7 w-7 text-center rounded-lg cursor-pointer text-white font-bold" >X</h1>
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
        <div className="flex gap-2 mt-auto ">
          <button
            className="flex-1 bg-black text-white text-xs py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Buy Now
          </button>

          <button
            onClick={handleAdd}
            className="flex-1 bg-green-400 text-white text-xs py-2 rounded-lg hover:bg-green-500 transition"
          >
            Add to Cart
          </button>

         
        </div>
      </div>
    </div>
  );
};

export default Cartproduct;
