import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import Login from './Login';
import Register from './Register';
import { useLocation } from 'react-router';

const Authpage = () => {
    
    let {toggle}= useSelector((state)=>state.toggle)
  return (
    <div>

      {toggle?<Login/>:<Register/>}
    
    </div>
  );
}

export default Authpage;
