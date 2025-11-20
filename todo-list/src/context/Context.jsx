import { createContext, useState } from "react";

export const Tasks = createContext();

export const TaskProvider= ({children})=>{
 const [Inputvalue, setInputvalue] = useState(()=>{
    return JSON.parse(localStorage.getItem("tasks"))||[];
 })
console.log(Inputvalue)
    return(
        <Tasks.Provider value={{setInputvalue,Inputvalue}} >
            {children}
        </Tasks.Provider>
    )
}