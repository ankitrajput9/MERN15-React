import React from 'react';
import AppRouters from './router/appRouters';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router';

const App = () => {
  let {pathname} =useLocation()
     
  return (
    <div className='h-screen ' >
    {pathname === "/"?null:  <Navbar/>}
    <div className='p-4'>
      <AppRouters  />
    </div>
    </div>
  );
}

export default App;
