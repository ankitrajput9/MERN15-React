import React from 'react';

const Navbar = ({setIsCartOpen}) => {
  return (
    <div className='flex justify-between h-15 bg-gray-300  p-5'>
      <div className='flex justify-center items-center'>
      <h1 className='text-2xl font-bold ' >LOGO</h1>
      </div>
      <div className='flex gap-6' >
        <button onClick={()=>setIsCartOpen((prev)=>!prev)} className='text-lg font-medium text-blue-800 cursor-pointer'>Cart</button>
        <button className='text-lg font-medium text-blue-800 cursor-pointer' >Services</button>
      </div>
    </div>
  );
}

export default Navbar;
