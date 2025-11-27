import React from 'react';
import { Routes, Route } from "react-router";
import Home from '../pages/Home';
import About from "../pages/About"
import Contact from "../pages/Contact"
import Product from "../pages/Product"
import NoteFound from '../pages/NoteFound';
import Men from '../pages/Men';
import Women from '../pages/Women';


const RouterApp = () => {
  return (
 <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/product' element={<Product/>}>
  <Route path='men' element={<Men/>}/>
  <Route path='womens' element={<Women/>}/>

  </Route>
  <Route path='*' element={<NoteFound/>} />

 </Routes>
  );
}

export default RouterApp;
