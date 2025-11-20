import React from 'react';
import Inputfield from './components/Inputfield';
import Task from './components/Task';

const App = () => {
  return (
    <div className=' gap-12 bg-blue-300 h-screen w-full flex justify-center items-center flex-col' >
   <h1 className='text-4xl font-bold text-pink-800'>   TODO-LIST</h1>
      <Inputfield/>
      <Task/>
    </div>
  );
}

export default App;
