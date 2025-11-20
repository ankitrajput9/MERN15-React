import { createContext, useState } from "react";

export const Store = createContext()


export const ContextProvider=({children})=>{

const [greet, setGreet] = useState("hello i am groot")

    return(
    <Store.Provider value={{greet}} >
    {children}
</Store.Provider>
    )
    
}