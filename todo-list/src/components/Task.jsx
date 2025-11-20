import React, { useContext, useState } from 'react';
import List from "./List"
import { Tasks } from '../context/Context';
const Task = () => {
let {Inputvalue}=useContext(Tasks)
const [toggle, setTogglr] = useState(false)
  return (
    <div className='h-[70%] overflow-y-auto w-[70%] border bg-amber-200 rounded-2xl p-4 flex items-center gap-3 flex-col '>
  
  {Inputvalue.length===0?(<p className='text-2xl font-semibold text-red-700'>No Task added</p>): (Inputvalue.map((elem )=>{
return <List key={elem.id} elem={elem}/>

}))} 
  
  
  
  
 

    
    </div>
  );
}

export default Task;
