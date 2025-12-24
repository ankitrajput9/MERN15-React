import React from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { currentSong, isPlaying } from '../../features/songSlice';

const Songcard = ({elem}) => {
   const dispatch = useDispatch()

   let handleClick=()=>{
  dispatch(currentSong(elem))
  dispatch(isPlaying(true))
   }

  return (
    <div className='h-50 w-[22%] bg-gray-400/10 mt-4 rounded-lg overflow-hidden'>
        <div className='h-[80%] '>
      <img className='h-full w-full' src={elem.img} alt="" />
        </div>
        <div className='flex items-center justify-between px-4 py-1'>
      <h1 className='text-lg font-medium' >{elem.title}</h1>
      <button onClick={handleClick} className='   cursor-pointer'><FaCirclePlay  size={35} color='#60C95A'/></button>
        </div>
    </div>
  );
}

export default Songcard;
