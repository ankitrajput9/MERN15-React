import React from 'react';
import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router';

const App = () => {
let {pathname} =useLocation()
  return (
    <div>
      
      {pathname === '/'?'':<Navbar/>}
      <div className='p-4'>
<AppRouter  />
      </div>
    </div>
  );
}

export default App;
