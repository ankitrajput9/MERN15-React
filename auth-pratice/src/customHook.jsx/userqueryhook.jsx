import React from 'react';
import { userData } from '../apis/usersApi';
import { useQuery } from '@tanstack/react-query';

export const userqueryhook = () => {
  return  useQuery({
    queryKey:["users"],
    queryFn:userData,
    staleTime:Infinity
  })
}

