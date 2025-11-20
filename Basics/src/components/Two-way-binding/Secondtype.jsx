import React, { useState } from 'react';

const Secondtype = () => {

  const [input, setInput] = useState({
    name:'',
    email:'',
    pass:'',
    dob:'',
  })
  const handleSubmit = (e) => {
    e.preventDefault(); // stop form reload
    console.log("Form Submitted:", input);

  };

  console.log(input)
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex gap-4' >
<input
className='border-2'
onChange={(e)=>{
  setInput({...input,name:e.target.value})
}}
 type="text"
  placeholder='name' />

<input 
onChange={(e)=>{
  setInput({...input,email:e.target.value})
}}
className='border-2'
type="text" placeholder='email' />


<input 
onChange={(e)=>{
  setInput({...input,pass:e.target.value})
}}
className='border-2'
type="password" placeholder='pass' />
<input 
onChange={(e)=>{
  setInput({...input,dob:e.target.value})
}}
className='border-2'
type="date" placeholder='dob' />

<button className='border-2 rounded-2xl p-2 ' >submit</button>
      </form>
    </div>
  );
}

export default Secondtype;
