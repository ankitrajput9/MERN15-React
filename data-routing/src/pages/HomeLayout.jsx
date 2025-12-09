import React from 'react';
import { NavLink, Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <div>
  <div>
    <h1>Layout...</h1>
    <NavLink   to="/">Home</NavLink>
    <NavLink  to="/about">About</NavLink>

  </div>

    <div>
        <Outlet/>
    </div>
    </div>
  );
}

export default HomeLayout;
