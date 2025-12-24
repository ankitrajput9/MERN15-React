import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthLayout from '../layouts/AuthLayout';
import HomeLayout from '../layouts/HomeLayout';

const App = () => {

const router = createBrowserRouter([
{
  path:"/",
  element:(<AuthLayout/>)
//  Component:AuthLayout                   //  we can call component like that also in router 
},
{
  path:"/home",
  element:(<HomeLayout/>)
}
])

  return <RouterProvider router={router}/>
}

export default App;
