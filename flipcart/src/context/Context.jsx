import { createContext, useState } from "react";

export let MyContext =createContext()

export let ContextProvider= ({children})=>{

const [cartitem, setCartitem] = useState([]);
const [saveddata, setSaveddata] = useState(()=>{
      return JSON.parse(localStorage.getItem("userData")) || []
  })
  const [logindata, setLogindata] = useState(()=>{return JSON.parse(localStorage.getItem("log user"))||null})
 
console.log(logindata)
   return <MyContext.Provider value={{cartitem,setCartitem,saveddata,setSaveddata,logindata,setLogindata}} >
        {children}
    </MyContext.Provider>
}