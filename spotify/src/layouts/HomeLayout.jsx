import React, { useRef } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { TiArrowLoop } from "react-icons/ti";
import { Split } from 'lucide-react';
import MusicNav from '../components/MusicNav';
import { IoMdAdd } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";




import Songcard from '../components/cards/Songcard';
import SongList from '../components/SongList';
import { useSelector } from 'react-redux';





const HomeLayout = () => {
  const {songs}=useSelector((state)=>state.data)
  const {currentSong}=useSelector((state)=>state.music)

  const audioref = useRef()
  const clickHandle=()=>{
    console.log("click")
    audioref.current.play()
  }

  return (

    <div className='h-screen ' >
      <Navbar />
      <div className='flex h-[80%] gap-1   justify-between  text-white  '>

        {/* LEFT COMPONENT  */}

        <div id='leftscroll' className='h-full flex flex-col gap-4 w-[22%]  bg-black/90  overflow-y-auto '>

          <div className='flex justify-between h-5 items-center p-4 sticky top-0  backdrop-blur-2xl z-2 '>
            <h1 className='font-medium'> Your Library</h1>
            <div className='flex gap-3 items-center '>
              <button><IoMdAdd size={25} /></button>
              <button><AiOutlineFullscreen size={25} /></button>
            </div>
          </div>

          <div className='flex gap-3 sticky top-9 py-2 border-b border-black backdrop-blur-2xl z-2 '>
            <button className='bg-gray-400/20 w-19 rounded-full py-1  text-center' >Music</button>
            <button className='bg-gray-400/20 w-19 rounded-full py-1  text-center' >podcast</button>
          </div>



          <div className='flex justify-between items-center'>
            <button><IoSearch size={20} /></button>
            <button className='flex justify-center items-center gap-2' ><p>Recent</p> <CiCircleList size={20} /> </button>
          </div>

          {/* mAIN  */}
          <div className='flex flex-col gap-2' >
           {songs.map((elem)=><SongList key={elem.id} elem={elem}/>)}

          </div>

        </div>

        {/* CENTRE COMPONENT  */}

        <div id='scroll' className='h-full w-[76%]  bg-black/90   overflow-y-auto'>
          <MusicNav />
          <div className='p-4'>
            <p className='text-xs text-gray-400/70'>made for</p>
            <div className='flex justify-between  '>
              <h1 className='text-2xl font-bold'>Ankit Rajput</h1>
              <p className='text-sm font-medium text-gray-400/70'>Show All</p>
            </div >
            <div className='flex gap-6 flex-wrap justify-center'>
             {songs.map((elem)=><Songcard key={elem.id} elem={elem}/>)}
            </div>

          </div>
        </div>
        {/* RIGHT COMPONENTS  */}


        <div className='h-full w-[22%]  bg-black/90 p-3'>right</div>
      </div>

      {/* pLAYER COMPONENT  */}

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
    </div>
  );
}

export default HomeLayout;
