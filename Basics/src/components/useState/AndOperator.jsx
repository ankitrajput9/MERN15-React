import React, { useState } from 'react';

const AndOperator = () => {
   const [show,setShow]= useState(false)
  return (
    <div>
      <button onClick={()=>{
setShow(!show)
      }}>toggle</button>
      {show && <p>here is my toggle text</p>}
    </div>
  );
}

export default AndOperator;
