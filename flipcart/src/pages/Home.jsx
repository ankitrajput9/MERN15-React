import React from 'react';
import { useLocation } from 'react-router';
import Slider from '../components/Slider';
import Multiproduct from '../components/Multiproduct';

const Home = () => {

 
  return (
    <div className='p-2 '>
      <Slider/>
      <Multiproduct/>
    </div>
  );
}

export default Home;
