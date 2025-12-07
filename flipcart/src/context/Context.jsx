import { createContext, useState } from "react";

export let MyContext =createContext()

export let ContextProvider= ({children})=>{

const [editedid, setEditedid] = useState(null) 
const [cartitem, setCartitem] = useState([]);
console.log(cartitem)

   return <MyContext.Provider value={{editedid,setEditedid,cartitem,setCartitem}} >
        {children}
    </MyContext.Provider>
}