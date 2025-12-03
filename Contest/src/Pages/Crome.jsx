import React, { useContext } from 'react';
import { MyContext } from '../context/Mycontext';

const Crome = () => {
  let { setChrome } = useContext(MyContext)
  return (
    <div className='h-70 w-120  absolute top-[20%] left-[30%] bg-white border' >
      <div className='h-10 w-full bg-red-400 flex gap-2 justify-end p-3 items-center  '>
        <button className='bg-green-700 px-2 active:scale-95 cursor-pointer' >-</button>
        <button className='bg-yellow-300 px-2 active:scale-95 cursor-pointer' >⬜</button>
        <button onClick={() => {
          setChrome(false)
        }} className='bg-red-500 px-2 active:scale-95 cursor-pointer' >X</button>
      
      </div>
          <div className='bg-amber-300 w-120 h-60'>

            <iframe
              src="https://brave.com/"
              className=" w-full relative h-60"
              title="Chrome"
            />
          </div>

    </div>
  );
}

export default Crome;
