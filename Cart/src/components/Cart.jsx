import React from 'react';
import Productcart from './ProductCArt';

const Cart = ({CartItem}) => {
  return (
    <div className='h-[90vh] w-full flex bg-white   absolute top-15 '>
{CartItem.map((elem)=>{
return <Productcart elem={elem} />
})}
    </div>
  );
  
}

export default Cart;
