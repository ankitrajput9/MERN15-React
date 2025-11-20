import React, { useContext } from 'react';
import { Tasks } from '../context/Context';

const List = ({elem}) => {

  const {setInputvalue,Inputvalue}=useContext(Tasks)

  const handleUpdate=()=>{
   
  }
  const handleDelete =(e)=>{
    let filteredArr = Inputvalue.filter((val)=> val.id !== elem.id);
    localStorage.setItem("tasks",JSON.stringify(filteredArr));
    setInputvalue(filteredArr);
    alert("task deleted");
  }
  return (
    <div className='flex flex-col gap-3 w-full ' >
      <div className=' bg-red-300 py-3 rounded px-6 flex justify-between gap-15 items-center'>
      <p>{elem.task}</p>
      <div className='flex gap-5'>
        <button
        onClick={handleUpdate}
         className='py-2 px-5 bg-green-700 rounded text-white font-semibold active:scale-95 ' >Update</button>
        <button 
        onClick={handleDelete}
        className='py-2 px-5 bg-red-700 rounded text-white font-semibold active:scale-95 '  >Delete</button>
      </div>
      </div>

    </div>
  );
}

export default List;
