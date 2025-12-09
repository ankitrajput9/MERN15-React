import React, { useContext } from 'react';
import { MyContext } from '../../context/Context';
import { Navigate, Outlet, useNavigate } from 'react-router';

const Protected = () => {
    let {logindata}=useContext(MyContext)
    // let navigate =useNavigate()

    if(!logindata){
        return <Navigate to="/"/>
    }
  return (
   <Outlet/>
  );
}

export default Protected;
