import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from '../layout/AuthLayout';
import Login from '../components/Login';
import Register from '../components/Register';
import HomeLayout from '../layout/HomeLayout';
import Users from '../pages/Users';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import axios from 'axios';
import Loading from '../components/Loading';
import Notfound from '../pages/Notfound';
import Protected from '../components/protection/Protected';
import Public from '../components/protection/Public';
const AppRouter = () => {

  let datafetch = async () => {
    try {
      let res = await axios.get('https://fakestoreapi.com/users')
      if (res) {

        return res.data
      }
    } catch (error) {
      console.log("here is user api error", error)

    }
  }


  let products = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products")
      if (res) {
        return res.data
      }
    } catch (error) {
      console.log("Api is missing of products", error)

    }
  }
  let router = createBrowserRouter([
    {path:'/',
      element:(<Public/>),
      children:[
 {
      path: '/',
      element: (<AuthLayout />),
      children: [{
        path: "/login",
        element: (<Login />)
      },
      {
        path: "/register",
        element: (<Register />)
      }]
    },
      ]
    },
   
    {
      path:"/home",
      element:(<Protected/>),
      children:[
 {
      path: '',
      element: (<HomeLayout />),
      children: [
        {
          index: true,
          element: (<Home />)
        },
        {
          path: "users",
          loader: (datafetch),
          element: (<Users />),
          hydrateFallbackElement: <Loading />,
          errorElement: <Notfound />
        },
        {
          path: "products",
          loader: (products),
          element: (<Product />),
          hydrateFallbackElement: <Loading />,
          errorElement: <Notfound />

        },
        {
          path: "cart",
          element: (<Cart />)
        }
      ]
    }
      ]
    },
   
  ])
  return <RouterProvider router={router} />
}
export default AppRouter;
