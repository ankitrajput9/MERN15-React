import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router';
import { MyContext } from '../context/Context';

const Register = ({setToggle}) => {

const{setSaveddata,saveddata,getdata}  = useContext(MyContext);
    const {register,handleSubmit,reset,formState:{errors}}=useForm()


   let submitData=(data)=>{
  let arr=  [...saveddata,data]
  setSaveddata(arr)
   localStorage.setItem("userData",JSON.stringify(arr));
   alert("Registered sussesfully")
  reset() 

     

    
  
   }

  return (
    <div>
   <div className="w-full min-h-screen flex items-center justify-center bg-[#f1f3f6]">
      
      <div className="w-[850px] bg-white shadow-lg rounded-lg flex overflow-hidden">
        
        {/* Left Blue Section */}
        <div className="w-1/3 bg-[#2874f0] text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold">Looks like you're new here!</h2>
          <p className="mt-4 text-sm opacity-90">
            Sign up with your mobile number to get started
          </p>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
            alt="register"
            className="mt-10"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-2/3 p-10 flex flex-col justify-center">
          <form onSubmit={handleSubmit(submitData)} className="space-y-6">
            
            {/* Name */}
            <div>
              <input
              {...register("fullname",{required:true})}
                type="text"
                placeholder="Enter Full Name"
                className="w-full border-b-2 outline-none py-2 text-[15px] focus:border-blue-500"
              />
              {errors.fullname && <p className="text-red-500 text-sm mt-1">This field is required</p>}
            </div>

            {/* Mobile */}
            <div>
              <input
              {...register("mobile",{required:true})}
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full border-b-2 outline-none py-2 text-[15px] focus:border-blue-500"
              />
           {errors.mobile && <p className="text-red-500 text-sm mt-1">This field is required</p>}

            </div>

            {/* Email */}
            <div>
              <input
              {...register("email",{required:true})}
                type="email"
                placeholder="Enter Email ID"
                className="w-full border-b-2 outline-none py-2 text-[15px] focus:border-blue-500"
              />
                            {errors.email && <p className="text-red-500 text-sm mt-1">This field is required</p>}

            </div>

            {/* Password */}
            <div>
              <input
              {...register("password",{required:true})}
                type="password"
                placeholder="Create Password"
                className="w-full border-b-2 outline-none py-2 text-[15px] focus:border-blue-500"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">This field is required</p>}

            </div>

            {/* Register Button */}
            <button
            // to="/login"
              type="submit"
              className="w-full cursor-pointer bg-[#fb641b] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#e85a15] transition"
            >
              Continue
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Existing User? <span onClick={()=> setToggle(prev => !prev)} className="text-blue-600 cursor-pointer font-medium">Log in</span>
          </p>
        </div>

      </div>

    </div>
    </div>
  );
}

export default Register;
