import React from 'react';
import { userqueryhook } from '../customHook.jsx/userqueryhook';

const Users = () => {
  let { data, isPending } = userqueryhook();
  return (
    <div>
      {data?.map((elem) => {
        return <h1 key={elem.id} >{elem.username}</h1>
      })}
    </div>
  );
}

export default Users;
<h1>Users</h1>