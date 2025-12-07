import React, { useEffect, useState } from "react";

const Slider = () => {
  const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/5ab0f654d9161154.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/2746152f289ef43c.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/d6ad4b72e1e48fa6.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/bac6e385f3bd157c.jpeg?q=80",
    'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/aebf10e44c4c066f.jpeg?q=80'
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 2 sec
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full  h-64 mx-auto overflow-hidden relative  shadow-xl ">
      
      <div
        className="flex h-full transition-all duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}  // slide right → left
      >
        {images.map((img, i) => (
          <img key={i} src={img} alt="" className="w-full h-full object-cover shrink-0" />
        ))}
      </div>

      {/* indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
