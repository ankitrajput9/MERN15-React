import { createContext, useState } from "react";

export const Mystore = createContext()

export const Myprovider = ({children})=>{

    const [num, setNum] = useState([])
    const [editedId, setEditedId] = useState(null)
return(

    <Mystore.Provider value={{num,setNum,editedId,setEditedId}}>
        {children}
    </Mystore.Provider>
)

}