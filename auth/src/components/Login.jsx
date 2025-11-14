import React, { useState } from 'react';

const Login = ({ onClick, userData }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        let { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const exist = userData.find((user) => user.username === formData.username)
        if (!exist) {
            alert("user not found")
            return;
        }
        const checkCred = userData.find((user) => user.username === formData.username && user.password === formData.password)
        if (checkCred) {
            alert("Loged in ")
        }
        else {
            alert("invalid credentials")
        }
        setFormData({
            username: '',
            password: ''
        })
    }

    return (
        <div className='flex flex-col justify-center items-center ' >

            <h1 className='text-lg font-bold p-3' >Login Form</h1>
            <form onSubmit={handleSubmit} className='flex flex-col w-100 gap-4 border border-gray-500 rounded-2xl shadow-2xl px-9 py-20' action="">
                <input value={formData.username} name='username' onChange={handleChange} className='border rounded-lg px-4 py-2 ' type="text" placeholder='Username' />
                <input value={formData.password} name="password" onChange={handleChange} className='border rounded-lg px-4 py-2 ' type="password" placeholder='Password ' required />
                <button className='bg-blue-700 px-8 py-2 rounded-2xl cursor-pointer' >Log In</button>
                <p className='text-lg text-center'>
                    If you don't have an account. <span onClick={onClick} className='cursor-pointer font-bold text-blue-700' >Register</span>
                </p>
            </form>
        </div>
    );
}

export default Login;
