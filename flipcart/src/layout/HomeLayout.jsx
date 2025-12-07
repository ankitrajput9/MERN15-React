import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';

const HomeLayout = () => {
 let pathname = useLocation()
  

  return (
    <div className='min-h-screen w-full flex bg-gray-200 '>
      <div className='  p-4 bg-gray-100'>
        <aside className=' sticky w-52 flex flex-col gap-5 px-5'   >
          <h1 className=' font-bold '>
            <img src="/Logo2.png" alt="" />
          </h1>
          <NavLink className={({ isActive }) => isActive && pathname === "/"  ? "text-yellow-300 font-semibold" : "text-black  font-semibold"}
            to='/home' >
            Home
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "text-black font-semibold "} 
          to='/home/users' >
            Users
            </NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "text-black font-semibold "} 
          to='/home/products' >
            Products
            </NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "text-black font-semibold "} 
          to='/home/cart' >
            Cart
            </NavLink>
        </aside>
      </div>
      <div className='min-h-screen w-full'>
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
