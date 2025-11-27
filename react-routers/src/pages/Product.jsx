import React from 'react';
import {Link, Outlet} from 'react-router'

const Product = () => {
  return (
    <>
    <div style={{
      display:"flex",
           flexDirection:"column",
        padding:"10px",
        alignItems:"center",
        height:"100vh",
        fontSize:"30px",
        fontWeight:"bold"
      }} >
     <h1>Product</h1>
      <Outlet/>
     <div style={{
      display:"flex",
      gap:"34px",
      

     }} >
      <h6> <Link to='/product/men'>mens</Link> </h6>
      <h6> <Link to='/product/womens'>womens</Link> </h6>
     </div>
      <img style={{ height:" 70vh",}} src="/Product.svg" alt="" />
    </div>
      </>
  );
}

export default Product;
