import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import { useSelector } from 'react-redux';


const AuthLayout = () => {
let {toggle}=useSelector((state)=>state.toggle)
  return (
    <div>
      {toggle? <Register/>: <Login/>}
    </div>
  
  );
}

export default AuthLayout;
