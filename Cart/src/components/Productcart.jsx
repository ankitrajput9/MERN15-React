import React from 'react';

const Productcart = ({setCartItem,elem}) => {

    const handleCart=()=>{

        setCartItem((prev)=>[...prev,elem])
    }
  return (
   <div className="h-100 flex flex-col gap-2 border border-gray-300 p-5 shadow-md rounded-xl">
      <div className="h-60">
        <img className="h-full w-full" src={elem.img_url} alt="image here" />
      </div>
      <h1 className="font-bold text-xl">{elem.product_name}</h1>
      <h1>{elem.price}</h1>
      <div className="flex justify-between">
        <button className="py-2 px-6 bg-green-700 text-white rounded cursor-pointer">
          Buy now
        </button>
        <button
    onClick={handleCart}
          className="py-2 px-6 bg-blue-700 text-white rounded cursor-pointer"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Productcart;
