import React from 'react';
import { FaCirclePlay } from "react-icons/fa6";

const Songcard = ({elem}) => {
  return (
    <div className='h-50 w-[22%] bg-gray-400/10 mt-4 rounded-lg overflow-hidden'>
        <div className='h-[80%] relative '>
      <img className='h-full w-full' src={elem.img} alt="" />
      <button className=' absolute bottom-0 right-0 cursor-pointer'><FaCirclePlay  size={39} color='#60C95A'/></button>
        </div>
        <div className='flex items-center justify-center'>
      <h1 className='text-lg font-medium' >{elem.title}</h1>
        </div>
    </div>
  );
}

export default Songcard;
