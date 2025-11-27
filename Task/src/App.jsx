import React, { useContext, useEffect, useState } from 'react';
import { Mystore } from './context/Context';
import TaskContainer from './components/TaskContainer';
import  {nanoid} from 'nanoid'

const App = () => {
  let { setNum, num,editedId } = useContext(Mystore)
  const [inputVal, setInputVal] = useState("")
  useEffect(() => {
    if(editedId){
   let findId = num.find((val)=> val.id === editedId)
   setInputVal(findId.task)
    }
  }, [editedId])
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputVal.trim() === ""){
      return;
    }
if(editedId){
  let updatedArr = num.find((val)=>val.id === editedId) 
 updatedArr.task = inputVal
 let arr = [...num]
 setInputVal(arr)
 setInputVal("")
 return;
}


   setNum(prev=>[...prev,{id:nanoid(),task:inputVal}]) 
    setInputVal('')

  }
  return (
    <div className='p-5 '>
      <form className='flex gap-5' onSubmit={handleSubmit}>
        <input
          className='border px-3 rounded outline-none'
          value={inputVal}
          onChange={(e) => { setInputVal(e.target.value) }} type="text" placeholder='Type here...' />
          {editedId?<input className='border rounded py-2 px-4 bg-red-200  font-semibold active:scale-95' type="submit" value="update" />:<input className='border rounded py-2 px-4 bg-red-200  font-semibold active:scale-95' type="submit" value="submit" />}
        

      </form>
      <TaskContainer />
    </div>
  );
}

export default App;
