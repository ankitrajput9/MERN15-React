import React from 'react';

const About = () => {
  return (
    <div style={{
        display:"flex",
          flexDirection:"column",
        padding:"10px",
        alignItems:"center",
        height:"100vh",
        fontSize:"30px",
        fontWeight:"bold"
    }} >
    <h1>About</h1>
      <img style={{ height:" 70vh",}} src="/About.svg" alt="" />
    </div>
  );
}

export default About;
