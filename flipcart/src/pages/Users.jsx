import React from 'react';
import { useLoaderData } from 'react-router';
import UserCard from '../components/UserCard';
const Users = () => {
  let users= useLoaderData()

  console.log(users)
  return (
    <div className='p-4 h-full w-full bg-gray-200  '>
      <div className='flex flex-wrap justify-center gap-4 overflow-x-hidden gap' >
  {users.map((elem)=>{
return <UserCard key={elem.id} elem={elem} />  })}

      </div>
    </div>
  );
}

export default Users;
