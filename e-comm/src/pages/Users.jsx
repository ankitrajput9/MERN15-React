import axios from 'axios';

import { usersTanstackhook } from '../customhooks/usersTanstackhook';
import UsersCard from '../components/cards/UsersCard';

const Users = () => {

 const {data,isPending}= usersTanstackhook();
//  let usersdata=data||[]      instead of optioinal Chaining
  return (
    <div className='flex gap-5 flex-wrap justify-center' >
      {data?.map((data) => {
        return <UsersCard key={data.id} data={data}/>
      })}
    </div>
  );
}

export default Users;
