import React from 'react';

import {Link} from 'react-router'
const Navbar = () => {
  return (
    <div style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        // backgroundColor:'red'

    }}>
      <h2>LOGO</h2>
      <div style={{
        display:"flex",
        gap:'10px',
        fontSize:'20px',
        textDecorationStyle:'none'

      }} >
        <Link to='/'>Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>

      </div>
    </div>
  );
}

export default Navbar;
