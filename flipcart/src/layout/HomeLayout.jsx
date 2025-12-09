import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
 let pathname = useLocation()
  

  return (

    <div className='flex flex-col' >
      <div>

      <Navbar/> 
      </div>
    <div className='min-h-screen w-full flex  bg-gray-200 '>
      <div className='  p-4 bg-blue-600'>
        <aside className=' sticky w-42 flex flex-col gap-5 px-5 h-screen'   >
          <NavLink className={({ isActive }) => isActive && pathname === "/"  ? "text-yellow-300 font-semibold" : "text-white  font-semibold"}
            to='/home' >
            Home
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "text-white font-semibold "} 
          to='/home/users' >
            Users
            </NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "text-white font-semibold "} 
          to='/home/products' >
            Products
            </NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "text-white font-semibold "} 
          to='/home/cart' >
            Cart
            </NavLink>
        </aside>
      </div>
      <div className='min-h-screen w-full'>
        <Outlet />
      </div>
    </div>
              </div>
  );
}

export default HomeLayout;
