import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [product, setProduct] = useState([])
 console.log(product)
  useEffect(() => {
    ( async()=>{
    try {
      let res= await axios.get('https://fakestoreapi.com/products')
      setProduct(res.data)
     
    } catch (error) {
      console.log("Here is your error",error)
    }
    
  })()
  }, [])
  

  return (
    <div className='flex flex-col'>
    {product.map((elem)=>{
     return(
      <h1 key={elem.id} >{elem.title}</h1>
     )
    })}
    </div>
  );
}

export default App;
