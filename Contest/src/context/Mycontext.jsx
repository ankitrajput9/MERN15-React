import { createContext, useState } from "react";

export const MyContext = createContext()


export const ContextProvider=({children})=>{
    const [chrome, setChrome] = useState(false)
    const [recycle, setRecycle] = useState(false)
    const [fileexplorer, setFileexplorer] = useState(false)
   
 

    return <MyContext.Provider value={{chrome,setChrome,recycle, setRecycle,fileexplorer,setFileexplorer}} >
        {children}
    </MyContext.Provider>
}