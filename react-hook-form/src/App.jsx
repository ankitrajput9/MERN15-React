import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {

  const {register,handleSubmit,reset}= useForm()

  const formSubmitdata=(data)=>{
console.log(data)
reset()
   }
  return (
    <div>
   
   <form onSubmit={handleSubmit(formSubmitdata)} >
    <input {...register("name")} type="text" placeholder='name' />
    <input {...register("email")}  type="text" placeholder='email' />
    <input {...register("password")}  type="password" placeholder='password' />
    <input type="submit" value="Submit" />

   </form>
    </div>
  );
}

export default App;
