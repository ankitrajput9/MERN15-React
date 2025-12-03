import React, { useContext } from 'react';
import Bar from '../components/Bar';
import Crome from './Crome';
import File from "./File"
import Recyclebin from "./Recyclebin"
import { MyContext } from '../context/Mycontext';
const Home = () => {
  let{chrome,recycle,fileexplorer}=useContext(MyContext)
  return (
    <div className='h-screen' >
      <img className='h-[93%] w-full object-cover' src="/bg.jpg" alt="" />
   <Bar/>
   {/* {chrome === true?  <Crome/>:''} */}
   {chrome && <Crome/>}
   {recycle === true?<Recyclebin/>:''}
   {fileexplorer === true?<File/>:''}

  
    </div>
  );
}

export default Home;

