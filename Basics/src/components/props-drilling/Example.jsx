import React from 'react';

const Example = (props) => {
  return (
    <div className='h-120 w-80 bg-red-300 rounded-3xl text-center '>
      <h1 className='p-3'>Hello My Name is {props.user} </h1>
      <img className='rounded-full h-80 w-full bg-cover' src={props.img} alt="" />
    </div>
  );
}

export default Example;
