import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='h-[10%] flex justify-between px-10 items-center border-b-2 border-gray-300'>
  <NavLink to="/home" className='text-2xl font-bold'>Logo</NavLink>
     <div className='flex gap-5 text-lg font-semibold'>
      <NavLink  to="/home">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
     </div>
     <div>users</div>
    </div>
  );
}

export default Navbar;
