import React from 'react';

const ProductCard = ({data}) => {
  return (
    <div className='h-90 w-70 shadow-2xl p-2  rounded-lg flex flex-col' >

        <img className='h-[60%] object-contain' src={data.image} alt="" />
      <h1 className='text-center text-lg font-semibold '>{data.title}</h1>
    </div>
  );
}

export default ProductCard;
