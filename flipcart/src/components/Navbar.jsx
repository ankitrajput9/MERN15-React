import React from 'react';

const Navbar = () => {
  return (
    <div className='h-14  flex justify-between items-center ' >
       <h1 className=' font-bold '>
            <img className='  h-19' src="/Logo2.png" alt="" />
          </h1>
     <div className='flex p-5 items-center gap-10'>
         <div  >
        <input type="text" placeholder='Search for products, brands and more' className='w-96 h-8 rounded-l-md border border-gray-400 px-2'/>
        <button className='h-8 bg-blue-500 text-white rounded-r-md px-4 cursor-pointer '>Search</button>
      </div>
      <div className='flex gap-5'>
        <button className=' cursor-pointer  py-1 px-4 bg-blue-500 rounded-lg text-white  '>Login</button>
        <button className=' cursor-pointer ' >More</button>
      </div>
     </div>
    </div>
  );
}

export default Navbar;
