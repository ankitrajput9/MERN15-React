import React from 'react';
import { Route, Routes } from 'react-router';
import Authpage from '../pages/Authpage';
import Home from '../pages/Home';
import Users from '../pages/Users';
import ProtectedRoute from '../components/ProtectedRoute';
import PublicRoute from '../components/PublicRoute';
const AppRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PublicRoute>
            <Authpage />

          </PublicRoute>
         
        } />
      <Route
        path='/home'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
      <Route path='/users' element={
        <ProtectedRoute>
          <Users />
        </ProtectedRoute>
        } />

    </Routes>
  );
}

export default AppRouter;
