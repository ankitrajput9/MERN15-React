import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from '../components/ProductCard';

const Product = () => {
  let product = useLoaderData()
  return (
    <div className='p-2 h-full w-full flex gap-1 flex-wrap '>
   {product.map((elem)=>{
    return <ProductCard key={elem.id } elem={elem} />
   })}
    </div>
  );
}

export default Product;
