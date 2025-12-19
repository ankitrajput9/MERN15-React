import React from 'react';
import {useDispatch,useSelector} from "react-redux"
import {useForm} from "react-hook-form"
import {setUser} from "../feature/authSlice"
import { setToggle } from '../feature/toggleslice';
const Login = () => {
  let {register,handleSubmit,reset,formState:{errors}}=  useForm()
  let LSD = JSON.parse(localStorage.getItem("reg user"))||[];
    let dispatch = useDispatch()
    let handleData=(data)=>{

     let reg= LSD.find((val)=>val.email===data.email &&val.password===data.password)
     if(!reg){
      alert("Invalid Email or password")
      return
     }
alert("Login Succesfull")
localStorage.setItem('log user',JSON.stringify(reg))
dispatch(setUser(reg))
reset()
    }
  return (
   <section className="min-h-screen flex items-center justify-center bg-[#0f1113] px-4">
      <div className="w-full max-w-md bg-[#1a1b1d] border border-gray-700 rounded-xl p-8 text-white">

        <h2 className="text-center text-2xl tracking-widest font-light text-[#d9c08f] mb-8">
          LOGIN
        </h2>

        <form onSubmit={handleSubmit(handleData)} className="space-y-5">
          {/* Email */}
          <input
          {...register("email",{required:true})}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-transparent border border-gray-600 
                       rounded-md outline-none focus:border-[#d9c08f]"
          />

          {/* Password */}
          <input
          {...register("password",{required:true})}

            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-transparent border border-gray-600 
                       rounded-md outline-none focus:border-[#d9c08f]"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#d9c08f] text-black font-semibold 
                       rounded-md hover:bg-[#c5aa74] transition"
          >
            LOGIN
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <span onClick={()=>dispatch(setToggle(false))} className="text-[#d9c08f] cursor-pointer">Register</span>
        </p>

      </div>
    </section>
  );
}

export default Login;
Login