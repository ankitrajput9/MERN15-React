
import { setToggle } from '../feature/toggleslice';
import {useDispatch} from "react-redux"
import {useForm} from "react-hook-form"
import { useState } from 'react';

const Register = () => {
   let {register,handleSubmit,formState:{errors},reset} = useForm()
   const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('reg user'))||[])
    let dispatch =useDispatch()
let handleData =(data)=>{
    let arr =[...user,data]
    setUser(arr)
 localStorage.setItem("reg user",JSON.stringify(arr))
  reset()
}
  
  return (
      <section className="min-h-screen flex items-center justify-center bg-[#0f1113] px-4">
      <div className="w-full max-w-md bg-[#1a1b1d] border border-gray-700 rounded-xl p-8 text-white">

        <h2 className="text-center text-2xl tracking-widest font-light text-[#d9c08f] mb-8">
          REGISTER
        </h2>

        <form onSubmit={handleSubmit(handleData)} className="space-y-5">
          {/* Name */}
          <input
          {...register("name",{required:true})}
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-transparent border border-gray-600 
                       rounded-md outline-none focus:border-[#d9c08f]"
          />

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

          {/* Confirm Password */}
          <input
          {...register("password",{required:true})}
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 bg-transparent border border-gray-600 
                       rounded-md outline-none focus:border-[#d9c08f]"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#d9c08f] text-black font-semibold 
                       rounded-md hover:bg-[#c5aa74] transition"
          >
            REGISTER
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <span onClick={()=>dispatch(setToggle(true))} className="text-[#d9c08f] cursor-pointer">Login</span>
        </p>

      </div>
    </section>
  );
}

export default Register;
