import React, { useContext } from 'react';
import { useForm} from "react-hook-form"
// import { NavLink } from 'react-router';
import { MyContext } from '../context/Context';
import { useNavigate } from 'react-router';
const Login = ({setToggle}) => {
  let navigate =useNavigate()
let{saveddata,setLogindata}=useContext(MyContext)
  const {register,handleSubmit,reset,formState:{errors}}=useForm()
 let submitData=(data)=>{
  let user = saveddata.find((val)=>val.email === data.email&& val.password === data.password  ) 

  if(!user){
    alert("Invalid credentials")
    return;
  }
  setLogindata(user)
  localStorage.setItem("log user",JSON.stringify(user))
navigate("/home")
  alert("login succesfully")
reset()

 }

  return (
    <div>
     <div className="w-full min-h-screen flex items-center justify-center bg-[#f1f3f6]">
      
      <div className="w-[850px] bg-white shadow-lg rounded-lg flex overflow-hidden">
        
        {/* Left Blue Section */}
        <div className="w-1/3 bg-[#2874f0] text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold">Login</h2>
          <p className="mt-4 text-sm opacity-90">
            Get access to your Orders, Wishlist and Recommendations
          </p>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
            alt="login"
            className="mt-10"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-2/3 p-10 flex flex-col justify-center">
          <form onSubmit={handleSubmit(submitData)} className="space-y-6">
            
            {/* Mobile / Email Field */}
            <div>
              <input
              {...register("email",{required:true})}
                type="text"
                placeholder="Enter Email / Mobile number"
                className="w-full border-b-2 outline-none py-2 text-[15px] focus:border-blue-500"
                />
                {errors.emailorphone && <p className="text-red-500 text-sm mt-1">This field is required</p>}
            </div>

            {/* Password Field */}
            <div>
              <input
               {...register("password",{required:true})}
                type="password"
                placeholder="Enter Password"
                className="w-full border-b-2 outline-none py-2 text-[15px] focus:border-blue-500"
              />
                {errors.password && <p className="text-red-500 text-sm mt-1">This field is required</p>}

            </div>

            <p className="text-sm text-blue-600 cursor-pointer">
              Forgot Password?
            </p>

            {/* Login Button */}
            <button
            // to="/home"
              type="submit"
              className="w-full cursor-pointer bg-[#fb641b] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#e85a15] transition"
            >
                 Login {/* <NavLink  to="/home" >Login</NavLink> */}
            </button>
        

            <p className="text-center text-sm text-gray-500">
              OR
            </p>

            {/* OTP Login */}
            <button className="w-full border border-gray-400 py-2 rounded-md hover:bg-gray-100 transition">
              Request OTP
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            New to Flipkart? <span onClick={()=> setToggle(prev => !prev)} className="text-blue-600 cursor-pointer font-medium">Create an account</span>
          </p>
        </div>

      </div>
      
    </div>
    </div>
  );
}

export default Login;
