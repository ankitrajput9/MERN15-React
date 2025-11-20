import React, { useState } from 'react';
import Example1 from './Example1';
import AndOperator from './AndOperator';

const Usestate = () => {

let [count, setCount] = useState(0);

  return (
    <div style={{padding:"30px",display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column",gap:'20px'}}>
      <h1> Counter - {count}</h1>
      <div style={{display:"flex", gap:"20px"}}>
      <button onClick={()=>{
        setCount(++count);
      }} style={{padding:"10px", borderRadius:"10px", border:'none',backgroundColor:"lightseagreen"  }}>Increment</button>
      <button onClick={()=>{
        // first way to prevent negative value form old conditional update
if(count>0){
    setCount(--count);
}

        // second way to prevent negative value form functional update or ternary operator
        // setCount( count>0 ? --count : 0);.\


}} style={{padding:"10px", borderRadius:"10px", border:'none',backgroundColor:"lightseagreen"  }} >Decriment</button>
      </div>

                                                          {/* Examples   */}

      {/* <Example1 />
      <AndOperator/> */}
    </div>
  );
}

export default Usestate;
