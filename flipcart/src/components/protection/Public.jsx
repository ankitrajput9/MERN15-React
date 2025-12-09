import React, { useContext } from 'react';
import { MyContext } from '../../context/Context';
import { Navigate, Outlet } from 'react-router';

const Public = () => {

   let {logindata}= useContext(MyContext)
   if(logindata){
    return<Navigate to="/home" />
   }
  return (
   <Outlet/>
  );
}

export default Public;
