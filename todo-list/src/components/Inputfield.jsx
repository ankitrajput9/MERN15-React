import React, { useContext, useEffect, useState } from 'react';
import { Tasks } from '../context/Context';
import { nanoid } from 'nanoid'
const Inputfield = () => {
  const [inputtask, setInputtask] = useState("")

const {setInputvalue,Inputvalue,editedId,setEditedId}=useContext(Tasks)


useEffect(() => {
if(editedId){
  let updatedArr= Inputvalue.find((elem)=>elem.id === editedId)
   setInputtask(updatedArr?.task); 
}
}, [editedId])

// Yaha complete form subbmission handle kiya hai ek function bana kr 
  const handleSubmit=(e)=>{
e.preventDefault()
// Agar input field empty hai to Empty Task add nahi hoga return ki wajha se ruk jayega 
if(inputtask.trim()===""){
  return
}


if(editedId){
  let updatedTask= Inputvalue.find((val)=>val.id === editedId)
 updatedTask.task=inputtask

 let upValue= [...Inputvalue]
 setInputvalue(upValue)
 localStorage.setItem("tasks",JSON.stringify(upValue))
setInputtask("")
setEditedId(null)
 return

}

// Context mai value send with the help of useContext or array ke andar object mai key value pair bana kr real value or unique id with the help of nanoid 
let updatedVal=[...Inputvalue,{id:nanoid() ,task:inputtask}]
setInputvalue(updatedVal)
localStorage.setItem("tasks",JSON.stringify(updatedVal))
setInputtask('')
  }

  return (
    <div>
      <form 
      onSubmit={handleSubmit}
       className='w-full  flex gap-10' >

  <input 
    // Input ki value nikali hai onChange handler laga kr 
  onChange={(e)=>{
setInputtask(e.target.value)
  }}
  // Two way binding ki hai value mai state de kr 
  value={inputtask}
  className='border py-2 px-8 rounded outline-none bg-amber-200' 
  type="text" 
  placeholder='Entre task here...' />


  <input 
  className='border py-2 rounded px-8 bg-pink-700 active:scale-95 cursor-pointer text-white font-bold' 
  type="submit" 
  value="Add" />

      </form>
    </div>
  );
}

export default Inputfield;
