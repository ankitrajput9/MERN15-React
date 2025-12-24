import React from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setcurrentSong, PlayorPause } from '../../features/songSlice';
import { current } from '@reduxjs/toolkit';

const Songcard = ({ elem }) => {
  const dispatch = useDispatch()
  const {currentSong,isPlaying}=useSelector((state)=>state.music)
console.log(isPlaying)
  let handleClick = () => {
    {currentSong?.id=== elem.id ? dispatch(PlayorPause()):dispatch(setcurrentSong(elem))}
  
  // 
  }
  return (
    <div id='songcard' className='h-50 w-[22%] bg-gray-400/10 mt-4 rounded-lg overflow-hidden'>
      <div className='h-[80%] '>
        <img className='h-full w-full' src={elem.img} alt="" />
      </div>
      <div className='flex items-center justify-between px-4 py-1'>
        <h1 className='text-lg font-medium' >{elem.title}</h1>
        <button onClick={handleClick} className=' opacity-0 cursor-pointer'><FaCirclePlay size={35} color='#60C95A' /></button>
      </div>
    </div>
  );
}

export default Songcard;
