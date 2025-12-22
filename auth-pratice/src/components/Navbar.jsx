import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='p-4 bg-red-200 flex justify-between items-center  ' >
      <h1 className='font-bold text-2xl'>Logo</h1>
      <div className='flex gap-4 text-lg font-semibold'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
      </div>
      <p>users</p>
    </div>
  );
}

export default Navbar;
