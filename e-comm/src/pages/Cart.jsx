import React from 'react';
import { useSelector } from 'react-redux';
import Cartproduct from '../components/cards/Cartproduct';

const Cart = () => {
 let {cart}= useSelector((state)=>state.cart)
 
  return (
    <div className='flex flex-wrap justify-center gap-10 '>

{cart.length === 0 ?<h1 className='text-red-500 font-semibold  text-2xl' >Cart is Empty</h1>:cart.map((data)=>{
        return (
          <Cartproduct key={data.id} data={data}/>
        )
      })}
      
    </div>
  );
}

export default Cart;
