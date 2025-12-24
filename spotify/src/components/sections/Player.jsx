import { Split } from 'lucide-react';
import React, { useRef } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { IoPlaySkipBackSharp, IoPlaySkipForward } from 'react-icons/io5';
import { TiArrowLoop } from 'react-icons/ti';
import { useSelector } from 'react-redux';

const Player = () => {
    const { currentSong } = useSelector((state) => state.music)
    const audioref = useRef()


    const clickHandle = () => {
        console.log("click")
        audioref.current.play()
    }
    return (
        <div className='h-[12%] bg-black'>
            <div className='flex flex-col text-white justify-center items-center h-full'>
                <div className='flex gap-4'>
                    <button className='cursor-pointer text-gray-500/70 font-medium'><Split size={20} /></button>
                    <button className='cursor-pointer'><IoPlaySkipBackSharp size={25} /></button>
                    <button onClick={clickHandle} className='cursor-pointer'> <FaPlayCircle size={39} /></button>
                    <button className='cursor-pointer'><IoPlaySkipForward size={25} /> </button>
                    <button className='cursor-pointer text-gray-500/70 font-medium'><TiArrowLoop size={20} /></button>
                </div>
                
                <audio ref={audioref} src={currentSong?.songUrl}></audio>

                <div className=' h-1 w-[40%] bg-gray-500 mt-2 rounded-2xl '>
                    <div className='h-1 w-[50%] rounded-2xl bg-green-600'>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Player;
