import React, { useContext, useState } from 'react';
// import { Link } from 'react-router';
import { MyContext } from '../context/Mycontext';

const Bar = () => {

let {setChrome,chrome,setFileexplorer,fileexplorer,setRecycle,recycle}=useContext(MyContext)



  return (
    <div  className='h-12 flex gap-5 relative  justify-center bg-gray-900/85 w-full' >
        <div className='flex gap-10  items-center ' >
   <button onClick={()=>{
setRecycle(!recycle)
   }} className='cursor-pointer' ><img className="h-8" src="https://cdn-icons-png.flaticon.com/128/14906/14906176.png" alt="" /></button>
   <button onClick={()=>{
setChrome(!chrome)
   }} className='cursor-pointer' ><img className="h-8" src="https://cdn-icons-png.flaticon.com/128/888/888846.png" alt="" /></button>
   <button onClick={()=>{
setFileexplorer(!fileexplorer)
   }} className='cursor-pointer' ><img className="h-8" src="https://cdn-icons-png.flaticon.com/128/2889/2889338.png" alt="" /></button>

        </div>



    </div>
  );
}

export default Bar;
