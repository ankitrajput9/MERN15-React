import React from 'react';

const NoteFound = () => {
  return (
    <div style={{
         display:"flex",
        alignItems:"center",
        height:"  100vh",
        fontSize:"30px",
        fontWeight:"bold",
        flexDirection:"column",
        padding:"10px",
    }} >
      <img style={{
        alignItems:"center",
        height:"100vh"
      }} src="/Error.svg" alt="error" />
    </div>
  );
}

export default NoteFound;
