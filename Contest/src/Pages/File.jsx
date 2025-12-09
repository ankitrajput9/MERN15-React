import React, { useContext } from 'react';
import { MyContext } from '../context/Mycontext';

const File = () => {
 let{setFileexplorer}= useContext(MyContext)
  return (
      <div className='h-70 w-120 absolute top-[30%] opacity-100 left-[58%] bg-white border' >
       <div className='h-10 w-full bg-red-400 flex gap-2 justify-end p-3 items-center  '>
        <button className='bg-green-700 px-2 active:scale-95 cursor-pointer' >-</button>
        <button className='bg-yellow-300 px-2 active:scale-95 cursor-pointer' >⬜</button>
        <button onClick={()=>{
          setFileexplorer(false)
        }} className='bg-red-500 px-2 active:scale-95 cursor-pointer' >X</button>
      </div>
      Fileexplorer
    </div>
  );
}

export default File;
