import React, { use, useState } from 'react';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';

const App = () => {

 const [toggle,setToggle]=useState(false);
  return (
    <div className='flex justify-center items-center h-screen '>
{toggle ? <RegisterForm onSwitch={()=>setToggle(prev=> !prev)} /> : <LoginForm onSwitch={()=>setToggle(prev=> !prev)} /> }

{/* {toggle ? <LoginForm setToggle={setToggle} /> : <RegisterForm  setToggle={setToggle} /> } */}
      
    </div>
  );
}

export default App;
