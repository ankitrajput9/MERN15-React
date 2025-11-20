import React, { useState } from 'react';

const Binding = () => {

const [inpvalue, setInpvalue] = useState("Naman")

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center ' >
      <h1 className='text-2xl font-bold' >Start Writing-{inpvalue}</h1>            {/* One Way binding- Here we connect input to react Now we see input values in React UI */}
      <input onChange={(e)=>{
          setInpvalue(e.target.value)
      }} 
      value={inpvalue}                 //   Two Way binding - Here react connect with Input tag and handle that tag 
      className='p-3 border-2' 
      type="text" 
      placeholder='Entre Text ....' />
    </div>
  );
}

export default Binding;
