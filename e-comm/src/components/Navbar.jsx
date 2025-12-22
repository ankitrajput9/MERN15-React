import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="h-[10%] flex justify-between px-10 items-center border-b-2 border-gray-300">

      {/* Logo */}
      <NavLink to="/home" className="text-2xl font-bold">
        Logo
      </NavLink>

      {/* Nav Links */}
      <div className="flex gap-6 text-lg font-semibold">
        {["home", "users", "cart"].map((path) => (
          <NavLink
            key={path}
            to={`/${path}`}
            className={({ isActive }) =>
              `relative pb-1 transition-all duration-300
               ${isActive ? "text-black" : "text-gray-600"}`
            }
          >
            {({ isActive }) => (
              <>
                {path.charAt(0).toUpperCase() + path.slice(1)}
                {/* Underline */}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-black transition-all duration-300
                  ${isActive ? "w-full" : "w-0"}`}
                />
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Right Section */}
      <div>users</div>
    </div>
  );
};

export default Navbar;
