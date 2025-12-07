import React, { useContext } from 'react';
import { MyContext } from '../context/Context';

const ProductCard = ({elem}) => {
  let {setCartitem}=useContext(MyContext)

  let handleSubmit=()=>{
    setCartitem((prev)=>[...prev,elem])
  }
  return (
    <div>
        <div className='h-100 w-90  flex flex-col gap-5 shadow-2xl p-4 rounded-lg  overflow-hidden'>
      {/* <img className='h-1/2 w-full object-cover' src={elem.image} alt="" /> */}
      <div className={`h-1/2 w-full flex justify-center `} ><img className='h-full ' src={elem.image} alt="" /></div>
      <div className='flex flex-col gap-1 px-4 justify-center' >
        <h1 className='text-center text-xl font-bold'>{elem.title}</h1>
        <p className='font-semibold' >{elem.rating.rate} ⭐</p>
        <p className='font-semibold' >{elem.price}$</p>
        <div className='flex gap-3 justify-center'>
          <button className='bg-blue-200 py-2 px-3 rounded active:scale-95 cursor-pointer' >buy now </button>
          <button onClick={handleSubmit} className='bg-blue-200 py-2 px-3 rounded active:scale-95 cursor-pointer' >Add to cart</button>
        </div>
      </div>

     </div>
    </div>
  );
}

export default ProductCard;
