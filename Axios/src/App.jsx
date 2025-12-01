import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './component/Card';

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
    <div className='flex h-screen flex-wrap gap-10 p-6'>
    {product.map((elem)=>{
     return <Card key={elem.id} elem={elem}/>
    })}
    </div>
  );
}

export default App;
