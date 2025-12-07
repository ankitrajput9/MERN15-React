import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Login from '../components/Login';
import Register from '../components/Register';

const AuthLayout = () => {

  const [toggle, setToggle] = useState(true)
  return (
    <div>
      {toggle?  <Login setToggle={setToggle} />:<Register setToggle={setToggle}/>}
     
      
      {/* <Outlet /> */}
    </div>
  );
}

export default AuthLayout;
