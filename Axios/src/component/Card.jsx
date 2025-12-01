import React from 'react';

const Card = ({elem}) => {
  return (
    <div className='w-[22%] h-[70%] flex flex-col border p-4 rounded-2xl object-cover flex-wrap gap-6'>
      <img  className=' h-[50%] w-full  ' src={elem.image} alt="" />
      <div className='w-full'>
        <h1 className='text-lg font-semibold text-gray-700' >{elem.title}</h1>
        <p className='text-md font-semibold'>{elem.price}</p>  
      </div>
      <div className='flex justify-between'>
        <button className='py-2 px-6 bg-yellow-600 rounded cursor-pointer active:scale-95' >Add</button>
        <button className='py-2 px-6 bg-green-600 rounded cursor-pointer active:scale-95' >Buy</button>

      </div>
    </div>
  );
}

export default Card;
