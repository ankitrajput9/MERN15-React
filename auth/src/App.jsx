import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {

  const [toggle, setToggle] = useState(false)
  const [userData, setUserData] = useState([])
console.log(userData)
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center' >
      <h1 className='text-2xl font-bold'>Authentication</h1>
      {toggle? <Register onClick={()=>setToggle(prev=>!prev)} setUserData={setUserData} userData={userData} />: <Login onClick={()=>setToggle(prev=>!prev)} setUserData={setUserData}/>}
     
    </div>
  );
}

export default App;
