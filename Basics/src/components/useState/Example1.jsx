import React, { useState } from 'react';

const Example1 = () => {

   let [LogIn,setLogIn]= useState(false)
  return (
    <div>
        
{LogIn? <h1>Welcomee!</h1>:<h1>Please LogIN</h1>}
      <button style={{padding:"10px", borderRadius:"10px", border:'none',backgroundColor:"lightseagreen"  }} onClick={()=>{
        setLogIn(!LogIn)
      }}>
        {LogIn?"Log Out": "Log In"}
      </button>



    </div>
  );
}

export default Example1;
