import { createContext, useState } from "react";

export const Mystore = createContext()

export const Myprovider = ({children})=>{

    const [num, setNum] = useState("")
  console.log(num)
return(

    <Mystore.Provider value={{num,setNum}}>
        {children}
    </Mystore.Provider>
)

}