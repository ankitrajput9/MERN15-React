import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { MyContext } from '../context/Context';

const Cart = () => {
  let{cartitem}=useContext(MyContext)
  console.log(cartitem)
  return (
    <div className='p-2 h-full w-full flex gap-1 flex-wrap'>
    {cartitem.map((elem)=>{
return  <ProductCard key={elem.id } elem={elem} />
    })}
     
    </div>
  );
}

export default Cart;
