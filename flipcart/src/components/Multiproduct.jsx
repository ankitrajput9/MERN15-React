import React from 'react';

const Multiproduct = () => {

   const Product = [
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/4ad9f9dc90fb6383.jpg?q=80",
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/87dff936676fa848.jpg?q=80",
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/dbbffbdfa8b60162.jpg?q=80",
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ea49dceee3d4fd3c.jpg?q=80",
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/463263b21b8ca0c0.jpg?q=80",
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/256757e6f744efe0.jpg?q=80",

    ]

  return (
    <div>
      <div className='flex gap-x-2 mt-1 flex-wrap justify-center' >
        {Product.map((elem,idx)=>{
            return <img key={idx} className='  h-50 inline-block cursor-pointer ' src={elem} alt="" />
        })}
      </div>
    </div>
  );
}

export default Multiproduct;
