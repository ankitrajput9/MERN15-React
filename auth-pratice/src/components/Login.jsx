import React from 'react';
import { useDispatch } from 'react-redux';
import { setToggle } from '../../../e-comm/src/feature/toggleslice';
import { useForm } from 'react-hook-form';
import { setUser } from '../features/authSlice';

const Login = () => {

  const dispatch = useDispatch()
  let { register, reset, handleSubmit, formState: { errors } } = useForm()
let LSD =JSON.parse(localStorage.getItem("reg user")) ||[]
  let handleData=(data)=>{
let user = LSD.find((val)=> val.email===data.email && val.password=== data.password)
if(user){
  localStorage.setItem("log user",JSON.stringify(user))
  dispatch(setUser(user))
alert("Log in sucessFully")
}
else{
  alert("User not found or invalid credentials")
}
reset()
  }
  return (
    <div className='h-[60%] w-[45%] rounded-2xl p-4 flex items-center justify-center shadow-2xl'>
      <form onSubmit={handleSubmit(handleData)} className='flex flex-col items-center gap-5' >
        <div className='flex flex-col gap-6'>

          <input
            {...register('email', { required: true })}
            type="text"
            placeholder='Enter your email'
            className='border rounded text-center text-lg px-8 ' />


          <input
            {...register('password', { required: true })}

            type="password"
            placeholder='Password'
            className='border rounded text-center text-lg px-8 ' />

        </div>
        <p>Don't have an Account? <span onClick={() => { dispatch(setToggle(true)) }} className='text-lg font-semibold text-blue-500 cursor-pointer ' >Create One</span></p>

        <button className='px-6 py-2 bg-blue-500 rounded active:scale-95 cursor-pointer' type='submit'>Login</button>

      </form>
    </div>
  );
}

export default Login;
