import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToggle } from '../../../e-comm/src/feature/toggleslice';
import { useForm } from 'react-hook-form'
const Register = () => {
  const dispatch =  useDispatch()
  let { register, reset, handleSubmit, formState: { errors } } = useForm()
  const [userdata, setUserdata] = useState([])
  let handleData=(data)=>{  
    let arr = [...userdata,data]
    setUserdata(arr)
    localStorage.setItem("reg user", JSON.stringify(arr))
    console.log(data)
    reset()
  }
  return (
    <div className='h-[60%] w-[45%] rounded-2xl p-4 flex items-center justify-center shadow-2xl'>
      <form  onSubmit={handleSubmit(handleData)} className='flex flex-col items-center gap-5' >
        <div className='flex flex-col gap-6'>

          <input
          {...register("name")}
            type="text"
            placeholder='Enter your name'
            className='border rounded text-center text-lg px-8 ' />

          <input
          {...register("email",{required:true})}

            type="email"
            placeholder='Enter your Email'
            className='border rounded text-center text-lg px-8 ' />

          <input
          {...register("password",{required:true})}

            type="password"
            placeholder='Password'
            className='border rounded text-center text-lg px-8 ' />

        </div>
        <p>Already have an Account ?<span onClick={() => { dispatch(setToggle(false)) }} className='text-lg font-semibold text-blue-500 cursor-pointer ' >Log In</span></p>

        <button className='px-6 py-2 bg-blue-500 rounded active:scale-95 cursor-pointer' type='submit'>Register</button>

      </form>
    </div>
  );
}

export default Register;
