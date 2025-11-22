import { createContext, useState } from "react";

export const Tasks = createContext();

export const TaskProvider= ({children})=>{
 const [Inputvalue, setInputvalue] = useState(()=>{
    return JSON.parse(localStorage.getItem("tasks"))||[];
 })

 const [editedId, setEditedId] = useState(null)
    return(
        <Tasks.Provider value={{setInputvalue,Inputvalue,editedId,setEditedId}} >
            {children}
        </Tasks.Provider>
    )
}