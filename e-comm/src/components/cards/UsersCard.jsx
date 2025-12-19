import React from 'react';

const UsersCard = ({ data }) => {
   
    return (
        <div className='h-60 rounded-2xl w-60 shadow-lg flex flex-col gap-4 p-4' >
            <h1 className='text-lg font-bold text-center'>{data.username}</h1>
            <div  className='flex flex-col gap-2'>
                <p>
                    <span className='font-semibold text-gray-800'> Name:</span>  {data.name.firstname} {data.name.lastname}
                </p>
                <p>
                    <span className='font-semibold text-gray-800'> password:</span>  {data.password}
                </p>
                <p>
                    <span className='font-semibold text-gray-800'> email:</span>  {data.email}
                </p>
                  <p>
                    <span className='font-semibold text-gray-800'> Address:</span>  {data.address.city}
                </p>
            </div>

        </div>
    );
}

export default UsersCard;
