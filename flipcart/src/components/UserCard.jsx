import React from 'react';

const UserCard = ({elem}) => {
  return (
    <div className='h-50 w-62 bg-blue-200 rounded-2xl gap-8 flex flex-col p-5' >
   <h1 className='text-center text-2xl text-white font-semibold' >{elem.username}</h1>
   <div className='font-semibold' >
    <p>email :{elem.email}</p>
    <p>phone :{elem.phone}</p>
    <p>address : {elem.address.city}</p>
   </div>
    </div>
  );
}

export default UserCard;
