import React, { useState } from 'react';

const Register = ({ onClick,setUserData,userData }) => {
    const [formData, setFormData] = useState({
        username:'',
        fullname:'',
        password:'',
    })
    const handleChange=(e)=>{
        let{name,value}=e.target
    setFormData({...formData,[name]:value})
}
const handleSubmit=(e)=>{
e.preventDefault()
const updatedUser=[...userData,formData]
setUserData(updatedUser)
localStorage.setItem("user",JSON.stringify(updatedUser))
alert("user Register succesfully 🎉🎉")
setFormData({
        username:'',
        fullname:'',
        password:'',
    })
}

    return (
        <div className='flex flex-col justify-center items-center ' >

            <h1 className='text-lg font-bold p-3' >Register Form</h1>
            
            <form onSubmit={handleSubmit} className='flex flex-col w-100 gap-4 border border-gray-500 rounded-2xl shadow-2xl px-9 py-20' action="">
                
                <input
                value={formData.username}
                name="username"
                onChange={handleChange}
                    className='border rounded-lg px-4 py-2 '
                    type="text"
                    placeholder='Username' />


                <input
                value={formData.fullname}
                name="fullname"
                onChange={handleChange}
                    className='border rounded-lg px-4 py-2 '
                    type="text"
                    placeholder='Fullname' />


                <input 
                value={formData.password}
                name="password"
                onChange={handleChange}
                className='border rounded-lg px-4 py-2 ' 
                type="password" 
                placeholder='Password'
                required/>


                <button className='bg-blue-700 px-8 py-2 rounded-2xl cursor-pointer' >Register</button>
                
                <p className='text-lg text-center'>
                    If already have an account. <span onClick={onClick} className='cursor-pointer font-bold text-blue-700' >Sign In</span>
                </p>
            </form>
        </div>
    );
}

export default Register;
