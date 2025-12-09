import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
  const user = useLoaderData();
  console.log(user)
  return (
    <div className=''>
    { user.map((e,idx)=>{
     return (
      <h1 key={idx} >{e.email}</h1>
     )
     })}
    </div>
  );
}

export default Home;
