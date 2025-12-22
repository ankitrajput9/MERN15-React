import React from 'react';
import { productsData } from '../apis/productApi';
import { useQuery } from '@tanstack/react-query';

export const productqueryhook = () => {
 return useQuery({
  queryKey:["product"],
  queryFn:productsData,
  staleTime:Infinity
})

}


