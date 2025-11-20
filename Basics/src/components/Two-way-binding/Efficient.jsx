import React, { useState } from 'react';

const Efficient = () => {
    const [formData, setformData] = useState({
name:'',
email:'',
mobile:'',
dob:"",
    })
    const handleChange =(e)=> {
        let {name,value}=e.target
setformData({...formData ,[name]:value})
};
const handleSubmit=(e)=>{
  e.preventDefault();
    console.log(formData);
e.target.reset()

}


  return (
    <div>
<form onSubmit={handleSubmit} className='flex gap-4' action="">


    <input name='name' 
    onChange={handleChange}
     className=' border rounded-2xl p-2' 
     type="text" 
     placeholder='Name' />


    <input name='email' 
    onChange={handleChange} 
    className=' border rounded-2xl p-2'  
    type="text" 
    placeholder='email' />


    <input name='mobile' 
    onChange={handleChange} 
    className=' border rounded-2xl p-2' 
    type="text" 
    placeholder='mobile' />


    <input name='dob' 
    onChange={handleChange} 
    className=' border rounded-2xl p-2' 
    type="text" 
    placeholder='dob' />


    <button className='bg-green-300 px-4 rounded-3xl' >Submit</button>

</form>
    </div>
  );
}

export default Efficient;
