
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from '../pages/HomeLayout'
import Home from '../pages/Home';
import About from '../pages/About';
import axios from "axios";
const Approuter = () => {

  let data = async () => {
    let res = await axios.get("https://fakestoreapi.com/users")
    return res.data
  }

  let router = createBrowserRouter([

    {
      path: "/",
      element: (<HomeLayout />),
      children: [{
        path: "/",
        element: (<Home />),
        loader: data,

      },
      {
        path: "/about",
        element: (<About />)
      }]
    }
  ])
  return <RouterProvider router={router} />
}

export default Approuter;
