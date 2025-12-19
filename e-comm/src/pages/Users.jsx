import axios from 'axios';

import { usersTanstackhook } from '../customhooks/usersTanstackhook';

const Users = () => {

 const {data,isPending}= usersTanstackhook();
//  let usersdata=data||[]      instead of optioinal Chaining
  return (
    <div>
      {data?.map((data) => {
        return <h1 key={data.id} >{data.username}</h1>
      })}
    </div>
  );
}

export default Users;
