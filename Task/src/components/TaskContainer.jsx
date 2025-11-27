import React, { useContext } from 'react';
import List from './List';
import { Mystore } from "../context/Context"

const TaskContainer = () => {
    const { num } = useContext(Mystore)
    return (
        <div className='flex flex-col gap-4 mt-4'>            
         {num.map((elem)=>{
return <List key={elem.id} elem={elem}/>
         })}
        </div>
    );
}
export default TaskContainer;
