import React from 'react';
import { useSelector } from 'react-redux';

const ArtistCard = () => {
   let {currentSong}= useSelector((state)=>state.music)
  return (
    <div className='h-[40%] w-[90%] absolute -bottom-35 ' >
        <div className='relative '>
        <img className='h-full w-full object-cover rounded-lg ' src="https://imgs.search.brave.com/rznZwHxD0TVOiWemiuM1-KTJFe59AdK3J7jfMTzg1m4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21iY29udGVudC9p/bWFnZXMvY3JvcC91/cGxvYWRzLzIwMjUv/Ni9BaGFhbi1wYW5k/ZXktcGhvdG9zaG9v/dF8wXzEyMDAuanBn/LndlYnA" alt="" />
        <h1 className='absolute top-0 p-3 text-xl font-medium'>{currentSong?.artist}</h1>
        </div>
      
    </div>
  );
}

export default ArtistCard;
