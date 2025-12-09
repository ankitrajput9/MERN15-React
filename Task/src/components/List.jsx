import React, { useContext } from 'react';
import { Mystore } from '../context/Context';

const List = ({elem}) => {
  let{num,setNum,setEditedId}=useContext(Mystore)

  let handleDelete=()=>{
let filteredarr= num.filter((val)=>{
  return val.id !==elem.id
})
setNum(filteredarr)
  }

let handleUpdate=()=>{
  setEditedId(elem.id)
}

  return (
    <div className='flex justify-between items-center  bg-amber-200 p-4 rounded'>
      <p className='text-lg font-semibold ' >{elem.task}</p>
      <div className=' flex gap-6'>
      <button onClick={handleUpdate} className='active:scale-95 cursor-pointer bg-green-700 py-2 px-4 rounded text-white font-semibold' >Update</button>
      <button onClick={handleDelete} className='active:scale-95  cursor-pointer bg-red-600 py-2 px-4 rounded text-white font-semibold' >Delete</button>
      </div>
    </div>
  );
}

export default List;

