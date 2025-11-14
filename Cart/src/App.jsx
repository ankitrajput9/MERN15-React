import React, { useState } from 'react';
import Navbar from './components/navbar';
import Productcart from './components/ProductCArt';
import Cart from './components/Cart';

const App = () => {

  const ProductArr=[
  {
    id: 1,
    img_url: "https://images.unsplash.com/photo-1585386959984-a41552231693",
    product_name: "Wireless Headphones",
    price: "₹1,299"
  },
  {
    id: 2,
    img_url: "https://images.unsplash.com/photo-1606813902759-8b89f1c1e0c3",
    product_name: "Smart Watch Series 7",
    price: "₹5,499"
  },
  {
    id: 3,
    img_url: "https://images.unsplash.com/photo-1561715276-a2d4b72a494b",
    product_name: "Running Shoes",
    price: "₹2,499"
  },
  {
    id: 4,
    img_url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    product_name: "Mirrorless Camera",
    price: "₹38,999"
  },
  {
    id: 5,
    img_url: "https://images.unsplash.com/photo-1595433562696-a8b1cb8cd91f",
    product_name: "Leather Backpack",
    price: "₹1,799"
  },
  {
    id: 6,
    img_url: "https://images.unsplash.com/photo-1616628188464-561a0c62eec7",
    product_name: "Bluetooth Speaker",
    price: "₹999"
  },
  {
    id: 7,
    img_url: "https://images.unsplash.com/photo-1556906781-9a412961c28c",
    product_name: "Gaming Mouse RGB",
    price: "₹899"
  },
  {
    id: 8,
    img_url: "https://images.unsplash.com/photo-1606811841689-47b7c0d9e9f3",
    product_name: "Men’s Analog Watch",
    price: "₹3,199"
  },
  {
    id: 9,
    img_url: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba2",
    product_name: "Scented Soy Candle",
    price: "₹349"
  },
  {
    id: 10,
    img_url: "https://images.unsplash.com/photo-1621072155804-1b88ca0a9681",
    product_name: "Wooden Sunglasses",
    price: "₹699"
  }
];



const [IsCartOpen, setIsCartOpen] = useState(false)
const [CartItem, setCartItem] = useState([])

console.log(CartItem)
  return (
    <div className='h-screen w-full' >
    <Navbar setIsCartOpen={setIsCartOpen}/>
<div className='flex flex-wrap gap-6'>

    {ProductArr.map((elem)=>{
      return(
        
        <Productcart key={elem.id} setCartItem={setCartItem} elem={elem}/>
      )
    })}
</div>
<div className='flex '>

    {IsCartOpen? <Cart CartItem={CartItem}/>:''}
</div>
   
    </div>
  );
}

export default App;
