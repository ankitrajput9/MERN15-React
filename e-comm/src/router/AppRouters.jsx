import React from 'react';
import Authpage from '../pages/Authpage';
import {Routes,Route} from "react-router"
import Home from '../pages/Home';
import ProtectedRoute from '../components/ProtectedRoute';
import PublicRoute from '../components/PublicRoute';
import Users from '../pages/Users';

const AppRouters = () => {
  return (
   <Routes>
    <Route path="/" element={<PublicRoute>
        <Authpage/>
    </PublicRoute>}/>
    <Route path="/home" element={<ProtectedRoute>
        <Home/>
    </ProtectedRoute>}/>

  <Route path='/users' element={<ProtectedRoute>
    <Users/>
  </ProtectedRoute>} />
   </Routes>
  );
}

export default AppRouters;
