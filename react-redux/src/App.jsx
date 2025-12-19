import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment } from './feature/counterslice';
const App = () => {
 let {count}=useSelector((state)=>state.counter)
 let dispatch = useDispatch()
 
  return (
    <div className='flex flex-col justify-center items-center  h-screen '>
     <h1> Redux -{count}</h1>
      <button className='py-2 px-4 bg-red active:scale-95 cursor-pointer' onClick={()=>dispatch(increment())}>Inc</button>
      <button className='py-2 px-4 bg-green active:scale-95 cursor-pointer' onClick={()=>dispatch(decrement())}>Dec</button>

    </div>
  );
}

export default App;
